import classNames from "classnames/bind";

import avatar from "~/assets/images/user-avatar.png"
import Avatar from "react-avatar-edit";
import { useState } from "react";


import styles from "./Profile.module.scss";
import Header from "~/layouts/components/Header/Header";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

function Profile() {
    const [preview, setPreview] = useState(null);
    function onClose() {
        setPreview(null);
    }
    function onCrop(pv) {
        setPreview(pv);
    }
    function onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 71680) {
            alert("File is too big!");
            elem.target.value = "";
        }
    }
    return (
        <div>
            <Header />
            <div className={cx('profile-wrapper')}>
                <div className={cx('left-content')}>
                    <div className={cx('user-avatar')}>
                        <div className={cx('user-avatar-img')}>
                            {preview && <img src={preview} alt="Preview" />}
                        </div>
                        <div className={cx('user-name')}>
                            <p>DevDD</p>
                        </div>
                    </div>
                    <div className={cx('profile-navlink')}>
                        <NavLink to='/user/about'>

                        </NavLink>
                        <NavLink to='/user/password'>

                        </NavLink>
                        <NavLink to='/user/address'>

                        </NavLink>


                        <div className={cx('about-navlink')}>
                            <p>Account</p>
                        </div>
                        <div className={cx('password-navlink')}>
                            <p>Password</p>
                        </div>
                        <div className={cx('address-navlink')}>
                            <p>Address</p>
                        </div>
                    </div>
                </div>
                <div className={cx('right-content')}>
                    <div className={cx('setting-title')}>
                        <p>Account Settings</p>
                    </div>
                    <div className={cx('drop-image')}>
                        <Avatar
                            width={800}
                            height={300}
                            onCrop={onCrop}
                            onClose={onClose}
                            onBeforeFileLoad={onBeforeFileLoad}
                            src={null}
                        />
                    </div>
                    <div className={cx('user-info')}>
                        <div className={cx("text")}>
                            <input
                                type="text"
                                className={cx("first-name")}
                            //   onChange={(e) =>
                            //     setUser({ ...user, firstName: e.target.value })
                            //   }
                            //   required
                            />
                            <span></span>
                            <label>First name</label>
                        </div>
                        <div className={cx("text")}>
                            <input
                                type="text"
                                className={cx("last-name")}
                            //   onChange={(e) =>
                            //     setUser({ ...user, lastName: e.target.value })
                            //   }
                            //   required
                            />
                            <span></span>
                            <label>Last name</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )


}

export default Profile;