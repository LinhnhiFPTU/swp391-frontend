import classNames from "classnames/bind";
import styles from "./ReportShop.module.scss";
const cx = classNames.bind(styles);

function ReportShop() {
  return (
    <div className={cx("report-product")}>
      <div className={cx("report-header")}>
        <div className={cx("user")}>User</div>
        <div className={cx("shop")}>Shop</div>
        <div className={cx("type-reason")}>Type of Reason</div>
        <div className={cx("reason")}>Reason</div>
        <div className={cx("actions")}>Actions</div>
      </div>
      <div className={cx("report-list")}>
        <div className={cx("report-item")}>
          <div className={cx("rp-user")}>
            <img
              src="https://vnn-imgs-f.vgcloud.vn/2021/08/28/13/ronaldo-mu.jpg"
              alt="avatar-user"
              className={cx("avatar-user")}
            />
            <div className={cx("user-name")}>Ronaldo</div>
          </div>
          <div className={cx("rp-shop")}>
            <img
              src="https://yt3.googleusercontent.com/k6PuePE0iigmugaaWu3dO89BsWvATAQv3rD3nEY5lu78bgzupAPS0zFaF1K5nuGgXQl_ukmXVA=s900-c-k-c0x00ffffff-no-rj"
              alt="shop-avatar"
              className={cx("shop-avatar")}
            />
            <div className={cx("shop-name")}>Louis Vuitton</div>
          </div>
          <div className={cx("rp-type-reason")}>
            <div className={cx("text")}>
              Posting pornographic, obscene and vulgar content
            </div>
          </div>
          <div className={cx("rp-reason")}>
            <div className={cx("text")}>
              Exploring the serene beach, I felt a sense of tranquility wash
              over me.
            </div>
          </div>
          <div className={cx("rp-actions")}>
            <button className={cx("ban-btn")}>
              <i className={cx("fa-regular fa-ban", "ban-icon")}></i>
            </button>
            <button className={cx("notify-btn")}>
              <i
                className={cx(
                  "fa-regular fa-triangle-exclamation",
                  "notify-icon"
                )}
              ></i>
            </button>
          </div>
        </div>
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
  );
}

export default ReportShop;
