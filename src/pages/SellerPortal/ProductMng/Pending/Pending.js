import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "../NavBar";

import styles from "./Pending.module.scss";

const cx = classNames.bind(styles);

function Pending() {
  return (
    <>
      <HeaderSeller title="Product Pending" />
      <div className={cx("product_wrapper")}>
        <div className={cx("product_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("product_container")}>
          <div className={cx("product_content")}>
            <NavBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pending;
