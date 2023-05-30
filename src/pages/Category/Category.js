/* eslint-disable array-callback-return */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import avatar from "~/assets/images/user-avatar.png";
import banner from "~/assets/images/banner4.jpg";
import productImg from "~/assets/images/bird-accessory.png";
import styles from "./Category.module.scss";

const cx = classNames.bind(styles);
const categoryTitle = [
  {
    type: "bird",
    title: "Birds of Wonder",
    subTitle: "Explore the kingdom of birds",
  },
  {
    type: "bird_food",
    title: "Bird's Food",
    subTitle: "Essential Nutrition for Birds",
  },
  {
    type: "bird_medicine",
    title: "Bird's Medicine",
    subTitle: "Best health for birds",
  },
  {
    type: "bird_cage",
    title: "Bird's Cage",
    subTitle: "Comfortable accommodation for birds",
  },
  {
    type: "bird_accessory",
    title: "Bird's Accessory",
    subTitle: "Essential Accessories for Stylish Birds",
  },
];

const topShop = [
  {
    shop_avatar: avatar,
    shop_name: "Shop Name",
    shop_rating: 4.5,
  },
  {
    shop_avatar: avatar,
    shop_name: "Shop Name 1",
    shop_rating: 4.9,
  },
  {
    shop_avatar: avatar,
    shop_name: "Shop Name 2",
    shop_rating: 4.3,
  },
];

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

function Category() {
  const [typeSort, setTypeSort] = useState("Relevance");
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
      <div className={cx("category_wrapper")}>
        <div className={cx("category_container")}>
          <div className={cx("category_banner")}>
            <img src={banner} alt="banner" className={cx("category-img")} />
            <div className={cx("category-header")}>
              <div className={cx("title")}>Bird's Accessory</div>
              <div className={cx("sub-title")}>
                Essential Accessories for Stylish Birds
              </div>
            </div>
          </div>
          <div className={cx("category_top-shop")}>
            {topShop.map((shop, index) => (
              <Link to="" className={cx("shop_item")} key={index}>
                <img
                  src={shop.shop_avatar}
                  alt="avatar-shop"
                  className={cx("shop-avatar")}
                />
                <div className={cx("shop-info")}>
                  <div className={cx("shop-name")}>{shop.shop_name}</div>
                  <div className={cx("shop-rating")}>
                    <span className={cx("rating-total")}>
                      <span className={cx("rating-real")}>
                        {shop.shop_rating}
                      </span>
                      /5
                    </span>
                    <div className={cx("rating-icon")}>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                    </div>
                  </div>
                  <div className={cx("shop-contact")}>
                    <button className={cx("chat")}>
                      <i
                        className={cx("fa-solid fa-messages", "icon-chat")}
                      ></i>
                      <span>Chat</span>
                    </button>
                    <Link to="" className={cx("view")}>
                      <i
                        className={cx(
                          "fa-sharp fa-solid fa-bag-shopping",
                          "icon-view"
                        )}
                      ></i>
                      <span>View Shop</span>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={cx("category_sort-bar")}>
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
                <i className={cx("fa-solid fa-chevron-right fa-rotate-90")}></i>
              </div>
            </Tippy>
          </div>
          <div className={cx("category_list-product")}>
            {products.map((product, index) => (
              <Link to="" className={cx("category_item")} key={index}>
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
            {products.map((product, index) => (
              <Link to="" className={cx("category_item")} key={index}>
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
            {products.map((product, index) => (
              <Link to="" className={cx("category_item")} key={index}>
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
            {products.map((product, index) => (
              <Link to="" className={cx("category_item")} key={index}>
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
            {products.map((product, index) => (
              <Link to="" className={cx("category_item")} key={index}>
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
          <div className={cx("category_more-products")}>
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

export default Category;
