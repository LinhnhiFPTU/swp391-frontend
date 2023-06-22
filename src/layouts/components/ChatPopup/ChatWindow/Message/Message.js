import classNames from "classnames/bind";
import styles from "./Message.module.scss";

const cx = classNames.bind(styles);

function Message({ messages, user }) {
  return (
    <>
      {messages &&
        messages.map((msg, index) => {
          let isShow = false;
          if (messages[index - 1]) {
            let sendTime = new Date(messages[index - 1].sendTime);
            sendTime.setMinutes(sendTime.getMinutes() + 10);
            let curSendTime = new Date(msg.sendTime);
            if (curSendTime > sendTime) {
              isShow = true;
            }
          }

          if (msg.senderId != user.id || msg.senderType != "USER") {
            return (
              <div className={cx("message-container-receive")} key={index}>
                {isShow && (
                  <div className={cx("message-date-time-receive")}>
                    {new Date(msg.sendTime).toLocaleString()}
                  </div>
                )}
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
              {isShow && (
                <div className={cx("message-date-time-self")}>
                  {new Date(msg.sendTime).toLocaleString()}
                </div>
              )}
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
