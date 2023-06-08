// import React from 'react'
import classNames from "classnames/bind";
import { useContext, useState, useRef, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import { UserContext } from "~/App";
import styles from "./Cart.module.scss";
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";

import bird from "~/assets/images/bird.png";
import { Cartcontext } from "~/context/Context";
import axios from "axios";
const cx = classNames.bind(styles);

function Cart() {
  const user = useContext(UserContext);
  const [total, setTotal] = useState(0);
  // const [products, setProducts] = useState(true);
  // const [shop, setShop] = useState(true);

  useEffect(() => {
    document.title = `Shopping Cart`;
  }, []);
  // const handleChange = (data) => {
  //   if (data === "Products") {
  //     if (products === true) {
  //       //Handle products here
  //       console.log(data);
  //     }
  //     setProducts(!products);
  //   }
  //   if (data === "Shop name") {
  //     if (shop === true) {
  //       //Handle products here
  //       console.log(data);
  //     }
  //     setShop(!shop);
  //   }
  // };

  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  useEffect(() => {
    let newTotal = 0;
    state.forEach((i) => {
      newTotal += i.cartProducts.reduce((total, item) => {
        let price = item.product.price;
        if (item.salePercent && item.saleQuantity > item.saleSold) {
          price = price - (price * item.salePercent) / 100;
        }
        return total + price * item.quantity;
      }, 0);
    });
    console.log(newTotal);
    setTotal(newTotal);
  }, [state]);

  const handleCheckout = () => {
    alert("Check out successfully");
  };

  return (
    <>
      <Header />
      {user ? (
        <div className={cx("container")}>
          {state.length < 1 ? (
            <div className={cx("no-item")}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png?fbclid=IwAR3K0JTocd1P-MQ_umPdQcejgKPwax5CiCtEwDSy6Y4HnJveEwVYnu6ROho"
                alt="No item"
              ></img>
              <p>Your shopping cart is empty</p>
              <Link to="/" className={cx("goback-link")}>
                Go Shopping Now
              </Link>
            </div>
          ) : (
            <>
              <div className={cx("cart-container")}>
                <div className={cx("cart-header")}>
                  <div className={cx("item-pick")}>
                    <input
                      type="checkbox"
                      // value={products}
                      className={cx("checkbox-all")}
                    />
                    <span>Product</span>
                  </div>
                  <div className={cx("item-details")}>Unit Price</div>
                  <div className={cx("item-details")}>Quantity</div>
                  <div className={cx("item-details")}>Total Price</div>
                  <div className={cx("item-details")}>Actions</div>
                </div>
                {state.map((item, index) => (
                  <div key={index} className={cx("shop-cart")}>
                    <div className={cx("shop_checkbox")}>
                      <input
                        type="checkbox"
                        // value={shop}
                        className={cx("checkbox-shop")}
                      />
                      <span>{item.shop.name}</span>
                    </div>
                    <div className={cx("product_cart")}>
                      {item.cartProducts.map((p, i) => (
                        <div key={index} className={cx("product-item")}>
                          <div className={cx("product_pick")}>
                            <input
                              type="checkbox"
                              // value={products}
                              className={cx("checkbox-product")}
                            />
                            <img
                              src={p.product.images[0].url}
                              alt="Product name"
                            />
                            <span>{p.product.name}</span>
                          </div>
                          <div className={cx("product-details")}>
                            ${" "}
                            {p.salePercent
                              ? p.product.price * (1 - p.salePercent / 100)
                              : p.product.price}
                          </div>
                          <div className={cx("product-quantity")}>
                            <button
                              className={cx("product-input")}
                              onClick={() => {
                                if (p.quantity - 1 >= 1) {
                                  dispatch({
                                    type: "DECREASE",
                                    payload: p.product.id,
                                  });
                                } else {
                                  dispatch({
                                    type: "REMOVE",
                                    payload: p.product.id,
                                  });
                                }
                              }}
                            >
                              -
                            </button>
                            <p>{p.quantity}</p>
                            <button
                              className={cx("product-input")}
                              onClick={() =>
                                dispatch({
                                  type: "INCREASE",
                                  payload: p.product.id,
                                })
                              }
                            >
                              +
                            </button>
                          </div>
                          <div className={cx("product-details")}>
                            ${" "}
                            {(p.salePercent
                              ? p.product.price * (1 - p.salePercent / 100)
                              : p.product.price) * p.quantity}
                          </div>
                          <div className={cx("product-details")}>
                            <i
                              className={cx("fa-solid fa-trash-can")}
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE",
                                  payload: p.product.id,
                                })
                              }
                            ></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={cx("bottom")}>
                <div className={cx("cart-left")}>
                  <div className={cx("selectAll")}>
                    <input
                      type="checkbox"
                      // value={products}
                    />
                    <p>Select All ({state.length})</p>
                  </div>
                  <div className={cx("deleteAll")}>
                    <p>Delete</p>
                  </div>
                </div>
                <div className={cx("cart-right")}>
                  <div className={cx("totalPrice")}>
                    <span className={cx("sub-name")}>Total:</span>
                    <span className={cx("sub-price")}>{total} $</span>
                  </div>
                  <button onClick={handleCheckout}>Check out</button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
      <Footer />
    </>
  );
}

export default Cart;
