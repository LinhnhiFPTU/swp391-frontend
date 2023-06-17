import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import Widget from "./Widget";

import styles from "./Dashboard.module.scss";

const cx = classNames.bind(styles);

const widgets = [
  {
    type: "Revenue",
    icon: "fa-solid fa-sack-dollar",
    isMoney: true,
    data: 1239878,
    title: "Today profit",
    changeData: 21312,
    changePercent: 8.42,
  },
  {
    type: "Order",
    icon: "fa-solid fa-cart-shopping",
    isMoney: false,
    data: 23987,
    title: "Today orders",
    changeData: -21312,
    changePercent: -8.42,
  },
  {
    type: "Follower",
    icon: "fa-solid fa-user-plus",
    isMoney: false,
    data: 3987,
    title: "Today followers",
    changeData: 0,
    changePercent: 0,
  },
  {
    type: "Feedback",
    icon: "fa-solid fa-messages-question",
    isMoney: false,
    data: 987,
    title: "Today feedbacks",
    changeData: 21312,
    changePercent: 8.42,
  },
];

function Dashboard() {
  return (
    <>
      <HeaderSeller title="Dashboard" />
      <div className={cx("dashboard_wrapper")}>
        <div className={cx("dashboard_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("dashboard_container")}>
          <div className={cx("dashboard_content")}>
            <div className={cx("daily-information")}>
              {widgets.map((widget, index) => (
                <Widget key={index} widget={widget} />
              ))}
            </div>
            <div className={cx("chart_overview")}>
              <div className={cx("chart-total-revenue")}></div>
              <div className={cx("chart-revenue-by-category")}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
