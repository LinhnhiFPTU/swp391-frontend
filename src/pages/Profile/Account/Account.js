import classNames from "classnames/bind";

import avatar from "~/assets/images/user.png";
import Avatar from "react-avatar-edit";
import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

import styles from "./Account.module.scss";
import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import { UserContext } from "~/App";

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
  const context = useContext(UserContext) || {
    email: "",
    firstname: "",
    lastname: "",
    imageurl: "",
    gender: "",
  }

  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    imageurl: "",
    gender: "",
  });


  const [preview, setPreview] = useState(null);
  const [confirm, setConfirm] = useState(false);
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

  useEffect(() => {
    if (confirm) {
      const formData = new FormData();
      fetch(preview)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "mail.png");
          formData.append("file", file);
          axios
            .post("/api/v1/users/upload/avatar", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              console.log(res);
              // context.imageurl = context.imageurl + "?" + new Date().getTime();
              window.location.href = "/user/account/profile"
              setConfirm(c => !c)
            })
            .catch((e) => {
              console.log(e);
              setConfirm(c => !c)
            });
        });
    }
  }, [confirm]);

  const handleConfirmAvatar = (e) => {
    e.preventDefault();
    setConfirm(true);
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
                  <img src={context.imageurl || avatar} alt="avatar"/>
                </div>
                <div className={cx("user-name")}>
                  <p>{(context.firstname + " " + context.lastname).trim() || "User"}</p>
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
                  <p>Account Settings</p>
                </div>
              </div>
              <form>
                <div className={cx("setting-container")}>
                  <div className={cx("setting-content_left")}>
                    <div className={cx("text", "text-1")}>
                      <input type="text" className={cx("email")} required value={context.firstname} onChange={e => setUser({...user, firstname: e.target.value})}/>
                      <span></span>
                      <label>First name</label>
                    </div>
                    <div className={cx("text", "text-2")}>
                      <input type="text" className={cx("email")} required value={context.lastname} onChange={e => setUser({...user, lastname: e.target.value})}/>
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
                              checked={(() => {
                                let gender_name = context.gender;
                                if(!gender_name) return false;
                                let gender_object = genders.filter(g => g.name.toUpperCase() === gender_name)[0]
                                console.log(gender_object, gender_name)
                                return gender_object.id === gender.id
                              })()}
                              onChange={() => {
                                let gender_object = genders.filter((g) => g.id === gender.id)[0]
                                setUser({...user, gender: gender_object.name.toUpperCase()})
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
                        <button className={cx("avatar-btn")} onClick={handleConfirmAvatar} disabled={preview? false : true}>
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
