/* eslint-disable array-callback-return */
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
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
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    sold: "4,4",
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    sold: "4,4",
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    sold: "4,4",
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    sold: "4,4",
  },
  {
    img: productImg,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    sold: "4,4",
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
                        setPriceTitle("Price")
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
                    <div className={cx("rating")}>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                    </div>
                    <div className={cx("sold")}>{product.sold}k sold</div>
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
