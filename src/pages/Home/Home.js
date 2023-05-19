import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import Banner from "~/layouts/components/Banner/";

import birds from "~/assets/images/birds.png";
import birdFood from "~/assets/images/bird-foods.png";
import birdAccessories from "~/assets/images/bird-accessories.png";
import birdCage from "~/assets/images/bird-cage.png";
import flash from '~/assets/images/pro1.jpg'
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
const categories = [
  {
    image: birds,
    title: "BIRDS",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
  {
    image: birdFood,
    title: "BIRD FOODS",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
  {
    image: birdCage,
    title: "BIRD CAGE",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
  {
    image: birdAccessories,
    title: "BIRD ACCESSORIES",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
];
function Home() {
  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(30);
  const timeID = useRef();

  useEffect(() => {
    timeID.current = setInterval(() => {
      setSecond((pre) => pre - 1);
      if(second === 0) {
        setMinute((pre) => pre - 1)
        setSecond(59)
      }
    }, 1000);
    return () => {
      clearInterval(timeID.current);
    };
  });

  useEffect(() => {
    if(minute === 0 && second === 0) {
      setMinute(30)
      setSecond(59);
    }
  }, [second, minute])
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
                <Link
                  to={category.to}
                  className={cx("category-item")}
                  key={index}
                >
                  <div className={cx("cate-img")}>
                    <img
                      src={category.image}
                      alt="cate-img"
                      className={cx("image")}
                    />
                  </div>
                  <div className={cx("cate-text-after")}>
                    <h3 className={cx("cate-text-head")}>{category.title}</h3>
                    <p className={cx("cate-text-sub")}>{category.subTitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* -----------------FLASH SALE----------------- */}
          <div className={cx("flashSale-container")}>
            <div className={cx('flashSale-top')}>
              <div className={cx("flashSale-heading")}>
                <span className={cx("flashSale-text-1")}>
                  F<i className={cx("fa-solid fa-bolt-lightning")}></i>
                  ASH <span className={cx("flashSale-text-2")}>SALE</span>
                </span>
                <span className={cx("countdown-minute")}>{minute < 10 ? "0" + minute : minute}</span>
                <span className={cx("countdown-second")}>{second < 10 ? "0" + second : second}</span>
              </div>
              <div className={cx('flashSale-more')}>
                <Link to="" className={cx('more-item')}>
                  <span className={cx('more-item-text')}>See more </span>
                  <i className={cx("fa-light fa-chevron-up fa-rotate-90")}></i>
                </Link>
              </div>
            </div>

            <div className={cx("flashSale-list")}>
              <div className={cx("flashSale-item")}>
                <div className={cx("item-img")}>
                  <img src={flash} alt="item-img"/>
                </div>
                
              </div>
            </div>
          </div>
          {/* -----------------BEST SELLER----------------- */}
          {/* -----------------SHOP TRENDING----------------- */}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
