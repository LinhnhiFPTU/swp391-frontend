import classNames from "classnames/bind";
import { NavLink, useLocation } from "react-router-dom";

import avatar from "~/assets/images/user-avatar.png";
import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import styles from "./Address.module.scss";

const cx = classNames.bind(styles);
const sidebarDatas = [
  {
    title: "Account",
    path: "/user/account/profile",
  },
  {
    title: "Password",
    path: "/user/account/password",
  },
  {
    title: "Address",
    path: "/user/account/address",
  },
];
function Address() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div className={cx("profile-wrapper")}>
        <div className={cx("profile-container")}>
          <div className={cx("profile-content")}>
            <div className={cx("left-content")}>
              <div className={cx("user-avatar")}>
                <div className={cx("user-avatar-img")}>
                  <img src={avatar} alt="avatar" />
                </div>
                <div className={cx("user-name")}>
                  <p>DevDD</p>
                </div>
              </div>
              <div className={cx("user-nav")}>
                {sidebarDatas.map((data, index) => (
                  <NavLink
                    to={data.path}
                    className={({ isActive }) =>
                      [cx("nav-link"), isActive ? cx("nav-active") : null].join(
                        " "
                      )
                    }
                    isActive={() =>
                      [
                        "/user/account/profile",
                        "/user/account/password",
                        "/user/account/address",
                      ].includes(pathname)
                    }
                    key={index}
                  >
                    <span className={cx("nav-text")}>{data.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className={cx("right-content")}>
              <div className={cx("setting-title")}>
                <p>Address Settings</p>
              </div>
              <div className={cx("setting-content")}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Address;
