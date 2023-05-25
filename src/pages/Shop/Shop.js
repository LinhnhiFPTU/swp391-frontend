import React from 'react'
import classNames from "classnames/bind";

import Header from '~/layouts/components/Header'

import avatar from '~/assets/images/avatar.png'

import styles from "./Shop.module.scss";
const cx = classNames.bind(styles);

function Shop() {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <div className={cx('shop_container')}>
          <div className={cx('shop-left_content')}>
            <div className={cx('shop_avatar')}>
              <img src={avatar} alt='avatar' />
            </div>
            <div className={cx('shop-info')}>
              <div className={cx('shop-name')}>
                <p>Dirty Coins</p>
              </div>
              <div className={cx('shop-active')}>
                <p>Active 11 minutes ago</p>
              </div>
              <div className={cx('shop-interact')}>
                <button className={cx('shop-chat')}>
                  <i className={cx("fa-solid fa-messages")}></i>
                  <span>Chat</span>
                </button>
                <button className={cx('shop-follow')}>
                  <i className={cx('fa-regular fa-plus')}></i>
                  <span>Follow</span>
                </button>
              </div>
            </div>
          </div>
          <div className={cx('right-content')}>
            <div className={cx('shop-totalProducts')}>
              <i className={cx("fa-sharp fa-solid fa-box", "icon")}></i>
              <p>Products</p>
              <span>125</span>
            </div>
            <div className={cx('shop-totalFollowers')}>
              <i className={cx("fa-solid fa-user", "icon")}></i>
              <p>Followers</p>
              <span>100K</span>
            </div>
            <div className={cx('shop-totalRating')}>
              <i className={cx("fa-solid fa-star", "icon")}></i>
              <p>Ratings</p>
              <span>4.9</span>
            </div>
            <div className={cx('shop-totalResponseRate')}>
              <i className={cx("fa-solid fa-message", "icon")}></i>
              <p>Response rate</p>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop