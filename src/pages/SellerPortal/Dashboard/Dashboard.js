import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import Widget from "./Widget";
import OverViewChart from "./OverViewChart";
import DoughnutChart from "./DoughnutChart";
import RecentOrder from "./RecentOrder";
import TopSale from "./TopSale";

import styles from "./Dashboard.module.scss";

const cx = classNames.bind(styles);

const widgets = [
  {
    type: "Revenue",
    icon: "fa-solid fa-sack-dollar",
    isMoney: true,
    data: 12878,
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

const colorData = (type) => {
  if (type === "Revenue") {
    return {
      color: "#30D003",
    };
  } else if (type === "Order") {
    return {
      color: "#EC4A68",
    };
  } else if (type === "Follower") {
    return {
      color: "#448DFB",
    };
  } else {
    return {
      color: "#30E3CD",
    };
  }
};

function Dashboard() {
  const [dataChart, setDataChart] = useState({
    type: "Revenue",
    icon: "fa-solid fa-sack-dollar",
    isMoney: true,
    data: 12878,
    title: "Today profit",
    changeData: 21312,
    changePercent: 8.42,
  });
  console.log(dataChart);

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
                <Widget
                  key={index}
                  widget={widget}
                  setDataChart={setDataChart}
                />
              ))}
            </div>

            <div className={cx("chart_overview")}>
              <div className={cx("chart-total")}>
                <div className={cx("chart-title")}>Total {dataChart.type}</div>
                <div
                  className={cx("chart-data")}
                  style={colorData(dataChart.type)}
                >
                  {dataChart.isMoney ? "$" : ""}
                  {(() => {
                    let formattedNumber = dataChart.data.toLocaleString();
                    return formattedNumber;
                  })()}
                </div>
                <OverViewChart type={dataChart.type} />
              </div>
              <div className={cx("chart-revenue-by-category")}>
                <div className={cx("title")}>Total Sale</div>
                <DoughnutChart />
              </div>
            </div>

            <div className={cx("product_list")}>
              <div className={cx("list_recent-orders")}>
                <div className={cx("header")}>
                  <div className={cx("title")}>Recent Orders</div>
                  <Link
                    to="/seller/portal/order/all"
                    className={cx("see-more")}
                  >
                    See more
                  </Link>
                </div>
                <RecentOrder />
              </div>

              <div className={cx("list_top-sales")}>
                <div className={cx("header")}>
                  <div className={cx("title")}>Top Sales</div>
                  <Link
                    to="/seller/portal/product/all"
                    className={cx("see-more")}
                  >
                    See more
                  </Link>
                </div>
                <div className={cx("list-product")}>
                  <TopSale />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
