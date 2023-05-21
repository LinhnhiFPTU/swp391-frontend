import classNames from "classnames/bind";

import avatar from "~/assets/images/user-avatar.png"
import Avatar from "react-avatar-edit";
import { useState } from "react";



import styles from "./Profile.module.scss";
import Header from "~/layouts/components/Header/Header";
import Sidebar from "./Sidebar";
const cx = classNames.bind(styles);

function Profile() {
    const [preview, setPreview] = useState(null);
    const [gender, setGender] = useState();
    const [user, setUser] = useState(null);
    function onClose() {
        setPreview(null);
    }
    function onCrop(pv) {
        setPreview(pv);
    }
    function onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 102400) {
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
                            {preview ? 
                            <img src={preview} alt="Preview" /> : 
                            <img src={avatar} />}
                        </div>
                        <div className={cx('user-name')}>
                            <p>DevDD</p>
                        </div>
                    </div>
                    <Sidebar />
                </div>
                <div className={cx('right-content')}>
                    <div className={cx('setting-title')}>
                        <p>Account Settings</p>
                    </div>
                    <form>
                        <div className={cx('setting-container')}>
                            <div className={cx('setting-content_left')}>
                                <div className={cx('user-info')}>
                                    <div className={cx("text")}>
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            className={cx("first-name")}
                                            onChange={(e) =>
                                                setUser({ ...user, firstName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className={cx("text")}>
                                        <label>Last name</label>
                                        <input
                                            type="text"
                                            className={cx("last-name")}
                                            onChange={(e) =>
                                                setUser({ ...user, lastName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className={cx("text")}>
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            className={cx("last-name")}
                                            onChange={(e) =>
                                                setUser({ ...user, lastName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className={cx('gender-radio')}>
                                        <label>Gender</label>
                                        <div className={cx('gender-container')}>
                                            <label className={cx('container')}>Male
                                                <input type="radio" name="radio" />
                                                <span className={cx('checkmark')}></span>
                                            </label>
                                            <label className={cx('container')}>Female
                                                <input type="radio" name="radio" />
                                                <span className={cx('checkmark')}></span>
                                            </label>
                                            <label className={cx('container')}>Other
                                                <input type="radio" name="radio" />
                                                <span className={cx('checkmark')}></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={cx('profile-button')}>
                                        <button className={cx('button', 'update')}>Update</button>
                                        <button className={cx('button', 'cancel')}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('setting-content_right')}>
                                <div className={cx('drop-image')}>
                                    <Avatar
                                        width={300}
                                        height={300}
                                        onCrop={onCrop}
                                        onClose={onClose}
                                        onBeforeFileLoad={onBeforeFileLoad}
                                        src={null}
                                        label='Drag your image here'
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default Profile;