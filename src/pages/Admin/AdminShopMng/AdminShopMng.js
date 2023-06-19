import React from "react";
import classNames from "classnames/bind";
import styles from "./ShopMng.module.scss";
import Sidebar from "../global/Sidebar";
import Header from "~/layouts/components/Header/Header";

const cx = classNames.bind(styles);

function AdminShopMng() {
  return (
    <div className={cx("dashboard-wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("dashboard-container")}>
          
        </div>
      </div>
    </div>
  )
}

export default AdminShopMng