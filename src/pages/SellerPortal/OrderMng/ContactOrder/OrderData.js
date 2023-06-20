import classNames from "classnames/bind";
import NoOrder from "../NoOrder";

import styles from "./ContactOrder.module.scss";

const cx = classNames.bind(styles);

function OrderData({ orders }) {
  if (!orders || orders.length === 0) {
    return <NoOrder />;
  }
  return (
    <div className={cx("order_list")}>
      <div className={cx("order-head")}>Order Information</div>
      {orders.map((order, index) => (
        <div className={cx("order-detail")} key={index}>
          <div className={cx("user-information")}>
            <div className={cx("user-detail")}>
              <img
                src={order.user.avatarUrl}
                alt="user-avatar"
                className={cx("user-avatar")}
              />
              <div className={cx("user-right")}>
                <div className={cx("name")}>{order.user.name}</div>
                <div className={cx("chat")}>
                  <button className={cx("chat-btn")}>
                    <i className={cx("fa-solid fa-messages", "icon-chat")}></i>
                    <span className={cx("chat-text")}>Chat</span>
                  </button>
                </div>
              </div>
            </div>
            <div className={cx("product-main")}>
              <div className={cx("orderID")}>#{order.order.id}</div>
              <div className={cx("orderDate")}>{order.order.orderDate}</div>
            </div>
          </div>
          <div className={cx("product-information")}>
            <div className={cx("product-detail")}>
              <img
                src={order.order.orderImageUrl}
                alt="product-img"
                className={cx("product-img")}
              />
              <div className={cx("product-content")}>
                <div className={cx("name")}>{order.order.orderName}</div>
                <div className={cx("price")}>${order.order.orderPrice}</div>
                <div className={cx("quantity")}>
                  x{order.order.orderQuantity}
                </div>
              </div>
            </div>
            <div className={cx("product-edit")}>
              <div className={cx("shipping-fee")}>
                <input
                  type="number"
                  className={cx("input-fee")}
                  placeholder="Shipping fee"
                />
              </div>
              <div className={cx("buttons")}>
                <div className={cx("approve")}>
                  <button className={cx("approve-btn")}>
                    <i className={cx("fa-solid fa-check")}></i>
                    <span className={cx("text")}>Approve</span>
                  </button>
                </div>
                <div className={cx("reject")}>
                  <button className={cx("reject-btn")}>
                    <i className={cx("fa-solid fa-xmark")}></i>
                    <span className={cx("text")}>Reject</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderData;
