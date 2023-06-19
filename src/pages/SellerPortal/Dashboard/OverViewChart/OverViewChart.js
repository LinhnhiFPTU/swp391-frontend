import classNames from "classnames/bind";

import RevenueChart from "./RevenueChart";
import OrderChart from "./OrderChart";
import FollowerChart from "./FollowerChart";
import FeedbackChart from "./FeedBackChart";
import styles from "./OverViewChart.module.scss";


const cx = classNames.bind(styles);

function OverViewChart({ type }) {
  return (
    <div className={cx("chart")}>
      {type === "Revenue" && <RevenueChart/>}
      {type === "Order" && <OrderChart/>}
      {type === "Follower" && <FollowerChart/>}
      {type === "Feedback" && <FeedbackChart/>}
    </div>
  );
}

export default OverViewChart;
