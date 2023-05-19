import classNames from "classnames/bind";

import { useState } from "react";
import avatar from "~/assets/images/user-avatar.png"


import styles from "./Profile.module.scss";
import Header from "~/layouts/components/Header/Header";
import Sidebar from "./Sidebar";
const cx = classNames.bind(styles);

function Password() {

    const [user, setUser] = useState(null);
    
    return (
        <div>
            <Header />
            <div className={cx('profile-wrapper')}>
                <div className={cx('left-content')}>
                    <div className={cx('user-avatar')}>
                        <div className={cx('user-avatar-img')}>
                            <img src={avatar} />
                        </div>
                        <div className={cx('user-name')}>
                            <p>DevDD</p>
                        </div>
                    </div>
                    <Sidebar />
                </div>
                <div className={cx('right-content')}>
                    <div className={cx('setting-title')}>
                        <p>Password Settings</p>
                    </div>
                    <form>
                        <div className={cx('setting-container')}>
                            <div className={cx('setting-content_left')}>
                                <div className={cx('user-info')}>
                                    <div className={cx("text")}>
                                        <label>Old password</label>
                                        <input
                                            type="password"
                                            className={cx("first-name")}
                                            onChange={(e) =>
                                                setUser({ ...user, firstName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className={cx("text")}>
                                        <label>New password</label>
                                        <input
                                            type="password"
                                            className={cx("last-name")}
                                            onChange={(e) =>
                                                setUser({ ...user, lastName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className={cx("text")}>
                                        <label>Confirm password</label>
                                        <input
                                            type="password"
                                            className={cx("last-name")}
                                            onChange={(e) =>
                                                setUser({ ...user, lastName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className={cx('user-password_button')}>
                                        <button className={cx('button', 'change')}>Change</button>
                                        <button className={cx('button', 'cancel')}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default Password;