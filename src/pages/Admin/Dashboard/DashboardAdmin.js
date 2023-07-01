import React, { useState } from "react";
import classNames from "classnames/bind";
import "react-circular-progressbar/dist/styles.css";

import styles from "./DashboardAdmin.module.scss";
import Sidebar from "../global/Sidebar";
import HeaderSeller from "~/layouts/components/HeaderSeller/HeaderSeller";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import RevenueChart from "./Chart/RevenueChart";
import ProductsChart from "./Chart/ProductsChart";
import CatRevenueChart from "./Chart/CatRevenueChart";

const cx = classNames.bind(styles);

function DashboardAdmin() {
  const [ordersChart, setOrdersChart] = useState(false);
  const toggleOrdersChart = () => {
    setOrdersChart(!ordersChart);
  };
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
                  <div className={cx("card-text")} onClick={toggleOrdersChart}>
                    <p className={cx("card-title")}>TOTAL ORDERS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {ordersChart && (
                    <div className={cx("details-chart")}>
                      <div className={cx("details-content")}>
                        <i
                          className={cx("fa-regular fa-xmark", "close-btn")}
                          onClick={toggleOrdersChart}
                        ></i>
                        <div className={cx("text")}>TOTAL ORDERS</div>
                        <div className={cx("data-chart")}>
                          <ProductsChart />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={cx("card-item", "item2")}>
                  <div className={cx("card-text")} onClick={toggleOrdersChart}>
                    <p className={cx("card-title")}>TOTAL PRODUCTS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {/* {ordersChart && (
                    <div className={cx("details-chart")}>
                      <div className={cx("details-content")}>
                        <i
                          className={cx("fa-regular fa-xmark", "close-btn")}
                          onClick={toggleOrdersChart}
                        ></i>
                        <div className={cx("text")}>TOTAL ORDERS</div>
                        <div className={cx("data-chart")}>
                          <ProductsChart />
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>
                <div className={cx("card-item", "item3")}>
                  <div className={cx("card-text")} onClick={toggleOrdersChart}>
                    <p className={cx("card-title")}>TOTAL VISITS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {/* {ordersChart && (
                    <div className={cx("details-chart")}>
                      <div className={cx("details-content")}>
                        <i
                          className={cx("fa-regular fa-xmark", "close-btn")}
                          onClick={toggleOrdersChart}
                        ></i>
                        <div className={cx("text")}>TOTAL ORDERS</div>
                        <div className={cx("data-chart")}>
                          <ProductsChart />
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>
                <div className={cx("card-item", "item4")}>
                  <div className={cx("card-text")} onClick={toggleOrdersChart}>
                    <p className={cx("card-title")}>NEWLY MEMBERS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {/* {ordersChart && (
                    <div className={cx("details-chart")}>
                      <div className={cx("details-content")}>
                        <i
                          className={cx("fa-regular fa-xmark", "close-btn")}
                          onClick={toggleOrdersChart}
                        ></i>
                        <div className={cx("text")}>TOTAL ORDERS</div>
                        <div className={cx("data-chart")}>
                          <ProductsChart />
                        </div>
                      </div>
                    </div>
                  )} */}
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
              <div className={cx("totalCat-chart")}>
                <div className={cx("text")}>Total Products</div>
                <div className={cx("data-chart")}>
                  <ProductsChart />
                </div>
              </div>
            </div>
            <div className={cx("detailCat-chart")}>
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
