import React from 'react'
import { Link, NavLink } from "react-router-dom";
import images from "~/assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx("header")}>
            <Link to="/" className={cx("logo-link")}>
                <img src={images} alt="Bird" className={cx('logo')} />
                <p className={cx('text')}>BIRD TRADING</p>
            </Link>
            <div className={cx("search-container")}>
                <form action='' className={cx("search-bar")}>
                    <input type='text' placeholder='Search anything'></input>
                    <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>
            <div className={cx('cart-icon')}>
            <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className={cx('nav-link')}>
                <span><NavLink to="/login" className={cx('login-link')}>Login</NavLink></span>
                |
                <span><NavLink to="/signup" className={cx('signup-link')}>Sign up</NavLink></span>
            </div>
        </div>
    )
}

export default Header