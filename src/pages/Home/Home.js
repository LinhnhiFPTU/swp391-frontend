import classNames from "classnames/bind";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cartcontext } from "~/context/Context";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import Banner from "~/layouts/components/Banner/";
import StarRating from "~/layouts/components/StarRating";
import ChatPupup from "~/layouts/components/ChatPopup";

import bird from "~/assets/images/bird.png";
import birdFood from "~/assets/images/bird-food.png";
import avatar from "~/assets/images/avatar.png";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
const categories = [
  {
    image: bird,
    title: "BIRDS",
    to: "/category",
  },
  {
    image: birdFood,
    title: "BIRD FOODS",
    to: "/category",
  },
  // {
  //   image: birdMedicine,
  //   title: "BIRD MEDICINES",
  //   to: "/category",
  // },
  {
    image: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    title: "BIRD CAGES",
    to: "/category",
  },
  {
    image: "https://m.media-amazon.com/images/I/81lQoLzgsJL._AC_SL1500_.jpg",
    title: "BIRD ACCESSORIES",
    to: "/category",
  },
];

const flashSales = [
  {
    image: "https://m.media-amazon.com/images/I/81q4JxjG2TL._AC_SL1500_.jpg",
    name: "Wild Harvest WH-83540 Wild Harvest Advanced Nutrition Diet for Nutrition Diet for Parakeets, 4.5-Pound",
    price: "35",
    quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/81Tb1Ygi1qL._AC_SL1500_.jpg",
    name: "Prevue Pet Products Large Stainless Steel Play Top Bird Cage, Rust Resistant Metal Cage for Birds with Rooftop Ladder and Playtop",
    price: "13",
    quantity: {
      qAvailable: 200,
      qSold: 150,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/71-+A4kxeIL._AC_SL1500_.jpg",
    name: "Super Bird Creations SB747 Mini Flying Trapeze Bird Toy, Small Bird Size, 6” x 7” x 9”",
    price: "12",
    quantity: {
      qAvailable: 200,
      qSold: 50,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/812QoPGSJ8L._AC_SL1500_.jpg",
    name: "VANFAVORI Bird Diaper Harness Flight Suit Clothes with 80 Inch Flying Leash Rope for Parrots Conure Cockatiel Pet Birds Weight 75-99 Grams, M Size Yellow",
    price: "24",
    quantity: {
      qAvailable: 200,
      qSold: 100,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/91DPv4IW6VL._AC_SL1500_.jpg",
    name: "Prevue Hendryx 91351 Square Roof Bird Cage Kit, Black,1/2",
    price: "25",
    quantity: {
      qAvailable: 200,
      qSold: 190,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/61bqxRdW8pL._AC_SL1500_.jpg",
    name: "Penn-Plax Bird Life Wooden Playpen – Perfect for Parakeets, Lovebirds, and Parrotlets – Small",
    price: "26",
    quantity: {
      qAvailable: 200,
      qSold: 170,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/91YCVnYU0wL._AC_SL1500_.jpg",
    name: "Kaytee Fiesta Big Bites Food For Small Pet Parrots And Conures, 4 Pound",
    price: "27",
    quantity: {
      qAvailable: 200,
      qSold: 50,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/81OWipS1uIL._AC_SL1500_.jpg",
    name: "Prevue Pet Products South Beach Wave Top Bird Cage, Lime Green",
    price: "28",
    quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: "27",
    quantity: {
      qAvailable: 200,
      qSold: 50,
    },
  },
  {
    image: "https://m.media-amazon.com/images/I/91pfEm7mx6L._AC_SL1500_.jpg",
    name: "Prevue Pet Products Soft Sided Bird Travel Carrier with Perch Large, Multicolor",
    price: "28",
    quantity: {
      qAvailable: 200,
      qSold: 120,
    },
  },
];

const bestSeller = [
  {
    image: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: "15",
    sells: "100+",
  },
  {
    image: "https://cdn-amz.woka.io/images/I/61HuAfK4BpL.jpg",
    name: "Ozzptuu Metal Bird Feeder Stand Adjustable Height Rolling Bird Perch Play Stand Parrot Playstand with Universal Wheels and Feeding Bowls",
    price: "16",
    sells: "100+",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/23/57/e5/9a003ada893113eec9649d937b00143a.jpg.webp",
    name: "Wooden Block Bird Parrot Toys for Small Medium Large Parrots and Birds",
    price: "17",
    sells: "200+",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp",
    name: "Pet Birds Feeder Food Water Feeding Box For Small Medium Large Birds Parrots",
    price: "18",
    sells: "300+",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/1e/75/d1/1b867dbda530301f0f2005c1d2309dbb.jpg.webp",
    name: "SheNew Chewing Hanging Toy for Small Medium Large Birds Parrots Pet Suppliesfa",
    price: "19",
    sells: "400+",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/d8/65/5e/2e44e6649464c8d2cb15baba53163d81.jpg.webp",
    name: "Pet Bird Parrot Playground Wooden Ladder Toy Interactive Platform Accessory",
    price: "20",
    sells: "400+",
  },
  {
    image: "https://cdn-amz.woka.io/images/I/61SNW+BqM1L.jpg",
    name: "Flyline Parrot Escape Jumbo Corner Bird Cage Aviary (X-Large)",
    price: "21",
    sells: "400+",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0386/6810/7915/products/nomess_1024x1024.png?v=1639034847",
    name: "Lyric Delite Wild Bird Seed, No Waste Bird Food Mix with Shell-Free Nuts and Seeds, 20 lb. Bag & Morning Song 11959 Clean and Free Wild Bird Food, 10-Pound",
    price: "22",
    sells: "400+",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/2e/b7/52/357c2d32502647a2d93611dc340ebe07.jpg.webp",
    name: "Parrots Swing Encourages Foot Exercise Training Climbing Bird Bridge Ladder",
    price: "23",
    sells: "400+",
  },
  {
    image: "https://m.media-amazon.com/images/I/91YCVnYU0wL._AC_SL1500_.jpg",
    name: "Kaytee Fiesta Big Bites Food For Small Pet Parrots And Conures, 4 Pound",
    price: "24",
    sells: "400+",
  },
];

const shops = [
  {
    name: "Shop",
    image: avatar,
    rating: 2,
  },
  {
    name: "Shop name",
    image: avatar,
    rating: 4,
  },
  {
    name: "Shop name",
    image: avatar,
    rating: 3.5,
  },
];

const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/91YCVnYU0wL._AC_SL1500_.jpg",
    name: "Kaytee Fiesta Big Bites Food For Small Pet Parrots And Conures, 4 Pound",
    price: 25,
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/9d/d0/49/e1ac62b5c5f57a736d13f493faaaf4cd.jpg.webp",
    name: "Playground Natural Wooden Bird Parrot Swing Stand Cage Training Toy",
    price: 35,
    quantity: 1,
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/712J2JbsmVL._AC_SL1500_.jpg",
    name: "PENN-PLAX Small Bird Starter Kit with Birdcage and Accessories – Great for Parakeets, Lovebirds, Parrotlets, Finches, Canaries, and More – Arch Style Cage – White",
    price: 45,
    quantity: 1,
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/91UF8ogQ8RL._AC_SL1500_.jpg",
    name: "RoudyBush Daily Maintenance Bird Food, Medium, 10-Pound",
    price: 95,
    quantity: 1,
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/91FrmIEv+ML._AC_SL1500_.jpg",
    name: "Prevue Hendryx 91101 Round Roof Bird Cage Kit, Black, 3/8",
    price: 25,
    quantity: 1,
  },
  {
    id: 5,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/b3/d6/fe/bea11bdc2b502b75a8e4a71c1cb1bfc9.jpg.webp",
    name: "Parrots Wooden Stand Swing Cage Hanging Cockatiels Lovebird Perch Bird Toys",
    price: 55,
    quantity: 1,
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/819ln3wkGTS._AC_SL1500_.jpg",
    name: "Vision S01 Wire Bird Cage, Bird Home for Budgies, Finches and Canaries, Small",
    price: 65,
    quantity: 1,
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/81Uk05pO+QL._AC_SL1500_.jpg",
    name: "Prevue Pet Products 446 Bird Cage Stand for 26 x 14 Base Flight Cages, Black",
    price: 75,
    quantity: 1,
  },
  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/I/81q4JxjG2TL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Wild Harvest WH-83540 Wild Harvest Advanced Nutrition Diet for Nutrition Diet for Parakeets, 4.5-Pound",
    price: 85,
    quantity: 1,
  },

  {
    id: 9,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/57/fd/3d/ccf035bb819c2bf9dbd2be78a3fdf86a.jpg.webp",
    name: "Bird Mirror with Perch Parrots Stand Wooden Toy for Lovebird Cockatoo Parakeet Conure Finch Cockatiels",
    price: 15,
    quantity: 1,
  },
];

//Control Flash Sale Button
const PrevArrowFS = (props) => {
  const { onClick } = props;
  return (
    <div className={cx("controlfs-btn")} onClick={onClick}>
      <button className={cx("prev")}>
        <i className="fa-regular fa-chevron-left"></i>
      </button>
    </div>
  );
};
const NextArrowFS = (props) => {
  const { onClick } = props;
  return (
    <div className={cx("controlfs-btn")} onClick={onClick}>
      <button className={cx("next")}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};
//Control Best Seller Button
const PrevArrowBS = (props) => {
  const { onClick } = props;
  return (
    <div className={cx("controlbs-btn")} onClick={onClick}>
      <button className={cx("prev")}>
        <i className={cx("fa-regular fa-chevron-left")}></i>
      </button>
    </div>
  );
};
const NextArrowBS = (props) => {
  const { onClick } = props;
  return (
    <div className={cx("controlbs-btn")} onClick={onClick}>
      <button className={cx("next")}>
        <i className={cx("fa-solid fa-chevron-right")}></i>
      </button>
    </div>
  );
};
const settings_flashsale = {
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <NextArrowFS />,
  prevArrow: <PrevArrowFS />,
};
const settings_bestseller = {
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <NextArrowBS />,
  prevArrow: <PrevArrowBS />,
};

function Home() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const timeID = useRef();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.title = "Bird Trading Platform | Hot Deals, Best Prices";
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
    maxWidth: "170px",
    height: "20px",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#f3afafcd",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  };

  const beforeLoading = {
    content: '""',
    maxWidth: "170px",
    height: "20px",
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: "12px 0 0 12px",
    background: "linear-gradient(#ee4d2d, #ff7337)",
  };

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <>
      {/* -----------------HEADER----------------- */}
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>
          <ChatPupup color={"var(--primary)"}/>
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
                  key={index}
                  to={category.to}
                  className={cx("category-item")}
                >
                  <div className={cx("item-img")}>
                    <img src={category.image} alt="cate-img" />
                  </div>
                  <div className={cx("item-type")}>
                    <span className={cx("type-text")}>{category.title}</span>
                    <br></br>
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
                <Link to="/flash_sale" className={cx("more-item")}>
                  <span className={cx("more-item-text")}>See more </span>
                  <i className={cx("fa-light fa-chevron-up fa-rotate-90")}></i>
                </Link>
              </div>
            </div>

            <div className={cx("flashSale-list")}>
              <Slider {...settings_flashsale}>
                {flashSales.map((item, index) => (
                  <Link
                    to="/flash_sale"
                    key={index}
                    className={cx("flashSale-items")}
                  >
                    <div className={cx("flashSale_item")}>
                      <div className={cx("flashSale-img")}>
                        <img src={item.image} alt="item-img" />
                      </div>
                      <div className={cx("flashSale-discount")}>
                        <span className={cx("per-discount")}>-20%</span>
                      </div>
                      <div className={cx("fitem-name")}>{item.name}</div>
                      <div className={cx("fitem-price")}>{item.price}$</div>
                      <div className={cx("flashSale-status")}>
                        <div
                          className={cx("loading")}
                          style={{
                            ...loading,
                            width: `calc(${item.quantity.qAvailable} * 1px)`,
                          }}
                        >
                          <div
                            className={cx("before-element")}
                            style={{
                              ...beforeLoading,
                              width: `calc(((${item.quantity.qSold} * 170) / ${item.quantity.qAvailable}) * 1px)`,
                            }}
                          ></div>
                          <span className={cx("loading-text")}>
                            {(() => {
                              if (
                                (item.quantity.qSold /
                                  item.quantity.qAvailable) *
                                  100 <=
                                50
                              ) {
                                return "SELLING FAST";
                              } else if (
                                (item.quantity.qSold /
                                  item.quantity.qAvailable) *
                                  100 >=
                                  50 &&
                                (item.quantity.qSold /
                                  item.quantity.qAvailable) *
                                  100 <=
                                  75
                              ) {
                                return `${item.quantity.qSold} SOLD`;
                              } else if (
                                (item.quantity.qSold /
                                  item.quantity.qAvailable) *
                                  100 >
                                75
                              ) {
                                return `ONLY ${
                                  item.quantity.qAvailable - item.quantity.qSold
                                } LEFT`;
                              } else {
                                return "";
                              }
                            })()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>

          {/* -----------------BEST SELLER----------------- */}
          <div className={cx("best-seller_container")}>
            <div className={cx("best-seller_title")}>
              <p>TOP PRODUCTS</p>
            </div>
            <div className={cx("best-seller_list")}>
              <Slider {...settings_bestseller}>
                {bestSeller.map((item, index) => (
                  <Link to="" key={index} className={cx("best-seller_items")}>
                    <div className={cx("best-seller_item")}>
                      <div className={cx("best-seller_top")}>
                        <p>TOP</p>
                      </div>
                      <div className={cx("item-img")}>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className={cx("bitem-name")}>{item.name}</div>
                      <div className={cx("bitem-price")}>{item.price}$</div>
                      <div className={cx("bitem-sells")}>
                        <span>Monthly Sales {item.sells}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>

          {/*-----------------------PRODUCTS------------------------*/}
          <div className={cx("product_container")}>
            <div className={cx("product_title")}>
              <p>DAILY PRODUCTS</p>
            </div>
            <div className={cx("product_list")}>
              {products.map((item, index) => (
                <Link to="" key={index} className={cx("product_items")}>
                  <div className={cx("product-img")}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={cx("product-name")}>{item.name}</div>
                  <div className={cx("product-rating")}>
                    <StarRating
                      rating={item.rating}
                      font={1.2}
                      color={`gold`}
                    />
                  </div>
                  <div className={cx("price_before")}>${item.price}</div>
                  <div className={cx("product-price")}>${item.price}</div>
                  <button
                    className={cx("btn_add")}
                    onClick={() => dispatch({ type: "ADD", payload: item })}
                  >
                    Buy Now
                  </button>
                </Link>
              ))}
            </div>
          </div>
          {/* -----------------SHOP TRENDING----------------- */}
          <div className={cx("shop-trending-container")}>
            <div className={cx("shop-trending-top")}>
              <span>Shop Trending</span>
            </div>
            <div className={cx("shop-trending-content")}>
              {shops.map((shop, index) => (
                <div className={cx("shop-item")} key={index}>
                  <div className={cx("shop-img")}>
                    <img src={shop.image} alt="shop-img" />
                  </div>
                  <div className={cx("shop-text")}>
                    <div className={cx("head-text")}>
                      <h3>{shop.name}</h3>
                    </div>
                    <div className={cx("rating")}>
                      <span className={cx("rating-text")}>
                        <span className={cx("rate")}>{shop.rating}</span>/5
                      </span>
                      <div className={cx("rating-icon")}>
                        <StarRating
                          rating={shop.rating}
                          font={1.2}
                          color={`gold`}
                        />
                      </div>
                    </div>
                    <div className={cx("contact")}>
                      <button className={cx("chat")}>
                        <i
                          className={cx("fa-solid fa-messages", "icon-chat")}
                        ></i>
                        <span className={cx("chat-text")}>Chat</span>
                      </button>
                      <Link to="/shop" className={cx("view")}>
                        <i
                          className={cx(
                            "fa-sharp fa-solid fa-bag-shopping",
                            "icon-view"
                          )}
                        ></i>
                        <span className={cx("view-text")}>View Shop</span>
                      </Link>
                    </div>
                  </div>
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
