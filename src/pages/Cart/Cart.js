// import React from 'react'
import classNames from "classnames/bind";
import { useState } from 'react';

import styles from "./Cart.module.scss";
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

import bird from "~/assets/images/bird.png";
const cx = classNames.bind(styles);

const productCart = [
    {
        image: bird,
        productName: "Fruit Blend® Flavor with Natural Flavors",
        price: 45,
        quantity: 1,
        totalPrice: 45,
    },
    {
        image: bird,
        productName: "Fruit Blend® Flavor with Natural Flavors",
        price: 35,
        quantity: 1,
        totalPrice: 35,
    },
    {
        image: bird,
        productName: "Fruit Blend® Flavor with Natural Flavors",
        price: 40,
        quantity: 1,
        totalPrice: 40,
    },
    {
        image: bird,
        productName: "Fruit Blend® Flavor with Natural Flavors",
        price: 30,
        quantity: 1,
        totalPrice: 30,
    },
    {
        image: bird,
        productName: "Fruit Blend® Flavor with Natural Flavors",
        price: 45,
        quantity: 1,
        totalPrice: 45,
    },
];

function Cart() {
    const [products, setProducts] = useState(true);
    const [shop, setShop] = useState(true);
    const handleChange = (data) => {
        if (data === "Products") {
            if (products === true) {
                //Handle products here
                console.log(data);
            }
            setProducts(!products)
        }
        if (data === "Shop name") {
            if (shop === true) {
                //Handle products here
                console.log(data);
            }
            setShop(!shop)
        }
    }
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        setQuantity(prevCount => prevCount - 1);
    }
    const handleIncrement = () => {
        setQuantity(prevCount => prevCount + 1);
    }
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('cart-container')}>
                <div className={cx('cart-header')}>
                    <div className={cx('item-pick')}>
                        <input type="checkbox" value={products} onChange={() => handleChange("Products")} />
                        <span>Product</span>
                    </div>
                    <div className={cx('item-details')}>Unit Price</div>
                    <div className={cx('item-details')}>Quantity</div>
                    <div className={cx('item-details')}>Total Price</div>
                    <div className={cx('item-details')}>Actions</div>
                </div>
                <div className={cx('shop-cart')}>
                    <div className={cx('shop_checkbox')}>
                        <input type="checkbox" value={shop} onChange={() => handleChange("Shop name")} />
                        <span>Shop name</span>
                    </div>
                    <div className={cx('product_cart')}>
                        {productCart.map((item, index) => (
                            <div key={index} className={cx('product-item')}>
                                <div className={cx('product_pick')}>
                                    <input type="checkbox" value={products} onChange={() => handleChange("Products")} />
                                    <img src={bird} alt="Product name" />
                                    <span>Product Name</span>
                                </div>
                                <div className={cx('product-details')}>$ {item.price}</div>
                                <div className={cx('product-details')}>
                                    <button type='button' onClick={handleDecrement} className={cx('product-input')}>-</button>
                                    <input type='text' className={cx('product-quantity')} value={quantity}></input>
                                    <button type='button' onClick={handleIncrement} className={cx('product-input')}>+</button>
                                </div>
                                <div className={cx('product-details')}>$ {item.totalPrice}</div>
                                <div className={cx('product-details')}>
                                    <i className={cx("fa-solid fa-trash-can")}></i>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('cart-left')}>
                    <div className={cx('selectAll')}>
                        <input type="checkbox" value={products} onChange={() => handleChange("Products")} />
                        <p>Select All (10)</p>
                    </div>
                    <div className={cx('deleteAll')}>
                        <p>Delete</p>
                    </div>
                </div>
                <div className={cx('cart-right')}>
                    <div className={cx('sub-total')}>
                        <span className={cx('sub-name')}>Subtotal</span>
                        <span className={cx('sub-price')}>500$</span>
                    </div>
                    <div className={cx('shipping-fee')}>
                        <span className={cx('sub-name')}>Shipping fee</span>
                        <span className={cx('sub-price')}>10$</span>
                    </div>
                    <div className={cx('voucher')}>
                        <span className={cx('sub-name')}>Voucher</span>
                        <span className={cx('sub-price')}>No</span>
                    </div>
                    <div className={cx('totalPrice')}>
                        <span className={cx('sub-name')}>Total</span>
                        <span className={cx('sub-price')}>505$</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart