import React from 'react'
import classNames from "classnames/bind";
import styles from "./Topbar.module.scss";

// import Tippy from "@tippyjs/react/headless";
// import { Wrapper as PopperWrapper } from "~/components/Popper";
// import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Topbar() {
  return (
    <div className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("header-link")}>
          <p className={cx("text")}>
            <span className={cx("sub-text")}>B</span>ird
            <span className={cx("inner-subText")}>
              <span className={cx("sub-text")}>T</span>rading
            </span>
          </p>
          {/* <div className={cx("otherText")}>Dashboard</div> */}
        </div>
        {/* <div className={cx("header-info")}>
          <Tippy
            interactive
            delay={[0, 100]}
            placement="bottom"
            render={(attrs) => (
              <div className={cx("user-options")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className={cx("option-first")}>
                    <Link to="/" className={cx("shop-profile")}>
                      <i
                        className={cx("icon-sub", "fa-light fa-address-card")}
                      ></i>
                      <span>Shop Profile</span>
                    </Link>
                  </div>
                  <div className={cx("option-logout")}>
                    <Link to="/" className={cx("logout-link")}>
                      <i
                        className={cx("icon-sub", "fa-regular fa-power-off")}
                      ></i>
                      <span>Log Out</span>
                    </Link>
                  </div>
                </PopperWrapper>
              </div>
            )}
          >
          </Tippy>
        </div> */}
      </div>
    </div>
  )
}

export default Topbar