/* eslint-disable array-callback-return */
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import StarRating from "~/layouts/components/StarRating";

import banner from "~/assets/images/banner4.jpg";
import productImg from "~/assets/images/bird.png";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);
const sortBarOptions = [
  {
    type: "normal",
    title: "Top Sales",
  },
  {
    type: "normal",
    title: "Ratings",
  },
  {
    type: "price",
    title: "Low to High",
  },
  {
    type: "price",
    title: "High to Low",
  },
];

const products = [
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/a3/fd/a1/b164873d477c53cf992b3f57b2c97337.jpg.webp",
    name: "Vintage Style Miniature Alloy Bird Cage",
    realPrice: 300,
    salePrice: 280,
    sold: 4400,
    rating: 4.8,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/6d/93/f9/19421f88982041ce34227a2feb1bc472.jpg.webp",
    name: "Scale Vintage Black Metal Bird Cage with Stand for 12th Dollhouse Decor",
    realPrice: 250,
    salePrice: 200,
    sold: 5000,
    rating: 4.5,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0386/6810/7915/products/ScreenShot2020-12-08at2.04.30PM_1024x1024.png?v=1607432954",
    name: "Zupreem - Pure Fun Medium Birds (0.9kg)",
    realPrice: 80.50,
    salePrice: 72.45,
    sold: 200,
    rating: 4.6,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0386/6810/7915/products/nomess_1024x1024.png?v=1639034847",
    name: "Armitage - Wild Bird No Mess Seed Mix (2kg)",
    realPrice: 50,
    salePrice: 47.50,
    sold: 4200,
    rating: 5.0,
  },
  {
    img: "https://birdtoybuilder.com/product_images/uploaded_images/flower-bouquet.jpg",
    name: "Flower Bouquet - Happy Beaks Made In The USA",
    realPrice: 10,
    salePrice: 9.8,
    sold: 200,
    rating: 4.8,
  },
  {
    img: "https://m.media-amazon.com/images/I/810vMEI+w3L._AC_SX679_.jpg",
    name: "Kaytee Wild Bird Food Basic Blend, 10 lb",
    realPrice: 20,
    salePrice: 19.8,
    sold: 100,
    rating: 4.7,
  },
  {
    img: "https://m.media-amazon.com/images/I/81Rxrj4yfkL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "C&S Wild Bird EZ Fill Deluxe Single Snak/Suet Feeder with Roof & Platform",
    realPrice: 30,
    salePrice: 27,
    sold: 150,
    rating: 3.6,
  },
  {
    img: "https://m.media-amazon.com/images/I/81ZglnvUarL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Audubon Hopper Feeder with Butterfly Model NA32321",
    realPrice: 60,
    salePrice: 29,
    sold: 140,
    rating: 4.3,
  },
  {
    img: "https://m.media-amazon.com/images/I/713OMrS7tRL._AC_SX522_.jpg",
    name: "BRIAN & DANY Solar Bird Feeder for Outside, Metal Hanging Lantern Light Outdoor, Solar Powered Waterproof Wild Birdfeeder with 2 Solar Panels",
    realPrice: 100,
    salePrice: 86.6,
    sold: 70,
    rating: 3.7,
  },
  {
    img: "https://m.media-amazon.com/images/I/61wJH9U2XPL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Westcharm Solar Bird Feeder for Outdoors Hanging | Waterproof Wild Bird Feeder for Outside | Weather Resistant Hanging Birdfeeder",
    realPrice: 10,
    salePrice: 9.8,
    sold: 200,
    rating: 4.8,
  },
  {
    img: "https://m.media-amazon.com/images/I/815ZNxthB4L._AC_SX522_.jpg",
    name: "Audubon Hopper Feeder with Butterfly Model NA32321",
    realPrice: 450,
    salePrice: 400,
    sold: 290,
    rating: 4.3,
  },
  {
    img: "https://m.media-amazon.com/images/I/81rDqESuSGL._AC_SX679_.jpg",
    name: "Miracle Care Feather Miracle Care Feather Glo Bird Bath Spray, 32-Ounce",
    realPrice: 15,
    salePrice: 13.5,
    sold: 1200,
    rating: 4.8,
  },
  {
    img: "https://m.media-amazon.com/images/I/91yEMMpAY1L._AC_SY879_.jpg",
    name: "Prevue Pet Products Preen & Pacify Calypso Creations Short Stack Bird Toy 62605",
    realPrice: 12,
    salePrice: 11,
    sold: 8,
    rating: 4.4,
  },
  {
    img: "https://m.media-amazon.com/images/I/81mNkrUg-jL._AC_SX679_.jpg",
    name: "Prevue Hendryx Preen & Pacify Bodacious Bites Mineral Bird Toy 62478",
    realPrice: 20,
    salePrice: 18,
    sold: 15,
    rating: 4.8,
  },
  {
    img: "https://m.media-amazon.com/images/I/61j+44hjo9L._AC_SY300_SX300_.jpg",
    name: "Prevue Pet Products Physical & Mental Bodacious Bites Bird Toy 60942",
    realPrice: 16,
    salePrice: 14,
    sold: 700,
    rating: 4.0,
  },
  {
    img: "https://m.media-amazon.com/images/I/71gnNnXH-lL._AC_SX679_.jpg",
    name: "Prevue Pet Products Physical & Mental Bodacious Bites Ferris Wheel Bird Toy 60957",
    realPrice: 10,
    salePrice: 9.8,
    sold: 200,
    rating: 4.8,
  },
  {
    img: "https://m.media-amazon.com/images/I/71k1xHdQLJL._AC_SY879_.jpg",
    name: "Prevue Pet Products Sound & Movement Bodacious Bites Tower Bird Toy 60960",
    realPrice: 20,
    salePrice: 19,
    sold: 230,
    rating: 4.9,
  },
  {
    img: "https://m.media-amazon.com/images/I/71YbPN5-RLL._AC_SX679_.jpg",
    name: "Prevue Pet Products Physical & Mental Bodacious Bites Tentacles Bird Toy 60946",
    realPrice: 60,
    salePrice: 55,
    sold: 250,
    rating: 4.9,
  },
  {
    img: "https://m.media-amazon.com/images/I/81Jw-EHTRXL._AC_SY879_.jpg",
    name: "Penn-Plax Bird Life Wooden Playpen – Perfect for Cockatiels and Conures – Large",
    realPrice: 8,
    salePrice: 7.7,
    sold: 17,
    rating: 4.4,
  },
  {
    img: "https://m.media-amazon.com/images/I/71CwKTnrpXL._AC_SX679_.jpg",
    name: "Prevue Pet Products Physical & Mental Bodacious Bites Bamboo Shoots Bird Toy 62474",
    realPrice: 11,
    salePrice: 7.4,
    sold: 5500,
    rating: 5.0,
  },
  {
    img: "https://m.media-amazon.com/images/I/61mRcc5mKaL._AC_SX679_.jpg",
    name: "https://m.media-amazon.com/images/I/61mRcc5mKaL._AC_SX679_.jpg",
    realPrice: 111,
    salePrice: 100,
    sold: 236,
    rating: 4.9,
  },
  {
    img: "https://m.media-amazon.com/images/I/81rR62JuyML._AC_SX679_.jpg",
    name: "Prevue Hendryx 62900 Mimic Me Voice-Recording Unit for Birds Green Small",
    realPrice: 22,
    salePrice: 19,
    sold: 16,
    rating: 4.7,
  },
  {
    img: "https://m.media-amazon.com/images/I/81wpNe1JadL._AC_SY879_.jpg",
    name: "Prevue Pet Products Beijing Bird Cage, Yellow and Black",
    realPrice: 100,
    salePrice: 91,
    sold: 78,
    rating: 4.5,
  },
  {
    img: "https://m.media-amazon.com/images/I/81Qp5vmw6vL._AC_SY879_.jpg",
    name: "Prevue Hendryx Casbah Parakeet Cage, Blue and White, 1/2",
    realPrice: 150,
    salePrice: 130,
    sold: 18,
    rating: 3.6,
  },
  {
    img: "https://m.media-amazon.com/images/I/81HjV78+EAL._AC_SX679_.jpg",
    name: "Prevue Hendryx 91210 Square Roof Bird Cage Kit, White and Purple, 5/8",
    realPrice: 65,
    salePrice: 63,
    sold: 59,
    rating: 4.4,
  },
];
const commentPageBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function Products() {
  const [typeSort, setTypeSort] = useState("Top Sales");
  const [priceTitle, setPriceTitle] = useState("Price");
  const [cmtPage, setCmtPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);
  const [minPage, setMinPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.title = 'All Products | Bird Trading Platform';
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

  const handleNextCmtPage = (e) => {
    e.preventDefault();
    if (cmtPage < maxPage) {
      setCmtPage((c) => c + 1);
      return;
    }
    let max_length = commentPageBtns.length;
    if (max_length - cmtPage >= 3) {
      setMaxPage((m) => m + 3);
      setMinPage((m) => m + 3);
      setCmtPage((c) => c + 1);
    } else {
      let distance = max_length - cmtPage;
      setMaxPage((m) => m + distance);
      setMinPage((m) => m + distance);
      setCmtPage((c) => (distance > 0 ? c + 1 : c));
    }
  };

  const handlePrevCmtPage = (e) => {
    e.preventDefault();
    if (cmtPage > minPage) {
      setCmtPage((c) => c - 1);
      return;
    }
    let min = commentPageBtns[0];
    if (minPage - min >= 3) {
      setMaxPage((m) => m - 3);
      setMinPage((m) => m - 3);
      setCmtPage((c) => c - 1);
    } else {
      console.log(minPage);
      let distance = minPage - min;
      setMaxPage((m) => m - distance);
      setMinPage((m) => m - distance);
      setCmtPage((c) => (distance > 0 ? c - 1 : c));
    }
  };
  return (
    <>
      <Header />
      <div className={cx("all_wrapper")}>
        <div className={cx("all_container")}>
          <div className={cx("all_banner")}>
            <img src={banner} alt="banner" className={cx("all-img")} />
            <div className={cx("all-header")}>
              <div className={cx("title")}>Bird Trading Platform</div>
              <div className={cx("sub-title")}>
                Connecting the community of bird lovers
              </div>
            </div>
          </div>
          <div className={cx("all_sort-bar")}>
            <span className={cx("sort-bar-label")}>Sort by</span>
            {/*Sort normal*/}
            <div className={cx("sort-by-options")}>
              {sortBarOptions.map((option, index) => {
                if (option.type === "normal") {
                  return (
                    <button
                      key={index}
                      className={
                        typeSort === option.title
                          ? cx("option-btn-active")
                          : cx("option-btn")
                      }
                      onClick={() => {
                        setTypeSort(option.title);
                        setPriceTitle("Price");
                      }}
                    >
                      {option.title}
                    </button>
                  );
                }
              })}
            </div>
            {/*Sort by price*/}
            <Tippy
              interactive
              delay={[0, 100]}
              placement="bottom-end"
              render={(attrs) => (
                <div
                  className={cx("price-sort-options")}
                  tabIndex="-1"
                  {...attrs}
                >
                  <PopperWrapper>
                    {sortBarOptions.map((option, index) => {
                      if (option.type === "price") {
                        return (
                          <div
                            className={cx("option")}
                            key={index}
                            onClick={() => {
                              setTypeSort(option.title);
                              setPriceTitle(option.title);
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </PopperWrapper>
                </div>
              )}
            >
              <div className={cx("sort-by-price")}>
                <span
                  className={
                    priceTitle === "Price"
                      ? cx("price-text")
                      : cx("price-text-active")
                  }
                >
                  {priceTitle}
                </span>
                <i className={cx("fa-solid fa-chevron-right fa-rotate-90")}></i>
              </div>
            </Tippy>
          </div>
          <div className={cx("all_list-product")}>
            {products.map((product, index) => (
              <Link to="" className={cx("all_item-product")} key={index}>
                <img
                  src={product.img}
                  alt="item-img"
                  className={cx("item-image")}
                />

                <div className={cx("item-content")}>
                  <div className={cx("item-name")}>{product.name}</div>
                  <div className={cx("item-price")}>
                    <div className={cx("real-price")}>{product.realPrice}$</div>
                    <span className={cx("sale-price")}>
                      {product.salePrice}$
                    </span>
                  </div>
                  <div className={cx("rating_sold")}>
                    <div className={cx("product-rating")}>
                      <StarRating
                        rating={product.rating}
                        font={1.2}
                        color={`gold`}
                      />
                    </div>
                    <div className={cx("sold")}>
                      {(() => {
                        let rs = "";
                        if (product.sold >= 1000) {
                          const sold = product.sold / 1000;
                          const rounded = Math.round(sold * 10) / 10;
                          return (rs += rounded + "k");
                        } else {
                          return (rs += product.sold);
                        }
                      })()}{" "}
                      sold
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={cx("all_more-products")}>
            <button className={cx("prev")} onClick={handlePrevCmtPage}>
              <i className={cx("fa-solid fa-chevron-left", "prev-icon")}></i>
            </button>
            {commentPageBtns.map(
              (btn) =>
                btn <= maxPage &&
                btn >= minPage && (
                  <button
                    key={btn}
                    className={cmtPage === btn ? cx("page-active") : cx("page")}
                    onClick={() => setCmtPage(btn)}
                  >
                    {btn}
                  </button>
                )
            )}
            {maxPage !== commentPageBtns.length && (
              <button className={cx("page")} disabled>
                {"..."}
              </button>
            )}
            <button className={cx("next")} onClick={handleNextCmtPage}>
              <i
                className={cx(
                  "fa-solid fa-chevron-left fa-rotate-180",
                  "next-icon"
                )}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
