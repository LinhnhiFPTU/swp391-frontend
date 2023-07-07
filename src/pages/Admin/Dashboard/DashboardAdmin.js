import React, { useState } from "react";
import classNames from "classnames/bind";
import "react-circular-progressbar/dist/styles.css";

import styles from "./DashboardAdmin.module.scss";
import Sidebar from "../global/Sidebar";
import RevenueChart from "./Chart/RevenueChart";
import ProductsChart from "./Chart/ProductsChart";
import CatRevenueChart from "./Chart/CatRevenueChart";
import Topbar from "../global/Topbar";
import VisitChart from "./PopupChart/VisitChart";
import NewMemChart from "./PopupChart/NewMemChart";
import OrdersChart from "./PopupChart/OrdersChart";
import SalesChart from "./PopupChart/SalesChart";

const cx = classNames.bind(styles);

function DashboardAdmin() {
  const [ordersChart, setOrdersChart] = useState(false);
  const [salesChart, setSalesChart] = useState(false);
  const [visitsChart, setVisitsChart] = useState(false);
  const [membersChart, setMembersChart] = useState(false);
  const toggleOrdersChart = () => {
    setOrdersChart(!ordersChart);
  };
  const toggleSalesChart = () => {
    setSalesChart(!salesChart);
  };
  const toggleVisitsChart = () => {
    setVisitsChart(!visitsChart);
  };
  const toggleMembersChart = () => {
    setMembersChart(!membersChart);
  };
  return (
    <>
      <Topbar />
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("dashboard-container")}>
          <div className={cx("dashboard-items")}>
            <div className={cx("card-container")}>
              <div className={cx("card-items")}>
                <div
                  className={cx("card-item", "item1")}
                  onClick={toggleOrdersChart}
                >
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>TOTAL ORDERS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {ordersChart && (
                    <div className={cx("overlay")}>
                      <div className={cx("details-chart")}>
                        <div className={cx("details-content")}>
                          <div className={cx("header-content")}>
                            <div className={cx("text")}>TOTAL ORDERS</div>
                            <i
                              className={cx("fa-regular fa-xmark", "close-btn")}
                              onClick={toggleOrdersChart}
                            ></i>
                          </div>
                          <div className={cx("data-chart")}>
                            <OrdersChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={cx("card-item", "item2")}
                  onClick={toggleSalesChart}
                >
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>TOTAL SALES</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {salesChart && (
                    <div className={cx("overlay")}>
                      <div className={cx("details-chart")}>
                        <div className={cx("details-content")}>
                          <div className={cx("header-content")}>
                            <div className={cx("text")}>TOTAL SALES</div>
                            <i
                              className={cx("fa-regular fa-xmark", "close-btn")}
                              onClick={toggleSalesChart}
                            ></i>
                          </div>
                          <div className={cx("data-chart")}>
                            <SalesChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={cx("card-item", "item3")}
                  onClick={toggleVisitsChart}
                >
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>TOTAL VISITS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {visitsChart && (
                    <div className={cx("overlay")}>
                      <div className={cx("details-chart")}>
                        <div className={cx("details-content")}>
                          <div className={cx("header-content")}>
                            <div className={cx("text")}>VISITS</div>
                            <i
                              className={cx("fa-regular fa-xmark", "close-btn")}
                              onClick={toggleVisitsChart}
                            ></i>
                          </div>
                          <div className={cx("data-chart")}>
                            <VisitChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={cx("card-item", "item4")}
                  onClick={toggleMembersChart}
                >
                  <div className={cx("card-text")}>
                    <p className={cx("card-title")}>NEWLY MEMBERS</p>
                    <p className={cx("card-number")}>323</p>
                  </div>
                  {membersChart && (
                    <div className={cx("overlay")}>
                      <div className={cx("details-chart")}>
                        <div className={cx("details-content")}>
                          <div className={cx("header-content")}>
                            <div className={cx("text")}>NEWLY MEMBERS</div>
                            <i
                              className={cx("fa-regular fa-xmark", "close-btn")}
                              onClick={toggleMembersChart}
                            ></i>
                          </div>
                          <div className={cx("data-chart")}>
                            <NewMemChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={cx("overview-chart")}>
              <div className={cx("revenue-chart")}>
                <div className={cx("text")}>Weekly Revenue</div>
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
