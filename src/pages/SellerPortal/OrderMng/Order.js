import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "./NavBar";
import Table from "./Table";

import styles from "./Order.module.scss";

const cx = classNames.bind(styles);

const orders = [
  {
    orderId: 123456,
    order:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Completed",
    payment: "Cart",
  },
  {
    orderId: 123456,
    order:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Completed",
    payment: "Cart",
  },
  {
    orderId: 123456,
    order:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Pending",
    payment: "Cart",
  },
  {
    orderId: 123456,
    order:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Shipping",
    payment: "Cart",
  },
  {
    orderId: 123456,
    order:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Canceled",
    payment: "Cart",
  },
  {
    orderId: 123456,
    order:
      "TH Outdoor Hanging Tube Feeders Premium Automatic Bird Feeder Garden Yard Decoration For Bird Lovers",
    price: 1234,
    status: "Pending",
    payment: "Cart",
  },
];

function Order() {
  return (
    <>
      <HeaderSeller title="Order" />
      <div className={cx("order_wrapper")}>
        <div className={cx("order_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("order_container")}>
          <div className={cx("order_content")}>
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
            <div className={cx("order_count")}>0 Orders</div>
            <div className={cx("order_table")}>
              <Table orders={orders} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
