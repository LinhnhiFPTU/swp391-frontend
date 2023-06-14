import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./Shop.module.scss";

const cx = classNames.bind(styles);

function Shop() {
  return (
    <>
      <HeaderSeller title="Shop" />
      <div className={cx("shop_wrapper")}>
        <div className={cx("shop_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("shop_container")}></div>
      </div>
    </>
  );
}

export default Shop;
