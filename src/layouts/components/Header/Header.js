import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
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
              <input
                type="text"
                placeholder="Search your product from here"
              ></input>
              <button type="submit">
                <i className={cx("fa-regular fa-magnifying-glass")}></i>
              </button>
            </form>
          </div>
          <div className={cx("options-content")}>
            <div className={cx("option")}>
              <Link className={cx("option-link")} to="/shop">
                Shop
              </Link>
            </div>
            <div className={cx("option")}>
              <Link className={cx("option-link")} to="/about">
                About Us
              </Link>
            </div>
            <div className={cx("option")}>
              <Link className={cx("option-link")} to="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div className={cx("nav-icon")}>
            <div className={cx("cart-icon")}>
              <span className={cx("counter", "disable")}>22</span>
              <Link to="cart" className={cx("cart-link")}>
                <i className={cx("icon", "fa-light fa-cart-shopping")}></i>
              </Link>
            </div>
            <Tippy 
              interactive 
              delay={[0, 200]}
              placement="bottom-end"
              render={(attrs) => (
                <div className={cx('user-options')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                    <div className={cx('option-login')}>
                      <Link to="/login" className={cx('login-link')}>
                        <span>Login</span>
                        <i className={cx("fa-regular fa-right-to-bracket")}></i>
                      </Link>
                    </div>
                    <div className={cx('option-signup')}>
                      <Link to="/signup" className={cx('signup-link')}>
                        <span>Sign up</span>
                        <i className={cx("fa-regular fa-user-plus")}></i>
                      </Link>
                    </div>
                  </PopperWrapper>
                </div>
              )}>
              <div className={cx("user-icon")}>
                <i className={cx("icon", "fa-light fa-user")}></i>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
