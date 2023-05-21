import classNames from "classnames/bind";

import avatar from "~/assets/images/user.png";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Account.module.scss";
import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";

const cx = classNames.bind(styles);
const genders = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
  {
    id: 3,
    name: "Other",
  },
];

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

function Profile() {
  const [preview, setPreview] = useState(null);
  const [checked, setChecked] = useState(0);
  const { pathname } = useLocation();
  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (pv) => {
    setPreview(pv);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 102400) {
      alert("File is too big!");
      elem.target.value = "";
    }
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
                  {preview ? (
                    <img src={preview} alt="preview" />
                  ) : (
                    <img src={avatar} alt="avatar" />
                  )}
                </div>
                <div className={cx("user-name")}>
                  <p>DevDD</p>
                </div>
              </div>
              <div className={cx("user-nav")}>
                {sidebarDatas.map((data, index) => (
                  <NavLink
                    key={index}
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
                  >
                    <span className={cx("nav-text")}>{data.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className={cx("right-content")}>
              <div className={cx("right-content-head")}>
                <div className={cx("setting-title")}>
                  <p>Account Settings</p>
                </div>
              </div>
              <form>
                <div className={cx("setting-container")}>
                  <div className={cx("setting-content_left")}>
                    <div className={cx("text", "text-1")}>
                      <input type="text" className={cx("email")} required />
                      <span></span>
                      <label>First name</label>
                    </div>
                    <div className={cx("text", "text-2")}>
                      <input type="text" className={cx("email")} required />
                      <span></span>
                      <label>Last name</label>
                    </div>
                    <div className={cx("gender-form")}>
                      <p>Gender</p>
                      <div className={cx("gender")}>
                        {genders.map((gender) => (
                          <label key={gender.id}>
                            <input
                              type="radio"
                              checked={checked === gender.id}
                              onChange={() => {
                                setChecked(gender.id);
                              }}
                            />
                            <i></i>
                            <span>{gender.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className={cx("save")}>
                      <button className={cx("save-btn")}>Save</button>
                    </div>
                  </div>
                  <div className={cx("setting-content_right")}>
                    <div className={cx("drop-image")}>
                      <div className={cx("drop-icon")}>
                        <i
                          className={cx("fa-regular fa-file-image", "icon")}
                        ></i>
                      </div>
                      <Avatar
                        width={350}
                        height={300}
                        onCrop={onCrop}
                        onClose={onClose}
                        onBeforeFileLoad={onBeforeFileLoad}
                        src={null}
                        label="Drag your image here"
                      />
                      <div className={cx("drop-text")}>
                        <span>{preview ? "" : "(Maximum size 10 MB)"}</span>
                      </div>
                    </div>
                    <div className={cx("submit-avatar")}>
                      <button className={cx("avatar-btn")}>
                        Change avatar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
