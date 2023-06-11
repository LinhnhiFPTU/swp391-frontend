import classNames from "classnames/bind";

import ChatWindow from "./ChatWindow";

import styles from "./ChatPopup.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function ChatPupup() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      {openChat && <ChatWindow closeChat={setOpenChat}/>}
      <div className={cx("chat_popup")}>
        <button
          className={cx("chat-btn")}
          onClick={() => setOpenChat(true)}
        >
          <i className={cx("fa-solid fa-messages", "chat-icon")}></i>
          Chat
        </button>
      </div>
    </>
  );
}

export default ChatPupup;
