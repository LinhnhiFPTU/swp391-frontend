import React from 'react'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./CartDropdown.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import bird from '~/assets/images/bird-accessory.png'

const cx = classNames.bind(styles);

const MENU_PRODUCTS = [
    {
        id: 1,
        image: bird,
        name: 'Product Name',
        price: 30,
        to: '/product'
    },
    {
        id: 2,
        image: bird,
        name: 'Product Name',
        price: 30,
        to: '/product'
    },
    {
        id: 3,
        image: bird,
        name: 'Product Name',
        price: 30,
        to: '/product'
    },
    {
        id: 4,
        image: bird,
        name: 'Product Name',
        price: 30,
        to: '/product'
    },
    {
        id: 5,
        image: bird,
        name: 'Product Name',
        price: 30,
        to: '/product'
    }
]
function CartDropdown() {
    return (
        <div className={cx("cart-icon")}>
            <span className={cx("counter", "disable")}>22</span>
            <Link to="/cart" className={cx("cart-link")}>
                <div className={cx('dropdown-cart')}>
                    <Tippy
                        interactive
                        visible
                        delay={[0, 200]}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div
                                className={cx("product-items")}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper className={cx('dropdown_container')}>
                                    <p className={cx('drop-title')}>Recently Added Products</p>
                                    <div className={cx("product-item")}>
                                        {MENU_PRODUCTS.map((product) => (
                                            <Link
                                                key={product.id}
                                                to={product.to}
                                                className={cx("product-link")}
                                            >
                                                <div className={cx("prod-img")}>
                                                    <img src={product.image} alt="Product image" />
                                                </div>
                                                <div className={cx("prod-name")}>
                                                    <p className={cx("type-text")}>{product.name}</p>
                                                </div>
                                                <div className={cx("prod-price")}>
                                                    <p className={cx("type-text")}>{product.price}$</p>
                                                </div>
                                            </Link>
                                        ))}
                                        <Link
                                            to="/product"
                                            className={cx("product-link")}
                                        >
                                        </Link>
                                    </div>
                                    <div className={cx('bottom-item')}>
                                        <p>100 more products in cart</p>
                                        <button>View Shopping Cart</button>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <i className={cx("icon", "fa-light fa-cart-shopping")}></i>
                    </Tippy>
                </div>
            </Link>
        </div>
    )
}

export default CartDropdown