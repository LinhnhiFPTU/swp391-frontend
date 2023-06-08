import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "~/layouts/components/Header/";
import Footer from "~/layouts/components/Footer/";
import StarRating from "~/layouts/components/StarRating";
import ChatPupup from "~/layouts/components/ChatPopup";

import banner from "~/assets/images/banner.png";
import birdFood from "~/assets/images/bird-food.png";
import birdMedicine from "~/assets/images/bird-medicine.png";
import birdCage from "~/assets/images/bird-cage.png";
import bird from "~/assets/images/bird.png";
import styles from "./FlashSale.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);

const filterBtns = [
  "all",
  "birds",
  "foods",
  "medicines",
  "cages",
  "accessories",
];

const products = [
  {
    product_img:
      "https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp",
    product_name:
      "Pet Birds Feeder Food Water Feeding Box For Small Medium Large Birds Parrots",
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
    product_img:
      "https://birdtoybuilder.com/product_images/uploaded_images/flower-bouquet.jpg",
    product_name: "Flower Bouquet - Happy Beaks Made In The USA",
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
    product_img:
      "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    product_name: "Prevue Pet Products Travel Carrier for Birds, Black",
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
    product_img:
      "https://m.media-amazon.com/images/I/812QoPGSJ8L._AC_SL1500_.jpg",
    product_name:
      "VANFAVORI Bird Diaper Harness Flight Suit Clothes with 80 Inch Flying Leash Rope for Parrots Conure Cockatiel Pet Birds Weight 75-99 Grams, M Size Yellow",
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
    product_img:
      "https://m.media-amazon.com/images/I/91YCVnYU0wL._AC_SL1500_.jpg",
    product_name:
      "Kaytee Fiesta Big Bites Food For Small Pet Parrots And Conures, 4 Pound",
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
    product_img:
      "https://m.media-amazon.com/images/I/81Rxrj4yfkL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    product_name:
      "C&S Wild Bird EZ Fill Deluxe Single Snak/Suet Feeder with Roof & Platform",
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
    product_img:
      "https://m.media-amazon.com/images/I/713OMrS7tRL._AC_SX522_.jpg",
    product_name:
      "BRIAN & DANY Solar Bird Feeder for Outside, Metal Hanging Lantern Light Outdoor, Solar Powered Waterproof Wild Birdfeeder with 2 Solar Panels",
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
    product_img:
      "https://m.media-amazon.com/images/I/91pfEm7mx6L._AC_SL1500_.jpg",
    product_name:
      "Prevue Pet Products Soft Sided Bird Travel Carrier with Perch Large, Multicolor",
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
    product_img:
      "https://m.media-amazon.com/images/I/61wJH9U2XPL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    product_name:
      "Westcharm Solar Bird Feeder for Outdoors Hanging | Waterproof Wild Bird Feeder for Outside | Weather Resistant Hanging Birdfeeder",
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
    product_img:
      "https://salt.tikicdn.com/cache/750x750/ts/product/1e/75/d1/1b867dbda530301f0f2005c1d2309dbb.jpg.webp",
    product_name:
      "SheNew Chewing Hanging Toy for Small Medium Large Birds Parrots Pet Suppliesfa",
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
    product_img: "https://cdn-amz.woka.io/images/I/61SNW+BqM1L.jpg",
    product_name:
      "Flyline Parrot Escape Jumbo Corner Bird Cage Aviary (X-Large)",
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
    product_img:
      "https://salt.tikicdn.com/cache/750x750/ts/product/2e/b7/52/357c2d32502647a2d93611dc340ebe07.jpg.webp",
    product_name:
      "Parrots Swing Encourages Foot Exercise Training Climbing Bird Bridge Ladder",
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
    product_img:
      "https://m.media-amazon.com/images/I/815ZNxthB4L._AC_SX522_.jpg",
    product_name: "Audubon Hopper Feeder with Butterfly Model NA32321",
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
    product_img:
      "https://m.media-amazon.com/images/I/91yEMMpAY1L._AC_SY879_.jpg",
    product_name:
      "Prevue Pet Products Preen & Pacify Calypso Creations Short Stack Bird Toy 62605",
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
    product_img:
      "https://m.media-amazon.com/images/I/71gnNnXH-lL._AC_SX679_.jpg",
    product_name:
      "Prevue Pet Products Physical & Mental Bodacious Bites Ferris Wheel Bird Toy 60957",
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
          <ChatPupup color={"var(--flash_sale-primary)"} />
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
            {products.map((product, index) => (
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
            {products.map((product, index) => (
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
