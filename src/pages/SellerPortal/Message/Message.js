import classNames from "classnames/bind";
import { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import HeaderSeller from "~/layouts/components/HeaderSeller";
import ContentMessage from "./ContentMessage";
import styles from "./Message.module.scss";

const cx = classNames.bind(styles);

function Message() {
  const [inputSend, setInputSend] = useState("");
  const [conversations, setConversations] = useState([
    {
      id: 0,
      name: "Nguyen Hong Thai",
      messages: [
        {
          from: "Nguyen Hong Thai",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Nguyen Hong Thai",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "RECEIVE",
          date: new Date(),
        },

        {
          from: "Nguyen Hong Thai",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Nguyen Hong Thai",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "RECEIVE",
          date: new Date(),
        },

        {
          from: "Nguyen Hong Thai",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "RECEIVE",
          date: new Date(),
        },
      ],
    },
    {
      id: 1,
      name: "Nguyen Thi Thai",
      messages: [
        {
          from: "Nguyen Hong Thai",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "RECEIVE",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "SELF",
          date: new Date(),
        },
        {
          from: "Le Vu Dinh Duy",
          content:
            "an x64 payload from an http server. Custom shellcode stage. Listen for an IPv6 connection with UUID Support (Windows x64)",
          type: "SELF",
          date: new Date(),
        },
      ],
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputImageRef = useRef();
  const fileInputVideoRef = useRef();
  const textInputRef = useRef();
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
                {conversations.map((con, index) => (
                  <div
                    key={index}
                    className={cx("user-chat", { active: index === activeTab })}
                    onClick={() => setActiveTab(index)}
                  >
                    <img
                      src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/214791551_2650224011947626_6942113418228182148_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lwxiuBuoCfYAX8gQidR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCtUXfzL3RhdVT3QZzXDZk5SikWUwnGsoVa1qz7YqJu0g&oe=64971610"
                      alt="avatar"
                      className={cx("user-avatar")}
                    />
                    <div className={cx("user-content")}>
                      <div className={cx("above")}>
                        <div className={cx("user-name")}>{con.name}</div>
                        <div className={cx("date")}>01/01/23</div>
                      </div>
                      <div className={cx("under")}>
                        <div className={cx("content-chat")}>
                          Troi hom nay deo cuc
                        </div>
                        <div className={cx("time")}>14:00</div>
                      </div>
                    </div>
                  </div>
                ))}
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
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/214791551_2650224011947626_6942113418228182148_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lwxiuBuoCfYAX8gQidR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCtUXfzL3RhdVT3QZzXDZk5SikWUwnGsoVa1qz7YqJu0g&oe=64971610"
                    alt="avatar"
                    className={cx("avatar")}
                  />
                  <span className={cx("name")}>{conversations[activeTab].name}</span>
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
                  messages={[...conversations[activeTab].messages].reverse()}
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
                  />

                  <div className={cx("emoji")}>
                    <i
                      className={cx("fa-regular fa-face-smile", "icon-emoji")}
                      onClick={handleClickEmoji}
                    ></i>
                  </div>
                </div>
                <div className={cx("send-chat")}>
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
