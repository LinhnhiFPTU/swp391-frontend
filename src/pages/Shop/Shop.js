/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer/Footer";
import avatar from "~/assets/images/avatar.png";
import bird from "~/assets/images/bird-cage.png";
import fire from "~/assets/images/fire.png";
import styles from "./Shop.module.scss";
const cx = classNames.bind(styles);

const shop = {
  avatar: avatar,
  name: "Dirty Coins",
  active: "Active 11 minutes ago",
  products: 125,
  rating: 4.9,
  followers: 1000,
  responseRate: 90,
}
const recProducts = [
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "25",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "30",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "35",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "40",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "45",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "50",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "55",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "60",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "65",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "70",
    sold: "4.5",
  },
];

const bigDeals = [
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "25",
    sold: "4.5",
    percent: 20,
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "30",
    sold: "4.5",
    percent: 20,
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "35",
    sold: "4.5",
    percent: 20,
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "40",
    sold: "4.5",
    percent: 20,
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "45",
    sold: "4.5",
    percent: 20,
  },
];

const topSales = [
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "25",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "30",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "35",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "40",
    sold: "4.5",
  },
];

const newProducts = [
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "25",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "30",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "35",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "40",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "40",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "40",
  },
];

const sortBarOptions = [
  {
    type: "normal",
    title: "Popular",
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
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "25",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "30",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "35",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "40",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "45",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "50",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "55",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "60",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "65",
    sold: "4.5",
  },
  {
    image: bird,
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    price: "70",
    sold: "4.5",
  },
];

const commentPageBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function Shop() {
  const [typeSort, setTypeSort] = useState("Popular");
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
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("shop_container")}>
            <div className={cx("shop-left_content")}>
              <div className={cx("shop_avatar")}>
                <img src={shop.avatar} alt="avatar" />
              </div>
              <div className={cx("shop-info")}>
                <div className={cx("shop-name")}>{shop.name}</div>
                <div className={cx("shop-active")}>
                  <span>{shop.active}</span>
                </div>
                <div className={cx("shop-interact")}>
                  <button className={cx("shop-chat")}>
                    <i className={cx("fa-solid fa-messages", "icon-chat")}></i>
                    <span>Chat</span>
                  </button>
                  <button className={cx("shop-follow")}>
                    <i className={cx("fa-regular fa-plus", "icon-follow")}></i>
                    <span>Follow</span>
                  </button>
                </div>
              </div>
            </div>
            <div className={cx("right-content")}>
              <a href="#product_list" className={cx("shop-totalProducts")}>
                <i className={cx("fa-light fa-box", "icon")}></i>
                <span className={cx("name")}>Products: </span>
                <span className={cx("number")}> {shop.products}</span>
              </a>
              <div className={cx("shop-totalFollowers")}>
                <i className={cx("fa-light fa-user", "icon")}></i>
                <span className={cx("name")}>Followers: </span>
                <span className={cx("number")}> {shop.followers}</span>
              </div>
              <div className={cx("shop-totalRating")}>
                <i className={cx("fa-light fa-star", "icon")}></i>
                <span className={cx("name")}>Ratings: </span>
                <span className={cx("number")}> {shop.rating}</span>
              </div>
              <div className={cx("shop-totalResponseRate")}>
                <i className={cx("fa-light fa-message-dots", "icon")}></i>
                <span className={cx("name")}>Response rate: </span>
                <span className={cx("number")}> {shop.responseRate}%</span>
              </div>
            </div>
          </div>
          <div className={cx("shop-products")}>
            <div className={cx("rec-title")}>
              <span>RECOMMENDED FOR YOU</span>
            </div>
            <div className={cx("rec_product-list")}>
              {recProducts.map((item, index) => (
                <Link to="" key={index} className={cx("rec_product_items")}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={cx("rec_product-img")}
                  />
                  <div className={cx("rec_content")}>
                    <div className={cx("rec_product-name")}>{item.name}</div>
                    <div className={cx("rec_product-price")}>
                      <div className={cx("real-price")}>{item.price}$</div>
                      <span className={cx("sale-price")}>{item.price}$</span>
                    </div>
                    <div className={cx("rec_rating_sold")}>
                      <div className={cx("rating")}>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      </div>
                      <div className={cx("sold")}>{item.sold}k sold</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={cx("big_deals")}>
            <div className={cx("big_deal-header")}>
              <img
                src={fire}
                alt="big-deal-img"
                className={cx("big-deal-img")}
              />
              <span className={cx("big-deal-text")}>BIG DEALS</span>
            </div>
            <div className={cx("big_deal-list")}>
              {bigDeals.map((item, index) => (
                <Link to="" key={index} className={cx("big_deal-item")}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={cx("big_deal-img")}
                  />
                  <div className={cx("sale-percent")}>-{item.percent}%</div>
                  <div className={cx("big_deal-content")}>
                    <div className={cx("big_deal-name")}>{item.name}</div>
                    <div className={cx("big_deal-price-sold")}>
                      <div className={cx("real-price")}>{item.price}$</div>
                      <span className={cx("sale-price")}>{item.price}$</span>
                      <div className={cx("sold")}>{item.sold}k sold</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={cx("top_sales")}>
            <div className={cx("top_sale-header")}>TOP SALES</div>
            <div className={cx("top_sale-list")}>
              {topSales.map((item, index) => (
                <Link to="" key={index} className={cx("top_sale-item")}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={cx("top_sale-img")}
                  />
                  <div className={cx("top_sale-content")}>
                    <div className={cx("top_sale-name")}>{item.name}</div>
                    <div className={cx("top_sale-price")}>
                      <div className={cx("real-price")}>{item.price}$</div>
                      <span className={cx("sale-price")}>{item.price}$</span>
                    </div>
                    <div className={cx("rating_sold")}>
                      <div className={cx("rating")}>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      </div>
                      <div className={cx("sold")}>{item.sold}k sold</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={cx("new_products")}>
            <div className={cx("new_product-head")}>NEW PRODUCTS</div>
            <div className={cx("new_product-list")}>
              {newProducts.map((item, index) => (
                <Link to="" key={index} className={cx("new_product-item")}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={cx("new_product-img")}
                  />
                  <div className={cx("new_product-content")}>
                    <div className={cx("new_product-name")}>{item.name}</div>
                    <div className={cx("new_product-price")}>{item.price}$</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={cx("shop_sort-bar")} id="product_list">
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
          <div className={cx("all_products")}>
            <div className={cx("all_product-list")}>
              {products.map((item, index) => (
                <Link to="" key={index} className={cx("all_product_items")}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={cx("all_product-img")}
                  />
                  <div className={cx("all_product-content")}>
                    <div className={cx("all_product-name")}>{item.name}</div>
                    <div className={cx("all_product-price")}>{item.price}$</div>
                    <div className={cx("all_rating_sold")}>
                      <div className={cx("rating")}>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                        <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      </div>
                      <div className={cx("sold")}>{item.sold}k sold</div>
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

export default Shop;
