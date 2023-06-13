import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./Chart.module.scss";

const cx = classNames.bind(styles);

function Chart() {
  return (
    <>
      <HeaderSeller title="Data Chart" />
      <div className={cx("chart_wrapper")}>
        <div className={cx("chart_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("chart_container")}></div>
      </div>
    </>
  );
}

export default Chart;
