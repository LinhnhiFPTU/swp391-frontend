import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./Dashboard.module.scss";

const cx = classNames.bind(styles);

function Dashboard() {
  return (
    <>
      <HeaderSeller title="Dashboard" />
      <div className={cx("dashboard_wrapper")}>
        <div className={cx("dashboard_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("dashboard_container")}></div>
      </div>
    </>
  );
}

export default Dashboard;
