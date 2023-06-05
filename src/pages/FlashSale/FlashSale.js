import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "~/layouts/components/Header/";
import Footer from "~/layouts/components/Footer/";
import StarRating from "~/layouts/components/StarRating";

import banner from "~/assets/images/banner.png";
import birdFood from "~/assets/images/bird-food.png";
import birdMedicine from "~/assets/images/bird-medicine.png";
import birdCage from "~/assets/images/bird-cage.png";
import bird from "~/assets/images/bird.png";
import styles from "./FlashSale.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);

const filterBtns = ["all", "birds", "foods", "medicines", "cages", "accessories"];

const products = [
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
];

const product2 = [
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    product_img: bird,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.6,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 90,
    },
  },
  {
    product_img: birdMedicine,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.2,
    product_price: 200,
    product_sale_percentage: 20,
    product_price_sale: 100,
    product_quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    product_img: birdCage,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 4.8,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 60,
    },
  },
  {
    product_img: birdFood,
    product_name:
      "Fruit Blend® Flavor with Natural Flavors Fruit Blend® Flavor with Natural Flavors",
    product_rating: 3.5,
    product_price: 200,
    product_price_sale: 100,
    product_sale_percentage: 20,
    product_quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
];
function FlashSale() {
  const [dataSource, setDataSource] = useState(products);
  const [type, setType] = useState("all");
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const timeID = useRef();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.title = "Flash Deals | Bird Trading Platform";
  }, []);

  useEffect(() => {
    const handleReload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("load", handleReload);
    return () => {
      window.removeEventListener("load", handleReload);
    };
  }, []);

  // useEffect(() => {
  //   const id = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       console.log("AA");
  //       setDataSource((p) => p.concat(product2));
  //     }
  //   };
  //   window.addEventListener("scroll", id);
  //   return () => window.removeEventListener("scroll", id);
  // }, [dataSource.length]);

  useEffect(() => {
    axios
      .get("/api/v1/publics/time")
      .then((res) => {
        let now2 = new Date(res.data);
        now2.setHours(now2.getHours() + 1);
        now2.setMinutes(0);
        now2.setSeconds(0);
        let end = now2.getTime();
        timeID.current = setInterval(() => {
          let now = new Date().getTime();
          let distance = end - now;

          let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
          let second = Math.floor((distance % (60 * 1000)) / 1000);
          setMinute(minute);
          setSecond(second);
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {
      clearInterval(timeID.current);
    };
  }, []);

  const loading = {
    maxWidth: "160px",
    height: "20px",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#f3afafcd",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const beforeLoading = {
    content: '""',
    maxWidth: "160px",
    height: "20px",
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: "12px 0 0 12px",
    background: "linear-gradient(#ee4d2d,#ff7337)",
  };

  return (
    <>
      <Header />
      <div className={cx("flash_sale-wrapper")}>
        <div className={cx("flash_sale-container")}>
          <div className={cx("flash_sale-countdown")}>
            <div className={cx("flash_sale-countdown-content")}>
              <div className={cx("flash_sale-head")}>
                <span className={cx("flash_sale-text1")}>
                  F<i className={cx("fa-solid fa-bolt-lightning")}></i>
                  ASH <span className={cx("flash_sale-text2")}>SALE</span>
                </span>
              </div>
              <div className={cx("flash_sale-countdown-end")}>
                <i className={cx("fa-light fa-clock", "clock-icon")}></i>
                <span>ENDS IN</span>
              </div>
              <div className={cx("flash_sale-countdown-time")}>
                <span className={cx("countdown-minute")}>
                  {minute < 10 ? "0" + minute : minute}
                </span>
                <span className={cx("countdown-second")}>
                  {second < 10 ? "0" + second : second}
                </span>
              </div>
            </div>
          </div>
          <div className={cx("flash_sale-banner")}>
            <img src={banner} alt="flash_sale-img" />
          </div>
          <div className={cx("flash_sale-filter")}>
            {filterBtns.map((btn) => (
              <button
                className={
                  type === btn
                    ? cx("filter-bird-btn-active")
                    : cx("filter-bird-btn")
                }
                key={btn}
                onClick={() => setType(btn)}
              >
                {btn.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={cx("flash_sale-list")}>
            {dataSource.map((product, index) => (
              <Link to="" className={cx("flash_sale-product")} key={index}>
                <div className={cx("product-sale")}>
                  <span className={cx("sale")}>
                    -{product.product_sale_percentage}%
                  </span>
                </div>
                <img
                  src={product.product_img}
                  alt="product-img"
                  className={cx("product-image")}
                />
                <div className={cx("product-content")}>
                  <div className={cx("product-name")}>
                    <span className={cx("name-text")}>
                      {product.product_name}
                    </span>
                  </div>
                  <div className={cx("product-rating")}>
                    <StarRating
                      rating={product.product_rating}
                      font={1.6}
                      color={`gold`}
                    />
                  </div>
                  <div className={cx("product-price")}>
                    <span className={cx("price-before")}>
                      ${product.product_price}
                    </span>
                    <span className={cx("price-after")}>
                      ${product.product_price_sale}
                    </span>
                  </div>
                  <div className={cx("product-feature")}>
                    <div className={cx("product-status")}>
                      <div
                        className={cx("loading")}
                        style={{
                          ...loading,
                          width: `calc((${product.product_quantity.qAvailable}) * 1px)`,
                        }}
                      >
                        <div
                          className={cx("before-element")}
                          style={{
                            ...beforeLoading,
                            width: `calc(((${product.product_quantity.qSold} * 160) / ${product.product_quantity.qAvailable}) * 1px)`,
                          }}
                        ></div>
                        <span className={cx("loading-text")}>
                          {(() => {
                            if (
                              (product.product_quantity.qSold /
                                product.product_quantity.qAvailable) *
                                100 <=
                              50
                            ) {
                              return "SELLING FAST";
                            } else if (
                              (product.product_quantity.qSold /
                                product.product_quantity.qAvailable) *
                                100 >=
                                50 &&
                              (product.product_quantity.qSold /
                                product.product_quantity.qAvailable) *
                                100 <=
                                75
                            ) {
                              return `${product.product_quantity.qSold} SOLD`;
                            } else if (
                              (product.product_quantity.qSold /
                                product.product_quantity.qAvailable) *
                                100 >
                              75
                            ) {
                              return `ONLY ${
                                product.product_quantity.qAvailable -
                                product.product_quantity.qSold
                              } LEFT`;
                            } else {
                              return "";
                            }
                          })()}
                        </span>
                      </div>
                    </div>
                    <button className={cx("buy-btn")}>Buy now</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FlashSale;
