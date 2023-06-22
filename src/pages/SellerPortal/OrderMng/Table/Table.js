import classNames from "classnames/bind";
import NoOrder from "../NoOrder";

import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

const statusStyle = (status) => {
  if (status === "Completed") {
    return {
      backgroundColor: "#EBF9F4",
      color: "#39B588",
    };
  } else if (status === "Canceled") {
    return {
      backgroundColor: "#FDF4F6",
      color: "#E36482",
    };
  } else if (status === "Pending") {
    return {
      backgroundColor: "#FFF7E6",
      color: "#FFB619",
    };
  } else if (status === "Shipping") {
    return {
      backgroundColor: "#F2F4F8",
      color: "#1B4780",
    };
  }
};
function Table({ orders }) {
  if (!orders || orders.length === 0) {
    return <NoOrder />;
  }
  return (
    <div className={cx("table_data")}>
      <div className={cx("table-head")}>
        <div className={cx("head-text", "orderId")}>Order ID</div>
        <div className={cx("head-text", "order")}>Order</div>
        <div className={cx("head-text", "date")}>Date</div>
        <div className={cx("head-text", "price")}>Price</div>
        <div className={cx("head-text", "status")}>Status</div>
        <div className={cx("head-text", "payment")}>Payment</div>
      </div>
      <div className={cx("table-content")}>
        {orders.map((item, index) => (
          <div className={cx("table-body")} key={index}>
            <div className={cx("body-text", "orderId")}>#{item.orderId}</div>
            <div className={cx("body-text", "order")}>{item.order}</div>
            <div className={cx("body-text", "date")}>{item.date}</div>
            <div className={cx("body-text", "price")}>${item.price}</div>
            <div className={cx("body-text", "status")}>
              <div
                className={cx("inside-status")}
                style={statusStyle(item.status)}
              >
                {item.status}
              </div>
            </div>
            <div className={cx("body-text", "payment")}>{item.payment}</div>
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
  );
}

export default Table;
