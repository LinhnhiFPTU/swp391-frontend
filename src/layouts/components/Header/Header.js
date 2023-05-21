import React, { useContext } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import avatar from "~/assets/images/user.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import { UserContext } from "~/App";
const cx = classNames.bind(styles);

const Header = () => {
  const user = useContext(UserContext);

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
          <div className={cx("cart-icon")}>
            <span className={cx("counter", "disable")}>22</span>
            <Link to="cart" className={cx("cart-link")}>
              <i className={cx("icon", "fa-light fa-cart-shopping")}></i>
            </Link>
          </div>

          <div className={cx("nav-icon")}>
            {user ? (
              <Tippy
                interactive
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => (
                  <div
                    className={cx("user-login-options")}
                    tabIndex="-1"
                    {...attrs}
                  >
                    <PopperWrapper>
                      <div className={cx("option-first", "option-user")}>
                        <Link
                          to="/user/account/profile"
                          className={cx("login-link")}
                        >
                          <span>User profile</span>
                          <i className={cx("icon-sub", "fa-light fa-user")}></i>
                        </Link>
                      </div>
                      <div className={cx("option-next")}>
                        <Link to="/" className={cx("login-link")}>
                          <span>Order</span>
                          <i
                            className={cx(
                              "icon-sub",
                              "fa-sharp fa-regular fa-basket-shopping"
                            )}
                          ></i>
                        </Link>
                      </div>
                      <div className={cx("option-logout")}>
                        <Link to="/" className={cx("signup-link")}>
                          <span>Log out</span>
                          <i
                            className={cx(
                              "icon-sub",
                              "fa-regular fa-power-off"
                            )}
                          ></i>
                        </Link>
                      </div>
                    </PopperWrapper>
                  </div>
                )}
              >
                <div className={cx("user-avatar")}>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="avatar"
                      src={user.imageurl || avatar}
                      sx={{ width: 33, height: 33 }}
                    />
                  </Stack>
                </div>
              </Tippy>
            ) : (
              <Tippy
                interactive
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => (
                  <div className={cx("user-options")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <div className={cx("option-first")}>
                        <Link to="/login" className={cx("login-link")}>
                          <span>Login</span>
                          <i
                            className={cx(
                              "icon-sub",
                              "fa-regular fa-right-to-bracket"
                            )}
                          ></i>
                        </Link>
                      </div>
                      <div className={cx("option-signup")}>
                        <Link to="/signup" className={cx("signup-link")}>
                          <span>Sign up</span>
                          <i
                            className={cx(
                              "icon-sub",
                              "fa-regular fa-user-plus"
                            )}
                          ></i>
                        </Link>
                      </div>
                    </PopperWrapper>
                  </div>
                )}
              >
                <div className={cx("user-avatar")}>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="avatar"
                      src={avatar}
                      sx={{ width: 33, height: 33 }}
                    />
                  </Stack>
                </div>
              </Tippy>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
