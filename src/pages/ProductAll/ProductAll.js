import classNames from "classnames/bind";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import styles from "./Products.module.scss"

const cx = classNames.bind(styles)

function Products() {
  return (
    <>
      <Header/>
      <div className={cx("all_wrapper")}>
        <div className={cx("all_container")}></div>
      </div>
      <Footer/>
    </>
  );
}

export default Products;