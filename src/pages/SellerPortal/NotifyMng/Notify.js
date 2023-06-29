import classNames from "classnames/bind";
import styles from "./Notify.module.scss";
import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
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

function Notify() {
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
                <button className={cx("read-btn")}>Mark all as read</button>
              </div>
            </div>
            <div className={cx("notify-list")}>
              {notifications.map((notification, index) => (
                <div className={cx("notify")}>
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
