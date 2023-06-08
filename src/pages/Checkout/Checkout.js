import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import MyAddress from "./MyAddress";
import Footer from "~/layouts/components/Footer";
import styles from "./Checkout.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Checkout() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <MyAddress close={setShow} />}
      <div className={cx("checkout_wrapper")}>
        {/*------------------HEADER-------------------*/}
        <div className={cx("checkout_header")}>
          <div className={cx("header_container")}>
            <Link to="/" className={cx("logo-link")}>
              <p className={cx("text")}>
                <span className={cx("sub-text")}>B</span>ird
                <span className={cx("inner-subText")}>
                  <span className={cx("sub-text")}>T</span>rading
                </span>
              </p>
              <div className={cx("checkout-text")}>Checkout</div>
            </Link>
          </div>
        </div>
        <div className={cx("checkout_container")}>
          <div className={cx("checkout_inner")}>
            {/*------------------DELIVERY ADDRESS-------------------*/}
            <div className={cx("style_address")}></div>
            <div className={cx("checkout_address")}>
              <div className={cx("delivery_address")}>
                <i
                  className={cx(
                    "fa-sharp fa-solid fa-location-dot",
                    "location-icon"
                  )}
                ></i>
                <div className={cx("delivery-text")}>Delivery Address</div>
              </div>
              <div className={cx("address_detail")}>
                <div className={cx("address-info")}>
                  <span className={cx("name")}>Lê Vũ Đình Duy</span>
                  <span className={cx("phone")}>0123456789</span>
                  <span className={cx("address")}>
                    Phước Thành, Phường 7, Thành Phố Đà Lạt, Lâm Đồng
                  </span>
                  <span className={cx("default")}>Default</span>
                </div>
                <div className={cx("address-change")}>
                  <button
                    className={cx("change-btn")}
                    onClick={() => setShow(true)}
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
            {/*------------------PRODUCT ORDER-------------------*/}
            <div className={cx("product_order")}>
              <div className={cx("order-title")}>Product Ordered</div>
              <div className={cx("order-types")}>
                <div className={"type"}>Unit Price</div>
                <div className={"type"}>Quantity</div>
                <div className={"type"}>Total Price</div>
              </div>
            </div>
            {/*------------------PRODUCT ORDER DETAIL-------------------*/}
            <div className={cx("product_order_detail")}></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
