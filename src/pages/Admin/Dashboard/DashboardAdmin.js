import React from "react";
import classNames from "classnames/bind";
import styles from "./DashboardAdmin.module.scss";
import Sidebar from "../global/Sidebar";
import Header from "~/layouts/components/Header/Header";
import HeaderSeller from "~/layouts/components/HeaderSeller/HeaderSeller";

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
          <p className={cx("page-heading")}>Dashboard</p>
          <div className={cx("card-container")}>
            <div className={cx("card-items")}>
              <div className={cx("card-item", "item1")}>
                <div className={cx("card-text")}>
                  <p className={cx("card-title")}>TOTAL ORDERS</p>
                  <p className={cx("card-number")}>323</p>
                </div>
                <div className={cx("card-statistics")}>
                  <svg>
                    <circle cx="38" cy="38" r="35"></circle>
                  </svg>
                  <p>70%</p>
                </div>
              </div>
              <div className={cx("card-item", "item2")}>
                <div className={cx("card-text")}>
                  <p className={cx("card-title")}>TOTAL PRODUCTS</p>
                  <p className={cx("card-number")}>323</p>
                </div>
                <div className={cx("card-statistics")}>
                  <svg>
                    <circle cx="38" cy="38" r="35"></circle>
                  </svg>
                  <p>70%</p>
                </div>
              </div>
              <div className={cx("card-item", "item3")}>
                <div className={cx("card-text")}>
                  <p className={cx("card-title")}>TOTAL VISITS</p>
                  <p className={cx("card-number")}>323</p>
                </div>
                <div className={cx("card-statistics")}>
                  <svg>
                    <circle cx="38" cy="38" r="35"></circle>
                  </svg>
                  <p>70%</p>
                </div>
              </div>
              <div className={cx("card-item", "item4")}>
                <div className={cx("card-text")}>
                  <p className={cx("card-title")}>TOTAL SALES</p>
                  <p className={cx("card-number")}>323</p>
                </div>
                <div className={cx("card-statistics")}>
                  <svg>
                    <circle cx="38" cy="38" r="35"></circle>
                  </svg>
                  <p>70%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
