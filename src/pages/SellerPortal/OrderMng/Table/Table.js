import classNames from "classnames/bind";

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
function Table({ orders}) {
  return (
    <div className={cx("table_data")}>
      <div className={cx("table-head")}>
        <div className={cx("head-text")}>Order ID</div>
        <div className={cx("head-text")}>Order</div>
        <div className={cx("head-text")}>Price</div>
        <div className={cx("head-text")}>Delivery Status</div>
        <div className={cx("head-text")}>Payment</div>
      </div>
      {orders.map((item, index) => (
        <div className={cx("table-body")} key={index}>
          <div className={cx("body-text", "orderId")}>{item.orderId}</div>
          <div className={cx("body-text", "order")}>{item.order}</div>
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
  );
}

export default Table;
