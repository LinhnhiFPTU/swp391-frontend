import classNames from "classnames/bind";

import styles from "./Shipper.module.scss";

const cx = classNames.bind(styles);

function HeaderShipper() {
  return (
    <div className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("header-link")}>
          <div className={cx("link")}>
            <p className={cx("text")}>
              <span className={cx("sub-text")}>B</span>ird
              <span className={cx("inner-subText")}>
                <span className={cx("sub-text")}>T</span>rading
              </span>
            </p>
            <div className={cx("otherText")}>Shipper</div>
          </div>
        </div>
        <div className={cx("header-info")}>
          <div className={cx("info-seller")}>
            <img className={cx("avatar")} src="https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg" alt="avatar"/>
            <div className={cx("seller-name")}>Shipper</div>
          </div>
          <div className={cx("logout")}>
            <i className={cx("icon-logout", "fa-regular fa-power-off")}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderShipper;
