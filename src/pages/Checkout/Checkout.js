import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

import ChatPupup from "~/layouts/components/ChatPopup";
import MyAddress from "./MyAddress";
import PaymentMethod from "./PaymentMethod";
import CheckoutPopup from "./CheckoutPopup";

import Footer from "~/layouts/components/Footer";
import styles from "./Checkout.module.scss";

const cx = classNames.bind(styles);

const payments = [
  {
    id: 1,
    image:
      "https://lzd-img-global.slatic.net/g/tps/tfs/TB1ZP8kM1T2gK0jSZFvXXXnFXXa-96-96.png_2200x2200q80.png_.webp",
    title: "Cash On Delivery",
    subTitle: "Pay when you receive",
  },
  {
    id: 2,
    image:
      "https://lzd-img-global.slatic.net/g/tps/tfs/TB17BAYE7L0gK0jSZFAXXcA9pXa-80-80.png_2200x2200q80.png_.webp",
    title: "ZaloPay Wallet",
    subTitle: "Link your ZaloPay E-Wallet",
  },
];
function Checkout() {
  const [show, setShow] = useState(false);
  const [paymentId, setPaymentId] = useState(1);

  return (
    <>
      {<CheckoutPopup />}
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
          <ChatPupup />
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
            <div className={cx("product_order_detail")}>
              <div className={cx("shop")}>
                <div className={cx("shop-name")}>Shop name</div>
                <div className={cx("chat-now")}>
                  <button className={cx("chat-btn")}>
                    <i className={cx("fa-solid fa-messages", "chat-icon")}></i>
                    <span className={cx("btn-chat-text")}>Chat now</span>
                  </button>
                </div>
              </div>
              <div className={cx("product-order")}>
                <div className={cx("product")}>
                  <div className={cx("product-info")}>
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
                  <div className={cx("product-type")}>
                    <div className={cx("product-unit-price")}>$1000</div>
                    <div className={cx("product-amount")}>1</div>
                    <div className={cx("product-total-price")}>$1000</div>
                  </div>
                </div>
                <div className={cx("product")}>
                  <div className={cx("product-info")}>
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
                  <div className={cx("product-type")}>
                    <div className={cx("product-unit-price")}>$1000</div>
                    <div className={cx("product-amount")}>1</div>
                    <div className={cx("product-total-price")}>$1000</div>
                  </div>
                </div>
              </div>
              <div className={cx("product-shipping")}>
                <div className={cx("shipping-title")}>Shipping Option:</div>
                <div className={cx("shipping-info")}>
                  <div className={cx("shipping-detail")}>
                    <div className={cx("name")}>GHTK</div>
                    <div className={cx("receive-date")}>
                      Receive by 14 Th06 - 16 Th06
                    </div>
                  </div>
                </div>

                <div className={cx("shipping-price")}>$20</div>
              </div>
              <div className={cx("product-total")}>
                <span className={cx("order-total")}>
                  Order Total (<span>{1} Item</span>):
                </span>
                <span className={cx("price-total")}>$2000</span>
              </div>
            </div>
            {/*------------------PAYMENT METHOD-------------------*/}
            <div className={cx("payment-method")}>
              <div className={cx("payment-method-header")}>
                <span className={cx("title")}>Payment Method</span>
              </div>
              <div className={cx("payment-method-container")}>
                <div className={cx("payment-method")}>
                  {payments.map((payment) => (
                    <PaymentMethod
                      payment={payment}
                      paymentId={paymentId}
                      setPaymentId={setPaymentId}
                      key={payment.id}
                    />
                  ))}
                </div>
                <div className={cx("payment-detail")}>
                  <div className={cx("payment-order")}>
                    <div className={cx("total-amount", "content")}>
                      <div className={cx("text")}>Merchandise Subtotal:</div>
                      <div className={cx("price")}>$1000</div>
                    </div>
                    <div className={cx("shipping-total", "content")}>
                      <div className={cx("text")}>Shipping Total:</div>
                      <div className={cx("price")}>$20</div>
                    </div>
                    <div className={cx("voucher", "content")}>
                      <div className={cx("text")}>Voucher</div>
                      <div className={cx("price")}>$0</div>
                    </div>
                    <div className={cx("total-payment", "content")}>
                      <div className={cx("text")}>Total Payment:</div>
                      <div className={cx("price")}>$1200</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("payment-method-footer")}>
                <div className={cx("payment-submit")}>
                  <button className={cx("submit-btn")}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
