import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";

import Report from "~/pages/Product/Report";
import Message from "./Message";
import avatar from "~/assets/images/user-avatar.png";
import styles from "./ChatWindow.module.scss";

const cx = classNames.bind(styles);

function ChatWindow({ closeChat, color }) {
  const [showOptions, setShowOptions] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [inputSend, setInputSend] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [conversations, setConversations] = useState([
    {
      id: 0,
      name: "Nguyen Hong Thai",
      messages: [
        {
          from: "Nguyen Hong Thai",
          content: "Anh iu oi toi nay anh ranh hong do",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content: "dep cai dau buoi",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content: "nung loz a",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Nguyen Hong Thai",
          content: "xao loz",
          type: "RECEIVE",
          date: new Date(),
        },

        {
          from: "Nguyen Hong Thai",
          content: "xao loz",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content: "cac",
          type: "SELF",
          date: new Date(),
        },
      ],
    },
    {
      id: 1,
      name: "Bray",
      messages: [
        {
          from: "Nguyen Hong Thai",
          content: "wtf",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content: "M nam thao",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content: "nhu lao",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Nguyen Hong Thai",
          content: "wtf",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content: "M nam thao",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Nguyen Hong Thai",
          content: "wtf",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content: "M nam thao",
          type: "SELF",
          date: new Date(),
        },
      ],
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);
  const fileInputImageRef = useRef();
  const fileInputVideoRef = useRef();
  const textInputRef = useRef();
  useEffect(() => {
    window.addEventListener("click", () => {
      setShowOptions(false);
    });
  }, []);
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
      {openReport && <Report closeReport={setOpenReport} type="shop" />}
      <div className={cx("chat_window")}>
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
        <div className={cx("chat_window-header")}>
          <div className={cx("text")}>Chat</div>
          <button className={cx("close-btn")} onClick={() => closeChat(false)}>
            <i className={cx("fa-light fa-chevron-down", "icon-close")}></i>
          </button>
        </div>
        <div className={cx("chat_window-container")}>
          <div className={cx("chat_side-bar")}>
            <div className={cx("search-bar")}>
              <input
                type="text"
                className={cx("search-input")}
                placeholder="Search..."
              />
            </div>
            <div className={cx("list-chat")}>
              {conversations.map((con, index) => (
                <div
                  key={index}
                  className={cx("shop_chat", { active: index === activeTab })}
                  onClick={() => setActiveTab(index)}
                >
                  <img
                    src={avatar}
                    alt="shop-img"
                    className={cx("shop-avatar")}
                  />
                  <div className={cx("shop-info")}>
                    <div className={cx("shop-name")}>{con.name}</div>
                    <div className={cx("message-date")}>09/06/23</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("chat_content")}>
            <div className={cx("chat-header")}>
              <div className={cx("shop-info")}>
              <img src={avatar} alt="avatar-shop" className={cx("shop-avatar")}/>
                <div className={cx("shop-name")}>
                  {conversations[activeTab].name}
                </div>
              </div>
              <div className={cx("options")}>
                <button
                  className={cx("dot-btn")}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOptions(true);
                  }}
                >
                  <i className={cx("fa-regular fa-ellipsis", "dot-icon")}></i>
                </button>
                {showOptions && (
                  <div className={cx("choices")}>
                    <div className={cx("view-shop")}>
                      <Link to="/shop">View Shop</Link>
                    </div>
                    <div className={cx("report")}>
                      <button onClick={() => setOpenReport(true)}>
                        Report
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={cx("chat-container")}>
              <Message
                messages={[...conversations[activeTab].messages].reverse()}
              />
            </div>

            <div className={cx("chat-footer")}>
              <div className={cx("input-text")}>
                <textarea
                  ref={textInputRef}
                  placeholder="Enter the text of the message"
                  spellCheck="false"
                  value={inputSend}
                  autoFocus
                  onChange={(e) => setInputSend(e.target.value)}
                ></textarea>
              </div>

              <div className={cx("send-options")}>
                <div className={cx("option-input")}>
                  <div className={cx("emoji")}>
                    <i
                      className={cx("fa-regular fa-face-smile", "icon-emoji")}
                      onClick={handleClickEmoji}
                    ></i>
                  </div>
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
                <div className={cx("option-send")}>
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

export default ChatWindow;
