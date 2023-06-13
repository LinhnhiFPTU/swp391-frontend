import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./Order.module.scss";

const cx = classNames.bind(styles);

function Order() {
  return (
    <>
      <HeaderSeller title="Order Management"/>
      <div className={cx("order_wrapper")}>
        <div className={cx("order_sidebar")}>
          <SideBar/>
        </div>
        <div className={cx("order_container")}>
        
        </div>
      </div>
    </>
  );
}

export default Order;
