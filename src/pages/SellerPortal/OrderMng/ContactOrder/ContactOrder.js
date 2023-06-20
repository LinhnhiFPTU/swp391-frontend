import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "../NavBar";
import OrderData from "./OrderData";

import styles from "./ContactOrder.module.scss";

const cx = classNames.bind(styles);

const orderDatas = [
  {
    user: {
      avatarUrl:
        "https://www.thesun.ie/wp-content/uploads/sites/3/2022/02/crop-17770689.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
      name: "eeLVuxx",
    },
    order: {
      id: 123456,
      orderImageUrl:
        "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      orderName: "Prevue Pet Products Travel Carrier for Birds, Black",
      orderDate: "01-01-2032 12:43",
      orderPrice: 1200,
      orderQuantity: 2,
    },
  },
  {
    user: {
      avatarUrl:
        "https://www.thesun.ie/wp-content/uploads/sites/3/2022/02/crop-17770689.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
      name: "eeLVuxx",
    },
    order: {
      id: 123456,
      orderImageUrl:
        "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      orderName: "Prevue Pet Products Travel Carrier for Birds, Black",
      orderDate: "01-01-2032 12:43",
      orderPrice: 1200,
      orderQuantity: 2,
    },
  },
  {
    user: {
      avatarUrl:
        "https://www.thesun.ie/wp-content/uploads/sites/3/2022/02/crop-17770689.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
      name: "eeLVuxx",
    },
    order: {
      id: 123456,
      orderImageUrl:
        "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      orderName: "Prevue Pet Products Travel Carrier for Birds, Black",
      orderDate: "01-01-2032 12:43",
      orderPrice: 1200,
      orderQuantity: 2,
    },
  },
  {
    user: {
      avatarUrl:
        "https://www.thesun.ie/wp-content/uploads/sites/3/2022/02/crop-17770689.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
      name: "eeLVuxx",
    },
    order: {
      id: 123456,
      orderImageUrl:
        "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      orderName: "Prevue Pet Products Travel Carrier for Birds, Black",
      orderDate: "01-01-2032 12:43",
      orderPrice: 1200,
      orderQuantity: 2,
    },
  },
  {
    user: {
      avatarUrl:
        "https://www.thesun.ie/wp-content/uploads/sites/3/2022/02/crop-17770689.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
      name: "eeLVuxx",
    },
    order: {
      id: 123456,
      orderImageUrl:
        "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      orderName: "Prevue Pet Products Travel Carrier for Birds, Black",
      orderDate: "01-01-2032 12:43",
      orderPrice: 1200,
      orderQuantity: 2,
    },
  },
];

function ContactOrder() {
  return (
    <>
      <HeaderSeller title="Contact Order" />
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
            <OrderData orders={orderDatas} />
            <div className={cx("prev-next")}>
              <button className={cx("icon-left")}>
                <i className={cx("fa-light fa-angle-left")}></i>
              </button>
              <button className={cx("icon-right")}>
                <i className={cx("fa-light fa-angle-right")}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactOrder;
