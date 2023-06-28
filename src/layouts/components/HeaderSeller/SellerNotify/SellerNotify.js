import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { Link } from "react-router-dom";
import styles from "./SellerNotify.module.scss";
const cx = classNames.bind(styles);
const notifications = [
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
  },
  {
    notifyImage:
      "https://down-vn.img.susercontent.com/file/sg-11134004-7qveg-licuiojn0ikme0_tn",
    notifyTitle: "25.6 CHECK VÍ CÓ MÃ 100.000Đ",
    notifyDescription: `💰 Mã 100.000Đ, 50.000Đ, 20.000Đ 💥 Săn sale dùng mã,
    voucher cực đã`,
  },
];

function SellerNotify() {
  return (
    <div className={cx("seller_notify")}>
      {notifications.length > 0 && (
        <div className={cx("count-notify")}>{notifications.length}</div>
      )}

      <Link to="/seller/portal/notifications">
        <div className={cx("dropdown-notify")}>
          <Tippy
            interactive
            delay={[0, 200]}
            placement="bottom"
            render={(attrs) => (
              <div className={cx("notify-items")} tabIndex="-1" {...attrs}>
                {notifications.length < 1 ? (
                  <div className={cx("no-notify")}>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fa4e2b534c2928596a6deded9c730a21.png"
                      alt="No item"
                    ></img>
                    <p>No notify yet!</p>
                  </div>
                ) : (
                  <PopperWrapper className={cx("dropdown_container")}>
                    <div className={cx("notify-head")}>
                      Recently Received Notifications
                    </div>
                    <div className={cx("notify-container")}>
                      {notifications.map((notification, index) => (
                        <div className={cx("notify-content")} key={index}>
                          <img
                            src={notification.notifyImage}
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
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={cx("notify-footer")}>
                      <Link
                        to="/seller/portal/notifications"
                        className={cx("view-all")}
                      >
                        View All
                      </Link>
                    </div>
                  </PopperWrapper>
                )}
              </div>
            )}
          >
            <i className={cx("fa-light fa-bell", "bell-icon")}></i>
          </Tippy>
        </div>
      </Link>
    </div>
  );
}

export default SellerNotify;
