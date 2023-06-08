import classNames from "classnames/bind";

import styles from "./ChatWindow.module.scss";

const cx = classNames.bind(styles);

function ChatWindow({ closeChat, color }) {
  return (
    <div className={cx("chat_window")}>
      <div className={cx("chat_window-header")}>
        <div className={cx("text")} style={{color: color}}>Chat</div>
        <button className={cx("close-btn")} onClick={() => closeChat(false)}>
          <i className={cx("fa-light fa-chevron-down", "icon-close")} style={{color: color}}></i>
        </button>
      </div>
      <div className={cx("chat_window-container")}>
        <div className={cx("chat_side-bar")}></div>
        <div className={cx("chat_content")}></div>
      </div>
    </div>
  );
}

export default ChatWindow;
