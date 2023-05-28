import React from 'react'
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
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('cart-container')}>
                <div className={cx('cart-header')}>
                    <div className={cx('item-1')}>
                        <input type="checkbox" value={products} onChange={() => handleChange("Products")} />
                        <span>Product</span>
                    </div>
                    <div>Unit Price</div>
                    <div>Quantity</div>
                    <div>Total Price</div>
                    <div>Actions</div>
                </div>
                <div className={cx('shop-cart')}>
                    <div className={cx('shop_checkbox')}>
                        <input type="checkbox" value={shop} onChange={() => handleChange("Shop name")} />
                        <span>Shop name</span>
                    </div>
                    <div className={cx('product_cart')}>
                        {productCart.map((item, index) => (
                            <div className={cx('product-item')}>
                                <div className={cx('product_pick')}>
                                    <input type="checkbox" value={products} onChange={() => handleChange("Products")} />
                                    <img src={bird} alt="Product name" />
                                    <span>Product Name</span>
                                </div>
                                <div>Unit Price</div>
                                <div>Quantity</div>
                                <div>Total Price</div>
                                <div>Actions</div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart