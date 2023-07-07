import classNames from "classnames/bind";
import styles from "./Notify.module.scss";
import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const cx = classNames.bind(styles);

function Notify() {
  const { state } = useLocation();
  const [notifications, setNotifications] = useState(() => {
    if (state) return state;
    axios
        .get("/api/v1/shop/notifications")
        .then((res) => setNotifications(res.data))
        .catch((e) => console.log(e));
      return []
  });
  const navigate = useNavigate();

  const handleMarkAllRead = (e) => {
    e.preventDefault();
    let condition = notifications.filter((n) => !n.read).length > 0;
    condition &&
      axios
        .post("/api/v1/shop/notification/read")
        .then((res) => window.location.reload())
        .catch((e) => console.log(e));
  };

  const handleClickNotification = (e, notification) => {
    e.preventDefault();
    if (notification.read) {
      notification.redirectUrl && navigate(notification.redirectUrl);
    } else {
      axios
        .post("/api/v1/shop/notification/read/" + notification.id)
        .then((res) => {
          let index = notifications.indexOf(notification)
          notifications[index].read = true;
          setNotifications(Array.from(notifications))
          notification.redirectUrl && navigate(notification.redirectUrl);
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    document.title = "Seller Centre";
  }, []);
  return (
    <>
      <HeaderSeller title="Notifications" />
      <div className={cx("notify_wrapper")}>
        <div className={cx("notify_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("notify_container")}>
          <div className={cx("notify_content")}>
            <div className={cx("notify-header")}>
              <div className={cx("title")}>Notifications</div>
              <div className={cx("read")}>
                <button className={cx("read-btn")} onClick={handleMarkAllRead}>
                  Mark all as read
                </button>
              </div>
            </div>
            <div className={cx("notify-list")}>
              {notifications.map((notification, index) => (
                <div
                  className={cx("notify")}
                  onClick={(e) => handleClickNotification(e, notification)}
                >
                  <img
                    src={notification.imageUrl}
                    alt="notify-img"
                    className={cx("notify-img")}
                  />
                  <div className={cx("notify-info")}>
                    <div className={cx("title-notify")}>
                      {notification.title}
                    </div>
                    <div className={cx("notify-desc")}>
                      {notification.content}
                    </div>
                    <div className={cx("notify-date-time")}>
                      {new Date(notification.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={cx("prev-next")}>
              <button className={cx("icon-left")}>
                <i className={cx("fa-light fa-angle-left")}></i>
              </button>
              <button className={cx("icon-right")}>
                <i className={cx("fa-light fa-angle-right")}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notify;
