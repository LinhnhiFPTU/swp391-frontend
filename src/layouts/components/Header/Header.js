import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
return (
    <>
    <div className={cx("header")}>
        <div className={cx("header-content")}>
        <Link to="/" className={cx("logo-link")}>
            <p className={cx("text")}>
            <span className={cx("sub-text")}>B</span>ird
            <span className={cx("inner-subText")}>
                <span className={cx("sub-text")}>T</span>rading
            </span>
            </p>
        </Link>
        <div className={cx("search-container")}>
            <form action="" className={cx("search-bar")}>
            <input type="text" placeholder="Search your product from here"></input>
            <button type="submit">
                <i className={cx("fa-regular fa-magnifying-glass")}></i>
            </button>
            </form>
        </div>
        <div className={cx("options-content")}>
            <div className={cx("option")}>
                <Link className={cx("option-link")} to="/shop">Shop</Link>
            </div>
            <div className={cx("option")}>
                <Link className={cx("option-link")} to="/about">About Us</Link>
            </div>
            <div className={cx("option")}>
                <Link className={cx("option-link")} to="/contact">Contact Us</Link>
            </div>
        </div>
        <div className={cx("cart-icon")}>
            <span className={cx('counter', 'disable')}>22</span>
            <Link to="cart">
                <i className={cx('icon', "fa-light fa-cart-shopping")}></i>
            </Link>
        </div>
        <div className={cx("nav-link")}>
            <span>
            <Link to="/login" className={cx("login-link")}>
                Login
            </Link>
            </span>
            |
            <span>
            <Link to="/signup" className={cx("signup-link")}>
                Sign up
            </Link>
            </span>
        </div>
        </div>
    </div>
    </>
);
};

export default Header;
