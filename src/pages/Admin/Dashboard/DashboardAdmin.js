import React from "react";
import classNames from "classnames/bind";
import "react-circular-progressbar/dist/styles.css";

import styles from "./DashboardAdmin.module.scss";
import Sidebar from "../global/Sidebar";
import HeaderSeller from "~/layouts/components/HeaderSeller/HeaderSeller";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import RevenueChart from "./Chart/RevenueChart";
import ProductsChart from "./Chart/ProductsChart";
import CatRevenueChart from "./Chart/CatRevenueChart";

const cx = classNames.bind(styles);

function DashboardAdmin() {
  return (
    <div className={cx("dashboard-wrapper")}>
      <HeaderSeller title="Dashboard" />
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("dashboard-container")}>
          <div className={cx("dashboard-items")}>
            <div className={cx("card-container")}>
              <div className={cx("card-items")}>
                <div className={cx("card-item", "item1")}>
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>TOTAL ORDERS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  <div className={cx("card-statistics")}>
                    <CircularProgressbar
                      value={90}
                      text="87%"
                      strokeWidth={7}
                      styles={{
                        path: {
                          stroke: "#1f8a70",
                        },
                        textStyle: {
                          fill: "#1f8a70",
                        },
                        
                      }}
                    />
                  </div>
                </div>
                <div className={cx("card-item", "item2")}>
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>TOTAL PRODUCTS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  <div className={cx("card-statistics")}>
                    <CircularProgressbar
                      value={90}
                      text="90%"
                      className={cx("total-chart")}
                      strokeWidth={7}
                      styles={{
                        path: {
                          stroke: "#3aa3c9",
                        },
                        textStyle: {
                          fill: "#3aa3c9",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className={cx("card-item", "item3")}>
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>TOTAL VISITS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  <div className={cx("card-statistics")}>
                    <CircularProgressbar
                      value={90}
                      text="70%"
                      className={cx("total-chart")}
                      strokeWidth={7}
                      styles={{
                        path: {
                          stroke: "#fc7300",
                        },
                        textStyle: {
                          fill: "#fc7300",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className={cx("card-item", "item4")}>
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>NEWLY MEMBERS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  <div className={cx("card-statistics")}>
                    <CircularProgressbar
                      value={90}
                      text="90%"
                      strokeWidth={7}
                      styles={{
                        path: {
                          stroke: "#fa7070",
                        },
                        textStyle: {
                          fill: "#fa7070",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("overview-chart")}>
              <div className={cx("revenue-chart")}>
                <p>Monthly Revenue</p>
                <RevenueChart />
              </div>
              <div className={cx("products-chart")}>
                <p>Total Products</p>
                <div className={cx("prod-chart")}>
                  <ProductsChart />
                </div>
              </div>
            </div>
            <div className={cx("details-chart")}>
              <p>Categories Revenue</p>
              <CatRevenueChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
