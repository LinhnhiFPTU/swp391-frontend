import classNames from "classnames/bind";
import styles from "./RecentOrder.module.scss";

const cx = classNames.bind(styles);
const orders = [
  {
    orderId: 123456,
    name:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Completed",
    payment: "Cart",
    date: "01-01-2023",
  },
  {
    orderId: 123456,
    name:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Completed",
    date: "01-01-2023",
  },
  {
    orderId: 123456,
    name:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Pending",
    date: "01-01-2023",
  },
  {
    orderId: 123456,
    name:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Shipping",
    date: "01-01-2023",
  },
  {
    orderId: 123456,
    name:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Canceled",
    date: "01-01-2023",
  },
  {
    orderId: 123456,
    name:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Pending",
    date: "01-01-2023",
  },
];
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
function RecentOrder() {
  return (
    <div className={cx("recent-orders")}>
      <div className={cx("order-header")}>
        <div className={cx("head", "orderId")}>ID</div>
        <div className={cx("head", "product")}>Product</div>
        <div className={cx("head", "date")}>Date</div>
        <div className={cx("head", "status")}>Status</div>
        <div className={cx("head", "amount")}>Amount</div>
      </div>
      {orders.map((order, index) => (
        <div className={cx("order-content")} key={index}>
          <div className={cx("orderId")}>#{order.orderId}</div>
          <div className={cx("product")}>
            <div className={cx("name")}>
              {order.name}
            </div>
          </div>
          <div className={cx("date")}>{order.date}</div>
          <div className={cx("status")}>
            <div className={cx("inside-status")} style={statusStyle(order.status)}>
              {order.status}
            </div>
          </div>
          <div className={cx("amount")}>${order.price}</div>
        </div>
      ))}
    </div>
  );
}

export default RecentOrder;
