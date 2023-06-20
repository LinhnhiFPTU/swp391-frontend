import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import NavBar from "../NavBar";

import styles from "./Completed.module.scss";

const cx = classNames.bind(styles);

function Completed() {
  return (
    <>
      <Header />
      <div className={cx("completed_wrapper")}>
        <div className={cx("completed_container")}>
          <NavBar />

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
                  <div className={cx("product-content")}>
                    <div className={cx("product-name")}>
                      Pet Birds Feeder Food Water Feeding Box For Small Medium
                      Large Birds Parrots
                    </div>
                    <div className={cx("quantity")}>x2</div>
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
                <Link to="/product" className={cx("buy-btn")}>Buy Again</Link>
                <button className={cx("contact-btn")}>Send Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Completed;
