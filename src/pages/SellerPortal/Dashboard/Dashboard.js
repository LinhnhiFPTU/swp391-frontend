import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import Widget from "./Widget";
import OverViewChart from "./OverViewChart";
import DoughnutChart from "./DoughnutChart";
import RecentOrder from "./RecentOrder";
import TopSale from "./TopSale";

import styles from "./Dashboard.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);

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
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      type: "Revenue",
      icon: "fa-solid fa-sack-dollar",
      isMoney: true,
      data: 12878,
      title: "Today profit",
      changeData: 21312,
      changePercent: 8.42,
    },
    {
      id: 2,
      type: "Order",
      icon: "fa-solid fa-cart-shopping",
      isMoney: false,
      data: 23987,
      title: "Today orders",
      changeData: -21312,
      changePercent: -8.42,
    },
    {
      id: 3,
      type: "Follower",
      icon: "fa-solid fa-user-plus",
      isMoney: false,
      data: 3987,
      title: "Today followers",
      changeData: 0,
      changePercent: 0,
    },
    {
      id: 4,
      type: "Feedback",
      icon: "fa-solid fa-messages-question",
      isMoney: false,
      data: 987,
      title: "Today feedbacks",
      changeData: 21312,
      changePercent: 8.42,
    },
  ])

  const [dataChart, setDataChart] = useState({
    type: "Revenue",
    icon: "fa-solid fa-sack-dollar",
    isMoney: true,
    data: 12878,
    title: "Today profit",
    changeData: 21312,
    changePercent: 8.42,
  });

  useEffect(() => {
    document.title = "Seller Centre";
  }, []);

  useEffect(() => {
    axios.get("/api/v1/shop/revenue/real-time")
    .then(res => {
      let revenues = res.data
      var revenue =  widgets.find(it => it.id === 1)
      revenue.data = revenues[0]
      revenue.changeData = revenues[0] - revenues[1]
      if (revenues[1] === 0)
      {
        revenue.changePercent = revenues[0] - revenues[1]
      }else revenue.changePercent = (revenues[0] / revenues[1]) * 100 - 100
      console.log(revenue)
      setWidgets(Array.from(widgets))
    })
    .catch(e => console.log(e))
  }, [])

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
