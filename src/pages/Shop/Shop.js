import React from 'react'
import classNames from "classnames/bind";

import Header from '~/layouts/components/Header'

import avatar from '~/assets/images/avatar.png'
import bird from "~/assets/images/bird.png";

import styles from "./Shop.module.scss";
const cx = classNames.bind(styles);

const products = [
  {
    image: bird,
    name: "Nekton",
    price: "25",
  },
  {
    image: bird,
    name: "Amoxy-Tyl",
    price: "30",
  },
  {
    image: bird,
    name: "Bird B.Gone",
    price: "35",
  },
  {
    image: bird,
    name: "Bird Spikes",
    price: "40",
  },
  {
    image: bird,
    name: "Shefa",
    price: "45",
  },
  {
    image: bird,
    name: "Shefa",
    price: "50",
  },
  {
    image: bird,
    name: "Shefa",
    price: "55",
  },
  {
    image: bird,
    name: "Shefa",
    price: "60",
  },
  {
    image: bird,
    name: "Shefa",
    price: "65",
  },
  {
    image: bird,
    name: "Shefa",
    price: "70",
  },
];

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
            <div className={cx('right-content_item')}>
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
            </div>
            <div className={cx('right-content_item')}>
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
        <div className={cx('shop_navbar')}>
          <div className={cx('col-lg-2', 'all-products')}>
            <p>All Products</p>
          </div>
          <div className={cx('col-lg-2', 'nav-birds')}>
            <p>Birds</p>
          </div>
          <div className={cx('col-lg-2', 'nav-food')}>
            <p>Bird Foods</p>
          </div>
          <div className={cx('col-lg-2', 'nav-cage')}>
            <p>Bird Cages</p>
          </div>
          <div className={cx('col-lg-2', 'nav-medicine')}>
            <p>Bird Medicines</p>
          </div>
          <div className={cx('col-lg-2', 'nav-accessories')}>
            <p>Bird Accessories</p>
          </div>
        </div>
        <div className={cx('shop-products')}>
          <div className={cx('rec-title')}>
            <p>RECOMMENDED FOR YOU</p>
          </div>
          <div className={cx('product-list')}>
            {products.map((item, index) => (
              <div key={index} className={cx("product_items")}>
                <div className={cx("product-img")}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={cx('product-name')}>{item.name}</div>
                <div className={cx('product-rating')}>
                  <i className={cx("fa-solid fa-star", 'rate_icon')}></i>
                  <i className={cx("fa-solid fa-star", 'rate_icon')}></i>
                  <i className={cx("fa-solid fa-star", 'rate_icon')}></i>
                  <i className={cx("fa-solid fa-star", 'rate_icon')}></i>
                  <i className={cx("fa-solid fa-star", 'rate_icon')}></i>
                </div>
                <div className={cx('price_before')}>${item.price}</div>
                <div className={cx('product-price')}>${item.price}</div>
                <button className={cx('btn_add')}>Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop