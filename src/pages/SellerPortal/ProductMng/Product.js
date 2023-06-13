import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product() {
  return (
    <>
      <HeaderSeller title="Product Management" />
      <div className={cx("product_wrapper")}>
        <div className={cx("product_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("product_container")}></div>
      </div>
    </>
  );
}

export default Product;
