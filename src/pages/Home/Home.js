import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Rating from '@mui/material/Rating';

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import Banner from "~/layouts/components/Banner/";

import bird from "~/assets/images/bird.png";
import birdFood from '~/assets/images/bird-food.png'
import birdCage from '~/assets/images/bird-cage.png'
import birdAccessory from '~/assets/images/bird-accessory.png'
import avatar from "~/assets/images/avatar.png";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
const categories = [
  {
    image: bird,
    title: "BIRDS",
    subText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    to: "",
  },
  {
    image: birdFood,
    title: "BIRD FOODS",
    subText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    to: "",
  },
  {
    image: birdCage,
    title: "BIRD CAGE",
    subText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    to: "",
  },
  {
    image: birdAccessory,
    title: "BIRD ACCESSORIES",
    subText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    to: "",
  },
];

const flashSales = [
  {
    image: birdFood,
    name: "Nekton",
    price: "1.777.000",
  },
  {
    image: birdFood,
    name: "Amoxy-Tyl",
    price: "1.000.000",
  },
  {
    image: birdFood,
    name: "Bird B.Gone",
    price: "200.000",
  },
  {
    image: birdFood,
    name: "Bird Spikes",
    price: "77.000",
  },
  {
    image: birdFood,
    name: "Shefa",
    price: "1.120.000",
  },
];

const bestSeller = [
  {
    image: bird,
    name: "Nekton",
    price: "1.777.000",
    sells: "100+",
  },
  {
    image: bird,
    name: "Amoxy-Tyl",
    price: "1.000.000",
    sells: "100+",
  },
  {
    image: bird,
    name: "Bird B.Gone",
    price: "200.000",
    sells: "200+",
  },
  {
    image: bird,
    name: "Bird Spikes",
    price: "77.000",
    sells: "300+",
  },
  {
    image: bird,
    name: "Shefa",
    price: "1.120.000",
    sells: "400+",
  },
  {
    image: bird,
    name: "Shefa",
    price: "1.120.000",
    sells: "400+",
  },
  {
    image: bird,
    name: "Shefa",
    price: "1.120.000",
    sells: "400+",
  },
  {
    image: bird,
    name: "Shefa",
    price: "1.120.000",
    sells: "400+",
  },
  {
    image: bird,
    name: "Shefa",
    price: "1.120.000",
    sells: "400+",
  },
  {
    image: bird,
    name: "Shefa",
    price: "1.120.000",
    sells: "400+",
  },
];



const shops = [
  {
    name: "Shop",
    describe: "Commerce is a global online marketplace, where people.",
    image: avatar,
    rating: 2,
  },
  {
    name: "Shop name",
    describe: "Commerce is a global online marketplace, where people.",
    image: avatar,
    rating: 4,
  },
  {
    name: "Shop name",
    describe: "Commerce is a global online marketplace, where people.",
    image: avatar,
    rating: 3.5,
  },
];

const products = [
  {
    image: bird,
    name: "Nekton",
    price: "1.777.000",
    sells: "100+",
  },
  {
    image: bird,
    name: "Amoxy-Tyl",
    price: "1.000.000",
    sells: "100+",
  },
  {
    image: bird,
    name: "Bird B.Gone",
    price: "200.000",
    sells: "200+",
  },
  {
    image: bird,
    name: "Bird Spikes",
    price: "77.000",
    sells: "300+",
  },
  {
    image: bird,
    name: "Shefa",
    price: "1.120.000",
    sells: "400+",
  },

];

const  PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('prev')}>
        <i class="fa-regular fa-chevron-left"></i>
      </button>
    </div>
  )
}
const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('next')}>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  )
}
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 2,
  // autoplay: true,
  // autoplaySpeed: 5000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function Home() {
  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(30);
  const timeID = useRef();

  useEffect(() => {
    timeID.current = setInterval(() => {
      setSecond((pre) => pre - 1);
      if (second === 0) {
        setMinute((pre) => pre - 1);
        setSecond(59);
      }
    }, 1000);
    return () => {
      clearInterval(timeID.current);
    };
  });

  useEffect(() => {
    if (minute === 0 && second === 0) {
      setMinute(30);
      setSecond(59);
    }
  }, [second, minute]);
  return (
    <>
      {/* -----------------HEADER----------------- */}
      <Header />

      <div className={cx("container")}>
        <div className={cx("content")}>
          {/* -----------------BANNER----------------- */}
          <Banner />
          {/* -----------------CATEGORIES----------------- */}
          <div className={cx("categories-container")}>
            <div className={cx("categories-heading")}>
              <i className={cx("cate-icon", "fa-solid fa-bars")}></i>
              <span className={cx("cate-text")}>Categories</span>
            </div>
            <div className={cx("categories")}>
              {categories.map((category, index) => (
                <Link key={index} to={category.to} className={cx("category-item")}>
                  <div className={cx("item-img")}>
                    <img src={category.image} alt="cate-img" />
                  </div>
                  <div className={cx("item-type")}>
                    <span className={cx("type-text")}>{category.title}</span>
                    <br></br>
                    <span className={cx("type-subText")}>{category.subText}</span>
                  </div>

                </Link>
              ))}
            </div>
          </div>

          {/* -----------------FLASH SALE----------------- */}
          <div className={cx("flashSale-container")}>
            <div className={cx("flashSale-top")}>
              <div className={cx("flashSale-heading")}>
                <span className={cx("flashSale-text-1")}>
                  F<i className={cx("fa-solid fa-bolt-lightning")}></i>
                  ASH <span className={cx("flashSale-text-2")}>SALE</span>
                </span>
                <span className={cx("countdown-minute")}>
                  {minute < 10 ? "0" + minute : minute}
                </span>
                <span className={cx("countdown-second")}>
                  {second < 10 ? "0" + second : second}
                </span>
              </div>
              <div className={cx("flashSale-more")}>
                <Link to="" className={cx("more-item")}>
                  <span className={cx("more-item-text")}>See more </span>
                  <i className={cx("fa-light fa-chevron-up fa-rotate-90")}></i>
                </Link>
              </div>
            </div>

            <div className={cx("flashSale-list")}>
              {flashSales.map((item, index) => (
                <Link to="/" key={index} className={cx("flashSale-item")}>
                  <div className={cx("item-img")}>
                    <img src={item.image} alt="item-img" />
                  </div>
                  <div className={cx("item-discount")}>
                    <span className={cx("per-discount")}>-20%</span>
                  </div>
                  <div className={cx("item-name")}>
                    <span className={cx("name")}>{item.name}</span>
                  </div>
                  <div className={cx("item-price")}>
                    <span className={cx("price")}>₫</span>
                    {item.price}
                  </div>
                  <div className={cx("item-status")}>
                    <div className={cx("loading")}>
                      <span className={cx("loading-text")}>SELLING WELL</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* -----------------BEST SELLER----------------- */}
          <div className={cx("best-seller_container")}>
            <div className={cx("best-seller_title")}>
              <p>TOP PRODUCTS</p>
            </div>
            <div className={cx('best-seller_list')}>
              <Slider {...settings}>
                {bestSeller.map((item, index) => (
                  <div key={index} className={cx('best-seller_items')}>
                    <div className={cx('best-seller_item')}>
                      <div className={cx('best-seller_top')}>
                        <p>TOP</p>
                      </div>
                      <div className={cx('item-img')}>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className={cx('item-name')}>{item.name}</div>
                      <div className={cx('item-price')}>{item.price}</div>
                      <div className={cx('item-sells')}><span>Monthly Sales {item.sells}</span></div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

          </div>
          {/* -----------------SHOP TRENDING----------------- */}
          <div className={cx("shop-trending-container")}>
            <div className={cx("shop-trending-top")}>
              <span>Shop Trending</span>
            </div>
            <div className={cx("shop-trending-content")}>
              {shops.map((shop, index) => (
                <Link to="/" className={cx("shop-item")} key={index}>
                  <div className={cx("shop-text")}>
                    <div className={cx("head-text")}>
                      <h3>{shop.name}</h3>
                    </div>
                    <div className={cx("sub-text")}>
                      <span>{shop.describe}</span>
                    </div>
                    <div className={cx("rating")}>
                      <span className={cx("rating-text")}>
                        <span className={cx("rate")}>{shop.rating}</span>/5
                      </span>
                      <div className={cx("rating-icon")}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={shop.rating}
                          precision={0.1}
                          size="large"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className={cx("shop-img")}>
                    <img src={shop.image} alt="shop-img" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/*-----------------------------------PRODUCTS------------------------------*/}
          <div className={cx('product_container')}>
            <div className={cx('product_title')}>
              <p>TOP PRODUCTS</p>
            </div>
            <div className={cx('product_list')}>
              {products.map((item, index) => (
                <div key={index} className={cx('product_items')}>
                  <div className={cx('product-img')}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={cx('product-name')}>{item.name}</div>
                  <div className={cx('product-price')}>{item.price}</div>
                  <div className={cx('product-sells')}><span>Monthly Sales {item.sells}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
