/* eslint-disable array-callback-return */
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import StarRating from "~/layouts/components/StarRating";

import avatar from "~/assets/images/user-avatar.png";
import productImg from "~/assets/images/bird-food.png";
import styles from "./ProductSearch.module.scss";

const cx = classNames.bind(styles);
const sortBarOptions = [
  {
    type: "normal",
    title: "Relevance",
  },
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
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
];
const commentPageBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function ProductSearch() {
  const [typeSort, setTypeSort] = useState("Relevance");
  const [priceTitle, setPriceTitle] = useState("Price");
  const [cmtPage, setCmtPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);
  const [minPage, setMinPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.title = `${"search"} - Prices and Deals | Bird Trading Platform`;
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
      <div className={cx("product-search_wrapper")}>
        <div className={cx("product-search_container")}>
          <div className={cx("product-search_shop-related")}>
            <div className={cx("shop-related_header")}>
              <span className={cx("shop-related_title")}>Shop related to </span>
              <span className={cx("shop-related_result")}>
                "{"dirty coin"}"
              </span>
            </div>
            <div className={cx("shop-related_shop")}>
              <Link to="/shop" className={cx("shop-related_shop-item")}>
                <div className={cx("shop-item_avatar")}>
                  <img
                    src={avatar}
                    alt="shop-avatar"
                    className={cx("avatar-shop")}
                  />
                </div>
                <div className={cx("shop-item_info")}>
                  <div className={cx("shop-item_nick-name")}>Dirty Coins</div>
                  <div className={cx("shop-item_user-name")}>dirtycoins</div>
                  <div className={cx("shop-item_follow-count")}>
                    <span className={cx("count-number")}>566.8k</span>{" "}
                    <span className={cx("count-text")}>Followers</span>
                  </div>
                </div>
                <div className={cx("shop-related_shop-statistic")}>
                  <div className={cx("seller-info-item")}>
                    <div className={cx("header")}>
                      <i className={cx("fa-light fa-box", "icon")}></i>
                      <span>138</span>
                    </div>
                    <div className={cx("text")}>Products</div>
                  </div>
                  <div className={cx("seller-info-item")}>
                    <div className={cx("header")}>
                      <i className={cx("fa-light fa-star", "icon")}></i>
                      <span>4.9</span>
                    </div>
                    <div className={cx("text")}>Ratings</div>
                  </div>
                  <div className={cx("seller-info-item")}>
                    <div className={cx("header")}>
                      <i className={cx("fa-light fa-message-dots", "icon")}></i>
                      <span>96%</span>
                    </div>
                    <div className={cx("text")}>Response Rate</div>
                  </div>
                  <div className={cx("seller-info-item")}>
                    <div className={cx("header")}>
                      <i
                        className={cx("fa-sharp fa-light fa-clock", "icon")}
                      ></i>
                      <span>within hours</span>
                    </div>
                    <div className={cx("text")}>Response Time</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={cx("product-search_result")}>
            <div className={cx("result_header")}>
              <i className={cx("fa-light fa-lightbulb-exclamation")}></i>
              <span className={cx("main-result")}>Search result for </span>
              <span className={cx("result")}>"{"dirty coin"}"</span>
            </div>
            <div className={cx("result_sort-bar")}>
              <span className={cx("sort-bar-label")}>Sort by</span>
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
                  <i
                    className={cx("fa-solid fa-chevron-right fa-rotate-90")}
                  ></i>
                </div>
              </Tippy>
            </div>
            <div className={cx("product-result_list")}>
              {products.map((product, index) => (
                <Link to="" className={cx("result_item")} key={index}>
                  <img
                    src={product.img}
                    alt="item-img"
                    className={cx("item-image")}
                  />

                  <div className={cx("item-content")}>
                    <div className={cx("item-name")}>{product.name}</div>
                    <div className={cx("item-price")}>
                      <div className={cx("real-price")}>
                        {product.realPrice}$
                      </div>
                      <span className={cx("sale-price")}>
                        {product.salePrice}$
                      </span>
                    </div>
                    <div className={cx("rating_sold")}>
                      <StarRating
                        rating={product.rating}
                        font={1.4}
                        color={`gold`}
                      />
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
          </div>
          <div className={cx("more-products")}>
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

export default ProductSearch;
