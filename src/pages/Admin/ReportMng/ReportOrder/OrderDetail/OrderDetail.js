import classNames from "classnames/bind";

import styles from "./OrderDetail.module.scss";

const cx = classNames.bind(styles);

function OrderDetail({ closePopup }) {
  return (
    <>
      <div className={cx("overlay")}>
        <div className={cx("order_popup")}>
          <div className={cx("order_container")}>
            <div className={cx("order_header")}>
              <div className={cx("order-id")}>#12345678</div>
              <div className={cx("close")}>
                <i
                  className={cx("fa-solid fa-xmark")}
                  onClick={() => closePopup(false)}
                ></i>
              </div>
            </div>
            <div className={cx("order_content")}>
              {/* {order.orderDetails.map((OD, index) => ( */}
              <div className={cx("item")}>
                <img
                  src="https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg"
                  alt="product-img"
                  className={cx("product-img")}
                />
                <div className={cx("info")}>
                  <div className={cx("left")}>
                    <div className={cx("name")}>
                      Prevue Pet Products Travel Carrier for Birds, Black
                    </div>
                    <div className={cx("quantity")}>x23</div>
                  </div>
                  <div className={cx("price")}>$1200</div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
