import classNames from "classnames/bind";
import styles from "./ReportProduct.module.scss";
const cx = classNames.bind(styles);

function ReportProduct() {
  return (
    <div className={cx("report-product")}>
      <div className={cx("report-header")}>
        <div className={cx("user")}>User</div>
        <div className={cx("shop")}>Shop</div>
        <div className={cx("product")}>Product</div>
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
            <div className={cx("text")}>Louis Vuitton</div>
          </div>
          <div className={cx("rp-product")}>
            <img
              src="https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg"
              alt="product-img"
              className={cx("product-img")}
            />
            <div className={cx("product-name")}>
              Prevue Pet Products Travel Carrier for Birds, Black
            </div>
          </div>
          <div className={cx("rp-type-reason")}>
            <div className={cx("text")}>
              Prohibited products (wild animals, 18+, ...)
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

export default ReportProduct;
