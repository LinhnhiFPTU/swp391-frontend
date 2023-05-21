import classNames from "classnames/bind";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useContext } from "react";

import avatar from "~/assets/images/user.png";
import styles from "./Password.module.scss";
import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import { UserContext } from "~/App";

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
function Password() {
  const context = useContext(UserContext) || {
    email: "",
    firstname: "",
    lastname: "",
    imageurl: "",
    gender: "",
  }

  const { pathname } = useLocation();
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <Header />
      <div className={cx("profile-wrapper")}>
        <div className={cx("profile-container")}>
          <div className={cx("profile-content")}>
            <div className={cx("left-content")}>
              <div className={cx("user-avatar")}>
                <div className={cx("user-avatar-img")}>
                  <img src={context.imageurl || avatar} alt="avatar" />
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
              <div className={cx("right-content-head")}>
                <div className={cx("setting-title")}>
                  <p>Password Settings</p>
                </div>
              </div>
              <div className={cx("setting-content")}>
                <div className={cx("pass")}>
                  <input
                    type={passwordType}
                    className={cx("password")}
                    required
                  />
                  <div className={cx("input-group-btn")}>
                    <button className={cx("eyes-btn")} onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                  <span></span>
                  <label>Old password</label>{" "}
                </div>
                <div className={cx("pass")}>
                  <input
                    type={passwordType}
                    className={cx("password")}
                    required
                  />
                  <div className={cx("input-group-btn")}>
                    <button className={cx("eyes-btn")} onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                  <span></span>
                  <label>New password</label>{" "}
                </div>
                <div className={cx("pass")}>
                  <input
                    type={passwordType}
                    className={cx("password")}
                    required
                  />
                  <div className={cx("input-group-btn")}>
                    <button className={cx("eyes-btn")} onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                  <span></span>
                  <label>Confirm password</label>{" "}
                </div>
                <div className={cx("save")}>
                  <button className={cx("save-btn")}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Password;
