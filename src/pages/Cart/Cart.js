// import React from 'react'
import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Cart.module.scss";
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";

import bird from "~/assets/images/bird.png";
import product from "~/assets/images/no-item.png";
import { Cartcontext } from "~/context/Context";
const cx = classNames.bind(styles);

function Cart() {
  const [products, setProducts] = useState(true);
  const [shop, setShop] = useState(true);
  const handleChange = (data) => {
    if (data === "Products") {
      if (products === true) {
        //Handle products here
        console.log(data);
      }
      setProducts(!products);
    }
    if (data === "Shop name") {
      if (shop === true) {
        //Handle products here
        console.log(data);
      }
      setShop(!shop);
    }
  };

  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("Check out successfully")
  }


  return (
    <>
      <Header />
      <div className={cx("container")}>
        {state.length < 1 ? (
          <div className={cx("no-item")}>
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png?fbclid=IwAR3K0JTocd1P-MQ_umPdQcejgKPwax5CiCtEwDSy6Y4HnJveEwVYnu6ROho" alt="No item"></img>
            <p>Your shopping cart is empty</p>
            <Link to="/" className={cx('goback-link')}>Go Shopping Now</Link>
          </div>
        ) : (
          <>
            <div className={cx("cart-container")}>
              <div className={cx("cart-header")}>
                <div className={cx("item-pick")}>
                  <input type="checkbox" value={products} />
                  <span>Product</span>
                </div>
                <div className={cx("item-details")}>Unit Price</div>
                <div className={cx("item-details")}>Quantity</div>
                <div className={cx("item-details")}>Total Price</div>
                <div className={cx("item-details")}>Actions</div>
              </div>
              <div className={cx("shop-cart")}>
                <div className={cx("shop_checkbox")}>
                  <input type="checkbox" value={shop} />
                  <span>Shop name</span>
                </div>
                <div className={cx("product_cart")}>
                  {state.map((item, index) => (
                    <div key={index} className={cx("product-item")}>
                      <div className={cx("product_pick")}>
                        <input type="checkbox" value={products} />
                        <img src={bird} alt="Product name" />
                        <span>Product Name</span>
                      </div>
                      <div className={cx("product-details")}>
                        $ {item.price}
                      </div>
                      <div className={cx("product-quantity")}>
                        <button
                          className={cx("product-input")}
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch({ type: "DECREASE", payload: item });
                            } else {
                              dispatch({ type: "REMOVE", payload: item });
                            }
                          }}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className={cx("product-input")}
                          onClick={() =>
                            dispatch({ type: "INCREASE", payload: item })
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className={cx("product-details")}>
                        $ {item.quantity * item.price}
                      </div>
                      <div className={cx("product-details")}>
                        <i
                          className={cx("fa-solid fa-trash-can")}
                          onClick={() =>
                            dispatch({ type: "REMOVE", payload: item })
                          }
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={cx("bottom")}>
              <div className={cx("cart-left")}>
                <div className={cx("selectAll")}>
                  <input type="checkbox" value={products} />
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
      <Footer />
    </>
  );
}

export default Cart;
