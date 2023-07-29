import classNames from "classnames/bind";
import OrderDetail from "./OrderDetail";
import styles from "./ReportOrder.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function ReportOrder() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <OrderDetail closePopup={setOpen} />}
      <div className={cx("report-product")}>
        <div className={cx("report-header")}>
          <div className={cx("order")}>Order</div>
          <div className={cx("user")}>User</div>
          <div className={cx("desc")}>Description</div>
          <div className={cx("shipping")}>Shipping Unit</div>
          <div className={cx("actions")}>Actions</div>
        </div>
        <div className={cx("report-list")}>
          {/* {productReports.map((pr, prId) => ( */}
          <div className={cx("report-item")}>
            <div className={cx("rp-order")}>
              <div className={cx("text")}>#12345678</div>
            </div>
            <div className={cx("rp-user")}>
              <img
                src="https://cdnimg.vietnamplus.vn/uploaded/mzdic/2023_03_24/cristiano_ronaldo_portugal_2403.jpg"
                alt="avatar-user"
                className={cx("avatar-user")}
              />
              <div className={cx("user-name")}>Ronaldo</div>
            </div>
            <div className={cx("rp-desc")} onClick={() => setOpen(true)}>
              <img
                src="https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg"
                alt="product-img"
                className={cx("product-img")}
              />
              <div className={cx("product-name")}>
                Prevue Pet Products Travel Carrier for Birds, Black
              </div>
            </div>
            <div className={cx("ship-unit")}>GHN</div>
            <div className={cx("rp-actions")}>
              <button
                className={cx("ban-btn")}
                // onClick={(e) => handleBanProduct(e, pr)}
              >
                <i className={cx("fa-regular fa-ban", "ban-icon")}></i>
              </button>
              <button
                className={cx("notify-btn")}
                // onClick={(e) => handleWarningProduct(e, pr)}
              >
                <i
                  className={cx(
                    "fa-regular fa-triangle-exclamation",
                    "notify-icon"
                  )}
                ></i>
              </button>
            </div>
          </div>
          {/* ))} */}
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
    </>
  );
}

export default ReportOrder;
