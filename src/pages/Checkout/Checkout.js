import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MyAddress from "./MyAddress";
import PaymentMethod from "./PaymentMethod";
import CheckoutPopup from "./CheckoutPopup";
import {UserContext} from "~/userContext/Context";
import AddressPopup from "~/layouts/components/AddressPopup/AddressPopup";

import Footer from "~/layouts/components/Footer";
import styles from "./Checkout.module.scss";
import axios from "axios";

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
  const { state } = useLocation();
  const [show, setShow] = useState(false);
  const [showCheckOutPopup, setShowCheckOutPopup] = useState(false);
  const [paymentId, setPaymentId] = useState(1);
  const [openAddress, setOpenAddress] = useState(true);
  const [infoReceive, setInfoReceive] = useState(false)
  const [defaultReceiveInfo, setDefaultReceiveInfo] = useState({
    id: 0,
    fullname: "",
    phone: "",
    province: {
      id: 0,
      name: "",
    },
    district: {
      id: 0,
      name: "",
    },
    ward: {
      id: 0,
      name: "",
    },
    specific_address: "",
  });
  const [cartItem, setCartItem] = useState([]);
  const UC = useContext((UserContext))
  const context = UC.state

  useEffect(() => {
    if (context && context.defaultReceiveInfo) {
      setDefaultReceiveInfo(context.defaultReceiveInfo);
    }
  }, [context]);

  useEffect(() => {
    if (state) {
      setCartItem(state.item);
    }
  }, [state]);

  console.log(state);

  const saleCondition = (item) => {
    console.log(item);
    if (item) {
      return item.salePercent && item.saleQuantity > item.saleSold;
    }
  };

  const totalPrice = (items, shippingFee) => {
    let total = 0;
    items.forEach((item, index) => {
      total += saleCondition(item)
        ? Math.round(item.product.price * (1 - item.salePercent / 100)) *
          item.quantity
        : item.product.price * item.quantity;
    });
    return total + shippingFee;
  };

  const handleOrder = (e) => {
    let request = cartItem.map((ci, index) => ({
      shippingFee: ci.shippingFee,
      shopId: ci.shop.id,
      checkOutItems: ci.cartProducts.map((cp, i) => ({
        ...cp,
        product: undefined,
        productId: cp.product.id,
      })),
    }));
    e.preventDefault();
    axios
      .post("/api/v1/users/order/create", request)
      .then((res) => setShowCheckOutPopup(true))
      .catch((e) => console.log(e));
  };

  return (
    <>
      {openAddress &&
        defaultReceiveInfo.specific_address === "" &&
        defaultReceiveInfo.ward.name === "" &&
        defaultReceiveInfo.district.name === "" &&
        defaultReceiveInfo.province.name === "" && (
          <AddressPopup closeModel={setOpenAddress} receiveInfoChange={setInfoReceive}/>
        )}
      {showCheckOutPopup && <CheckoutPopup />}
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
                  <span className={cx("name")}>
                    {defaultReceiveInfo.fullname}
                  </span>
                  <span className={cx("phone")}>
                    {defaultReceiveInfo.phone}
                  </span>
                  {defaultReceiveInfo.specific_address !== "" && (
                    <span className={cx("address")}>
                      {`${defaultReceiveInfo.specific_address}, ${defaultReceiveInfo.ward.name}, ${defaultReceiveInfo.district.name}, ${defaultReceiveInfo.province.name}`}
                    </span>
                  )}

                  {defaultReceiveInfo.specific_address !== "" && (
                    <span className={cx("default")}>Default</span>
                  )}
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
            {cartItem.map((item, index) => (
              <div key={index} className={cx("product_order_detail")}>
                <div className={cx("shop")}>
                  <div className={cx("shop-name")}>{item.shop.name}</div>
                  <div className={cx("chat-now")}>
                    <button className={cx("chat-btn")}>
                      <i
                        className={cx("fa-solid fa-messages", "chat-icon")}
                      ></i>
                      <span className={cx("btn-chat-text")}>Chat now</span>
                    </button>
                  </div>
                </div>
                {item.cartProducts.map((c, i) => (
                  <div className={cx("product-order")}>
                    <div className={cx("product")}>
                      <div className={cx("product-info")}>
                        <img
                          src={c.product.images[0].url}
                          alt="product-img"
                          className={cx("product-img")}
                        />
                        <div className={cx("product-name")}>
                          {c.product.description}
                        </div>
                      </div>
                      <div className={cx("product-type")}>
                        <div className={cx("product-unit-price")}>
                          $
                          {saleCondition(c)
                            ? Math.round(
                                c.product.price * (1 - c.salePercent / 100)
                              )
                            : c.product.price}
                        </div>
                        <div className={cx("product-amount")}>{c.quantity}</div>
                        <div className={cx("product-total-price")}>
                          $
                          {saleCondition(c)
                            ? Math.round(
                                c.product.price * (1 - c.salePercent / 100)
                              ) * c.quantity
                            : c.product.price * c.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={cx("product-shipping")}>
                  <div className={cx("shipping-title")}>Shipping Option:</div>
                  <div className={cx("shipping-info")}>
                    <div className={cx("shipping-detail")}>
                      <div className={cx("name")}>GHN</div>
                      <div className={cx("receive-date")}>
                        Receive by {new Date().toLocaleDateString()} -{" "}
                        {new Date().toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className={cx("shipping-price")}>${0}</div>
                </div>
                <div className={cx("product-total")}>
                  <span className={cx("order-total")}>
                    Order Total (
                    <span>
                      {item.cartProducts && item.cartProducts.length} Item
                    </span>
                    ):
                  </span>
                  <span className={cx("price-total")}>
                    ${totalPrice(item.cartProducts, 0)}
                  </span>
                </div>
              </div>
            ))}
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
                      <div className={cx("price")}>$0</div>
                    </div>
                    <div className={cx("shipping-total", "content")}>
                      <div className={cx("text")}>Shipping Total:</div>
                      <div className={cx("price")}>$0</div>
                    </div>
                    <div className={cx("voucher", "content")}>
                      <div className={cx("text")}>Voucher</div>
                      <div className={cx("price")}>$0</div>
                    </div>
                    <div className={cx("total-payment", "content")}>
                      <div className={cx("text")}>Total Payment:</div>
                      <div className={cx("price")}>${state.total}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("payment-method-footer")}>
                <div className={cx("payment-submit")} onClick={handleOrder}>
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
