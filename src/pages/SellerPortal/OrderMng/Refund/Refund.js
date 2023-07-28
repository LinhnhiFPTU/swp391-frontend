import classNames from "classnames/bind";
import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "../NavBar";
import Table from "../Table";
import styles from "./Refund.module.scss";

const cx = classNames.bind(styles);

function Refund() {
  return (
    <>
      <HeaderSeller title="Refund" />
      <div className={cx("refund_wrapper")}>
        <div className={cx("refund_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("refund_container")}>
          <div className={cx("refund-content")}>
            <NavBar />
            <div className={cx("order_search")}>
              <div className={cx("type-search")}>Code orders</div>
              <form className={cx("form-search")}>
                <div className={cx("search-input")}>
                  <input
                    type="text"
                    placeholder="Code"
                    spellCheck={false}
                    className={cx("input")}
                    // ref={searchRef}
                  />
                  <i
                    className={cx(
                      "fa-light fa-magnifying-glass",
                      "search-icon"
                    )}
                  ></i>
                </div>
                <button
                  type="submit"
                  className={cx("search-btn")}
                  // onClick={handleSearch}
                >
                  Search
                </button>
              </form>
            </div>
            {/* <div className={cx("order_count")}>{orders.length} Orders</div> */}
            <div className={cx("order_count")}>0 Orders</div>
            <div className={cx("order_table")}>
              <Table
              // orders={orders}
              // setPage={setPage}
              // page={page}
              // maxPage={maxPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;
