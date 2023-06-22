import classNames from "classnames/bind";
import { useContext, useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import HeaderSeller from "~/layouts/components/HeaderSeller";
import ContentMessage from "./ContentMessage";
import styles from "./Message.module.scss";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import axios from "axios";

const cx = classNames.bind(styles);

var stompClient = null;
function Message() {
  const [inputSend, setInputSend] = useState("");
  const [conversations, setConversations] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputImageRef = useRef();
  const fileInputVideoRef = useRef();
  const textInputRef = useRef();
  const [shop, setShop] = useState({});

  useEffect(() => {
    axios
      .get("/api/v1/users/info")
      .then((res) => {
        if (res.data.shopDTO) {
          for (const key in res.data.shopDTO) {
            shop[key] = res.data.shopDTO[key];
          }
          setShop(shop);

          let Sock = new SockJS("http://localhost:8080/ws");
          stompClient = over(Sock);
          stompClient.connect({}, onConnected, onError);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onConnected = () => {
    setShop({ ...shop, connected: true });
    stompClient.subscribe("/personal/SHOP-" + shop.id, onMessageReceived);
    stompClient.subscribe(
      "/conversation-request/" + shop.id,
      onNewConversation
    );
    userJoin();
  };

  const userJoin = () => {
    let request = {
      fromId: shop.id,
      sendTime: new Date(),
      chatterType: "SHOP",
    };

    stompClient.send("/app/personal", {}, JSON.stringify(request));
  };

  const onNewConversation = (payload) => {
    const data = JSON.parse(payload.body);
    data.messages = data.messages || [];
    console.log(data)
    stompClient.subscribe("/conversation/" + data.id, onPrivateMessage);
    if (!conversations.find(it => it.id == data.id))
    {
      conversations.push(data);
      setConversations(Array.from(conversations));
    }
  };

  const onMessageReceived = (payload) => {
    var data = JSON.parse(payload.body);
    console.log(data);
    data.forEach((item, index) => {
      stompClient.subscribe("/conversation/" + item.id, onPrivateMessage);
      if (!conversations.find(it => it.id == item.id))
      {
        conversations.push(item);
      }
      setConversations(Array.from(conversations));
    });
  };

  const onPrivateMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);
    let conversation = conversations.filter(
      (it) => it.id === payloadData.conId
    )[0];
    console.log(conversation);
    let index = conversations.indexOf(conversation);
    if (!conversations[index].messages.find(it => it.id == payloadData.id))
    {
      conversations[index].messages.push(payloadData);
      setConversations([...conversations]);
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const sendPrivateValue = (e) => {
    e.preventDefault();
    if (stompClient) {
      var chatMessage = {
        fromId: shop.id,
        content: inputSend,
        sendTime: new Date(),
        conversationId: conversations[activeTab].id,
        chatterType: "SHOP",
      };

      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setInputSend("");
    }
  };

  const handleCall = () => {
    alert("This feature will be update in the future");
  };

  const handleClickImage = () => {
    fileInputImageRef.current.click();
  };

  const handleClickVideo = () => {
    fileInputVideoRef.current.click();
  };

  const handleClickEmoji = () => {
    setShowEmoji((val) => !val);
  };

  const onEmojiClick = (e) => {
    setInputSend((pre) => pre + e.emoji);
    textInputRef.current.focus();
    setShowEmoji(false);
  };

  return (
    <>
      <HeaderSeller title="Message" />
      <div className={cx("order_wrapper")}>
        <div className={cx("order_container")}>
          <div className={cx("order_content")}>
            <div className={cx("content-left")}>
              <div className={cx("header")}>
                <span className={cx("heading")}>Chat</span>
              </div>
              <div className={cx("search-container")}>
                <div className={cx("search")}>
                  <i
                    className={cx(
                      "fa-light fa-magnifying-glass",
                      "search-icon"
                    )}
                  ></i>
                  <input
                    type="text"
                    placeholder="Search..."
                    spellCheck={false}
                    className={cx("input-search")}
                  />
                </div>
              </div>
              <div className={cx("list-container")}>
                {conversations.map((con, index) => {
                  let len = con.messages.length
                  return con.conversationChatters
                    .filter((it) => {
                      return !it.shop;
                    })
                    .map((it, itIndex) => (
                      <div
                        key={index}
                        className={cx("user-chat", {
                          active: index === activeTab,
                        })}
                        onClick={() => setActiveTab(index)}
                      >
                        <img
                          src={"/api/v1/publics/user/avatar/" + it.user.email}
                          alt="avatar"
                          className={cx("user-avatar")}
                        />
                        <div className={cx("user-content")}>
                          <div className={cx("above")}>
                            <div className={cx("user-name")}>{it.user.firstname + " " + it.user.lastname}</div>
                            <div className={cx("date")}>{(new Date(con.messages[len - 1].sendTime)).toLocaleDateString()}</div>
                          </div>
                          <div className={cx("under")}>
                            <div className={cx("content-chat")}>
                              {con.messages[len - 1].content}
                            </div>
                            <div className={cx("time")}>{(new Date(con.messages[len - 1].sendTime)).toLocaleTimeString()}</div>
                          </div>
                        </div>
                      </div>
                    ));
                })}
              </div>
            </div>
            <div className={cx("content-right")}>
              {showEmoji && (
                <div className={cx("emojiPickerContainer")}>
                  <EmojiPicker
                    width={300}
                    height={350}
                    emojiStyle="facebook"
                    onEmojiClick={onEmojiClick}
                  />
                </div>
              )}
              <div className={cx("chat-header")}>
                <div className={cx("header-left")}>
                  <img
                    src={
                      conversations[activeTab] &&
                      conversations[activeTab].conversationChatters
                      .filter(it => !it.shop)
                      .map(it => "/api/v1/publics/user/avatar/" + it.user.email)[0]
                    }
                    alt="avatar"
                    className={cx("avatar")}
                  />
                  <span className={cx("name")}>
                    {
                      conversations[activeTab] &&
                      conversations[activeTab].conversationChatters
                      .filter(it => !it.shop)
                      .map(it => it.user.firstname + " " + it.user.lastname)[0]
                    }
                  </span>
                </div>
                <div className={cx("header-right")}>
                  <button className={cx("phone-btn")} onClick={handleCall}>
                    <i
                      className={cx("fa-sharp fa-solid fa-phone", "phone")}
                    ></i>
                  </button>
                  <button className={cx("video-btn")} onClick={handleCall}>
                    <i className={cx("fa-solid fa-video", "video")}></i>
                  </button>
                </div>
              </div>
              <div className={cx("chat-container")}>
                <ContentMessage
                  messages={
                    conversations[activeTab] &&
                    [...conversations[activeTab].messages].reverse()
                  }
                  shop={shop}
                />
              </div>
              <div className={cx("chat-footer")}>
                <div className={cx("option-input")}>
                  <div className={cx("image")}>
                    <i
                      className={cx("fa-regular fa-image", "icon-image")}
                      onClick={handleClickImage}
                    ></i>
                    <input
                      ref={fileInputImageRef}
                      type="file"
                      multiple
                      style={{ display: "none" }}
                      accept="image/*"
                    />
                  </div>
                  <div className={cx("video")}>
                    <i
                      className={cx(
                        "fa-sharp fa-regular fa-circle-play",
                        "icon-video"
                      )}
                      onClick={handleClickVideo}
                    ></i>
                    <input
                      ref={fileInputVideoRef}
                      type="file"
                      multiple
                      style={{ display: "none" }}
                      accept="video/*"
                    />
                  </div>
                </div>
                <div className={cx("text-input")}>
                  <input
                    ref={textInputRef}
                    type="text"
                    placeholder="Aa"
                    spellCheck={false}
                    autoFocus
                    value={inputSend}
                    onChange={(e) => setInputSend(e.target.value)}
                    className={cx("input-chat")}
                    onKeyDown={(e) => {
                      if(e.keyCode === 13)
                      {
                        sendPrivateValue(e)
                      }
                    }}
                  />

                  <div className={cx("emoji")}>
                    <i
                      className={cx("fa-regular fa-face-smile", "icon-emoji")}
                      onClick={handleClickEmoji}
                    ></i>
                  </div>
                </div>
                <div className={cx("send-chat")} onClick={sendPrivateValue}>
                  <i
                    className={
                      inputSend
                        ? cx(
                            "fa-regular fa-paper-plane-top",
                            "icon-send-active"
                          )
                        : cx("fa-regular fa-paper-plane-top", "icon-send")
                    }
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
