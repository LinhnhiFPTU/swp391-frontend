import classNames from "classnames/bind";
import styles from "./Message.module.scss";

const cx = classNames.bind(styles);

function Message({ messages }) {
  return (
    <>
      {messages.map((msg, index) => {
        if (msg.type === "RECEIVE") {
          return (
            <div className={cx("message-container-receive")} key={index}>
              <div className={cx("message-date-time-receive")}>
                14:00, 22/03/23
              </div>
              <div className={cx("message-info-receive")}>
                <div className={cx("message-content-receive")}>
                  {msg.content}
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className={cx("message-container-self")} key={index}>
            <div className={cx("message-date-time-self")}>14:00, 22/03/23</div>
            <div className={cx("message-info-self")}>
              <div className={cx("message-content-self")}>{msg.content}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Message;
