import React from 'react'
import { SidebarData } from "./SidebarData";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('profile-navlink')}>
            <ul className={cx('nav-link_list')}>
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                            key={key} 
                            className={cx('row')}
                            onClick={() => window.location.pathname = val.link}>
                            <div>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar