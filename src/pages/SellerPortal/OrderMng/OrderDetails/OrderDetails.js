import classNames from "classnames/bind";

import styles from "./OrderDetails.module.scss";

const cx = classNames.bind(styles);

function OrderDetails({ setOpenListDetail }) {
  return (
    <div className={cx("overlay")}>
      <div className={cx("order-details-popup")}>
        <div className={cx("order-detail-header")}>
          <div className={cx("header")}>
            <div className={cx("title")}>Order Detail</div>
            <div className={cx("orderId")}>#1234567</div>
          </div>
          <div className={cx("close")}>
            <button className={cx("close-btn")} onClick={() => setOpenListDetail(false)}>
              <i className={cx("fa-regular fa-xmark")}></i>
            </button>
          </div>
        </div>
        <div className={cx("order-detail-container")}>
          <div className={cx("order-detail")}>
            <img
              src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
              alt="img-detail"
              className={cx("img-detail")}
            />
            <div className={cx("product-info")}>
              <div className={cx("left")}>
                <div className={cx("product-name")}>
                  Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                  Birds Parrots
                </div>
                <div className={cx("product-quantity")}>x2</div>
              </div>
              <div className={cx("right")}>
                <div className={cx("price")}>$1000</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("order-detail-footer")}>
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
  );
}

export default OrderDetails;
