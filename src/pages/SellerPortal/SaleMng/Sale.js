import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./Sale.module.scss";

const cx = classNames.bind(styles);

function Sale() {
  return (
    <>
      <HeaderSeller title="Sale Management" />
      <div className={cx("sale_wrapper")}>
        <div className={cx("sale_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("sale_container")}></div>
      </div>
    </>
  );
}

export default Sale;
