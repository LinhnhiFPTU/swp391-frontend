import classNames from "classnames/bind";
import { NavLink, useLocation } from "react-router-dom";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import styles from "./Purchase.module.scss";

const cx = classNames.bind(styles);

const statusNav = [
  {
    title: "All",
    to: "/purchase/all",
  },
  {
    title: "Pending",
    to: "/purchase/pending",
  },
  {
    title: "Shipping",
    to: "/purchase/shipping",
  },
  {
    title: "Completed",
    to: "/purchase/complete",
  },
  {
    title: "Cancelled",
    to: "/purchase/cancel",
  },
];

function Purchase() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <div className={cx("purchase_wrapper")}>
        <div className={cx("purchase_container")}>
          <div className={cx("purchase_header-nav")}>
            {statusNav.map((status, index) => (
              <NavLink
                key={index}
                to={status.to}
                className={({ isActive }) =>
                  [cx("nav"), isActive ? cx("nav-active") : null].join(" ")
                }
                isActive={() =>
                  [
                    "/purchase/all",
                    "/purchase/pending",
                    "/purchase/shipping",
                    "/purchase/complete",
                    "/purchase/cancel",
                  ].includes(pathname)
                }
              >
                <span className={cx("nav-text")}>{status.title}</span>
              </NavLink>
            ))}
          </div>

          <div className={cx("purchase_item")}>
            <div className={cx("purchase_item-info")}>
              <div className={cx("purchase_item-header")}>
                <div className={cx("shop-name")}>Baboon’s Toys Shop</div>
                <div className={cx("status")}>COMPLETED</div>
              </div>
              <div className={cx("purchase_item-detail")}>
                <div className={cx("content")}>
                  <img
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                    alt="product-img"
                    className={cx("product-img")}
                  />
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium
                    Large Birds Parrots
                  </div>
                </div>
                <div className={cx("price")}>$1000</div>
              </div>
            </div>
            <div className={cx("purchase_item_order-total")}>
              <div className={cx("order-total-detail")}>
                <div className={cx("text")}>Order Total:</div>
                <div className={cx("price")}>$1000</div>
              </div>
            </div>
            <div className={cx("purchase_item-options")}>
              <div className={cx("text")}>No rating received</div>
              <div className={cx("button")}>
                <button className={cx("buy-btn")}>Buy Again</button>
                <button className={cx("contact-btn")}>Contact Seller</button>
              </div>
            </div>
          </div>
          {/* <div className={cx("no-purchase_item")}>
            <div className={cx("no-purchase_item-content")}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/5fafbb923393b712b96488590b8f781f.png"
                alt="img"
                className={cx("no_item-img")}
              />
              <span className={cx("text")}>No orders yet</span>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Purchase;
