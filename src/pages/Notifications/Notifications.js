import classNames from "classnames/bind";
import styles from "./Notifications.module.scss";
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import ChatPopup from "~/layouts/components/ChatPopup";
const cx = classNames.bind(styles);
const notifications = [
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
    notifyDateTime: "20:46 25-06-2023",
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
    notifyDateTime: "20:46 25-06-2023",
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
    notifyDateTime: "20:46 25-06-2023",
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
    notifyDateTime: "20:46 25-06-2023",
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
    notifyDateTime: "20:46 25-06-2023",
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
    notifyDateTime: "20:46 25-06-2023",
  },
];

function Notifications() {
  return (
    <>
      <Header />
      <div className={cx("notification_wrapper")}>
        <div className={cx("notification_container")}>
          <ChatPopup />
          <div className={cx("notification-header")}>
            <div className={cx("title")}>Notifications</div>
            <div className={cx("read")}>
              <button className={cx("read-btn")}>Mark all as read</button>
            </div>
          </div>
          <div className={cx("notifications-content")}>
            {notifications.map((notification, index) => (
              <div className={cx("notification")}>
                <img
                  src="https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn"
                  alt="notify-img"
                  className={cx("notify-img")}
                />
                <div className={cx("notify-info")}>
                  <div className={cx("title-notify")}>
                    {notification.notifyTitle}
                  </div>
                  <div className={cx("notify-desc")}>
                    {notification.notifyDescription}
                  </div>
                  <div className={cx("notify-date-time")}>
                    {notification.notifyDateTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Notifications;
