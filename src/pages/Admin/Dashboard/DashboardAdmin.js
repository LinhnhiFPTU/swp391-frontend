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
    <>
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
                          stroke: "#00e396",
                        },
                        textStyle: {
                          fill: "#00e396",
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
                <div className={cx("text")}>Monthly Revenue</div>
                <div className={cx("data-chart")}>
                  <RevenueChart />
                </div>
              </div>
              <div className={cx("products-chart")}>
                <div className={cx("text")}>Total Products</div>
                <div className={cx("data-chart")}>
                  <ProductsChart />
                </div>
              </div>
            </div>
            <div className={cx("details-chart")}>
              <div className={cx("text")}>Categories Revenue</div>
              <div className={cx("data-chart")}>
                <CatRevenueChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
