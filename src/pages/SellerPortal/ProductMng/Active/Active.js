import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "../NavBar";
import CountFilter from "../CountFilter";
import Table from "../Table";

import styles from "./Active.module.scss";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const products = [];

function Active() {
  useEffect(() => {
    document.title = "Seller Centre";
  }, []);
  return (
    <>
      <HeaderSeller title="Product Active" />
      <div className={cx("product_wrapper")}>
        <div className={cx("product_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("product_container")}>
          <div className={cx("product_content")}>
            <NavBar />
            <div className={cx("product-search")}>
              <div className={cx("product-type")}>Product name</div>
              <form className={cx("form-search")}>
                <div className={cx("search-input")}>
                  <input
                    type="text"
                    placeholder="Product name"
                    spellCheck={false}
                    className={cx("input")}
                  />
                  <i
                    className={cx(
                      "fa-light fa-magnifying-glass",
                      "search-icon"
                    )}
                  ></i>
                </div>
                <button type="submit" className={cx("search-btn")}>
                  Search
                </button>
              </form>
            </div>
            <CountFilter count={products.length} />
            <div className={cx("product-table")}>
              <Table products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Active;
