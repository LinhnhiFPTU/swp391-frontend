/* eslint-disable array-callback-return */
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import axios from "axios";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import StarRating from "~/layouts/components/StarRating";
import ChatPupup from "~/layouts/components/ChatPopup";

import avatar from "~/assets/images/user-avatar.png";
import styles from "./ProductSearch.module.scss";

const cx = classNames.bind(styles);
const shop = {
  name: "Dirty Coins",
  nick_name: "dirtycoins",
  followers: 546000,
  products: 145,
  rating: 4.9,
  response_rate: 96,
  response_time: "within hours",
};
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
    img: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    name: "Best Choice Products 36in Indoor/Outdoor Iron Bird Cage for Medium Small Birds, Parrot, Lovebird, Finch, Parakeets, Cockatiel Enclosure w/Removable Tray, 4 Feeders, 2 Toys",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://m.media-amazon.com/images/I/91QAIUPjeEL._AC_SL1500_.jpg",
    name: "RoudyBush Daily Maintenance Bird Food, Crumbles, 10-Pound",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://m.media-amazon.com/images/I/61P1zHv5jCL._AC_SL1000_.jpg",
    name: "ASOCEA Extra Large Bird Parrot Cage Cover Good Night Birdcage Cover Universal Blackout for Parakeets Budgies Conure Macaw Square Cages - Black",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/sg-11134201-23030-fpe4t51k6uov5d",
    name: "Stainless steel bird cage toy 304 medium/large gray with support for parrot vvz0 VUT8",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://lzd-img-global.slatic.net/g/p/829a02b58aa7be6a895e72174ff3cef5.jpg_720x720q80.jpg_.webp",
    name: "Stainless steel bird cage toy 304 medium/large gray with support for parrot vvz0 VUT8",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-jxau5so5l9mvc1",
    name: "Chewing Birds Toy Corn Climbing Exercise Parrot Perch Bite For Budgies Lovebirds",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://m.media-amazon.com/images/I/81q4JxjG2TL._AC_SL1500_.jpg",
    name: "Wild Harvest WH-83540 Wild Harvest Advanced Nutrition Diet for Nutrition Diet for Parakeets, 4.5-Pound",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/23/57/e5/9a003ada893113eec9649d937b00143a.jpg.webp",
    name: "Wooden Block Bird Parrot Toys for Small Medium Large Parrots and Birds",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/75/e3/96/1095f4b30807c071f357a747aa7fe083.jpg.webp",
    name: "wooden bird Ladder Pet Parrots Climbing Bridge Miniature Simple Installation",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/d8/65/5e/2e44e6649464c8d2cb15baba53163d81.jpg.webp",
    name: "Pet Bird Parrot Playground Wooden Ladder Toy Interactive Platform Accessory",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://down-vn.img.susercontent.com/file/37e73b3cd663edcdd97223d1b79b9410",
    name: "Oxygen072 Anti-bird Mesh Garden Bird Netting Crops Fruits Vegetables Protection Net",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/64/ec/0d/e1274fdc463cdd45d9c23df9786a2950.jpg.webp",
    name: "Natural Bamboo Parrot Bird Cage Feeder Foraging Toys Bird Supplies",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://m.media-amazon.com/images/I/614bbKXdFLL._AC_SL1080_.jpg",
    name: "ZuPreem Smart Selects Bird Food for Small Birds, 2 lb - Everyday Feeding for Parakeets, Budgies, Parrotlets",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/1e/5d/5c/48eb50c22cc17643d7de091e9c5854f4.jpg.webp",
    name: "Bird Feeder - Wild Bird Hanging Suet Feed Tube Holder Seed and Peanut Feeder",
    realPrice: "300",
    salePrice: "20",
    rating: 4,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/91/f5/cd/8694ff0fffb7024020b741e34aa44e81.jpg.webp",
    name: "Bird Feeder Bowl Feed Cup Bird Food Feeding Bowl for Budgie Cage Accessories",
    realPrice: "300",
    salePrice: "120",
    rating: 4.4,
    sold: 400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/0d/79/b4/ee8e965affab63fe1afef8dbfdc2380f.jpg.webp",
    name: "Bird Parrot Feeding Cup Parrot Water Food Bowl Bird Cage Feeder for Canary",
    realPrice: "300",
    salePrice: "20",
    rating: 4.2,
    sold: 4400,
  },
  {
    img: "https://m.media-amazon.com/images/I/91g3Zg2zuwL._AC_SL1500_.jpg",
    name: "Wild Harvest Daily Blend Nutrition Diet for Parakeet, Canary and Finch, Orange flavored, 10 Pounds",
    realPrice: "300",
    salePrice: "20",
    rating: 3.4,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/cache/750x750/ts/product/ac/bd/fb/5376a087b9e5ae98d1678e479095c814.jpg.webp",
    name: "Bird Cage Feeder Cage Accessories Seed Food Container for Budgie Cockatiel",
    realPrice: "300",
    salePrice: "20",
    rating: 4.6,
    sold: 4400,
  },
  {
    img: "https://salt.tikicdn.com/ts/product/05/b3/42/bd119331a518ba36fc97fea7b184ea53.jpg",
    name: "Bird Cage Parrot Large Wooden Swing Stand Parrot Bird Perch Stand",
    realPrice: "1300",
    salePrice: "200",
    rating: 4,
    sold: 5500,
  },
  {
    img: "https://salt.tikicdn.com/ts/product/0b/2f/cb/6372b35dbcbf15b906b69da16641516e.jpg",
    name: "Pet Parrot Perch Bird Stand Wooden Parrot Perch Stand for Cockatiel Parakeet",
    realPrice: "150",
    salePrice: "120",
    rating: 4.2,
    sold: 1400,
  },
];
const commentPageBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function ProductSearch() {
  const [typeSort, setTypeSort] = useState("Relevance");
  const [priceTitle, setPriceTitle] = useState("Price");
  const [cmtPage, setCmtPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);
  const [minPage, setMinPage] = useState(1);
  const [locationFilter, setLocationFilter] = useState([]);
  const [searchP, setSearchP] = useState("");
  // const [searchFilter, setSearchFilter] = useState();
  const [show, setShow] = useState(true);
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

  useEffect(() => {
    axios
      .get(
        "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province",
        {
          headers: {
            "Content-Type": "application/json",
            Token: "fc0ea700-c65d-11ed-ab31-3eeb4194879e",
          },
        }
      )
      .then((res) => {
        let newArr = res.data.data
          .map((p) => ({
            name: p.NameExtension[0],
          }))
          .filter(
            (p) => p.name.toLowerCase().indexOf(searchP.toLowerCase()) !== -1
          );
        setLocationFilter(Array.from(newArr));
      });
  }, [searchP]);

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
        {show ? (
          <div className={cx("product-search_container")}>
            <ChatPupup />
            <div className={cx("product-search_filter-panel")}>
              <div className={cx("product-search_filter-status")}>
                <i
                  className={cx("fa-sharp fa-light fa-filter", "icon-filter")}
                ></i>
                <span className={cx("filter-text")}>SEARCH FILTER</span>
              </div>
              <div className={cx("product-search_category-filter")}>
                <div className={cx("category-header")}>By category</div>
                <div className={cx("category-body")}>
                  <div className={cx("checkbox-filter")}>
                    <input type="checkbox" className={cx("checkbox-check")} />
                    <span className={cx("checkbox-text")}>Bird</span>
                  </div>
                  <div className={cx("checkbox-filter")}>
                    <input type="checkbox" className={cx("checkbox-check")} />
                    <span className={cx("checkbox-text")}>Bird Foods</span>
                  </div>
                  <div className={cx("checkbox-filter")}>
                    <input type="checkbox" className={cx("checkbox-check")} />
                    <span className={cx("checkbox-text")}>Bird Medicines</span>
                  </div>
                  <div className={cx("checkbox-filter")}>
                    <input type="checkbox" className={cx("checkbox-check")} />
                    <span className={cx("checkbox-text")}>Bird Cages</span>
                  </div>
                  <div className={cx("checkbox-filter")}>
                    <input type="checkbox" className={cx("checkbox-check")} />
                    <span className={cx("checkbox-text")}>
                      Bird Accessories
                    </span>
                  </div>
                </div>
              </div>
              <div className={cx("product-search_price-range-filter")}>
                <div className={cx("price-header")}>Price Range</div>
                <div className={cx("price-edit")}>
                  <input
                    type="number"
                    className={cx("edit-min")}
                    maxLength="13"
                    placeholder="MIN"
                  />
                  <input
                    type="number"
                    className={cx("edit-max")}
                    maxLength="13"
                    placeholder="MAX"
                  />
                </div>
                <button className={cx("price-apply")}>APPLY</button>
              </div>
              <div className={cx("product-search_location-filter")}>
                <div className={cx("location-header")}>Shipped from</div>
                <div className={cx("location-body")}>
                  <div className={cx("search_location")}>
                    <input
                      type="text"
                      className={cx("form-input")}
                      value={searchP}
                      placeholder="Your address"
                      onChange={(e) => setSearchP(e.target.value)}
                      required
                    />
                    <button className={cx("search")} type="submit">
                      <i className={cx("fa-regular fa-magnifying-glass")}></i>
                    </button>
                  </div>
                  {locationFilter.map((location, index) => (
                    <div className={cx("checkbox-filter")} key={index}>
                      <input type="checkbox" className={cx("checkbox-check")} />
                      <span className={cx("checkbox-text")}>
                        {location.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={cx("product-search_content")}>
              <div className={cx("product-search_shop-related")}>
                <div className={cx("shop-related_header")}>
                  <span className={cx("shop-related_title")}>
                    Shop related to{" "}
                  </span>
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
                      <div className={cx("shop-item_nick-name")}>
                        {shop.name}
                      </div>
                      <div className={cx("shop-item_user-name")}>
                        {shop.nick_name}
                      </div>
                      <div className={cx("shop-item_follow-count")}>
                        <span className={cx("count-number")}>
                          {(() => {
                            let rs = "";
                            if (shop.followers >= 1000) {
                              const follower = shop.followers / 1000;
                              const rounded = Math.round((follower * 10) / 10);
                              return (rs += rounded + "k");
                            } else {
                              return (rs += shop.followers);
                            }
                          })()}
                        </span>{" "}
                        <span className={cx("count-text")}>Followers</span>
                      </div>
                    </div>
                    <div className={cx("shop-related_shop-statistic")}>
                      <div className={cx("seller-info-item")}>
                        <div className={cx("header")}>
                          <i className={cx("fa-light fa-box", "icon")}></i>
                          <span>{shop.products}</span>
                        </div>
                        <div className={cx("text")}>Products</div>
                      </div>
                      <div className={cx("seller-info-item")}>
                        <div className={cx("header")}>
                          <i className={cx("fa-light fa-star", "icon")}></i>
                          <span>{shop.rating}</span>
                        </div>
                        <div className={cx("text")}>Ratings</div>
                      </div>
                      <div className={cx("seller-info-item")}>
                        <div className={cx("header")}>
                          <i
                            className={cx("fa-light fa-message-dots", "icon")}
                          ></i>
                          <span>{shop.response_rate}%</span>
                        </div>
                        <div className={cx("text")}>Response Rate</div>
                      </div>
                      <div className={cx("seller-info-item")}>
                        <div className={cx("header")}>
                          <i
                            className={cx("fa-sharp fa-light fa-clock", "icon")}
                          ></i>
                          <span>{shop.response_time}</span>
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
                  <i
                    className={cx("fa-solid fa-chevron-left", "prev-icon")}
                  ></i>
                </button>
                {commentPageBtns.map(
                  (btn) =>
                    btn <= maxPage &&
                    btn >= minPage && (
                      <button
                        key={btn}
                        className={
                          cmtPage === btn ? cx("page-active") : cx("page")
                        }
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
        ) : (
          <div className={cx("product-search_no-product-found")}>
            <div className={cx("search-empty-result")}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/a60759ad1dabe909c46a817ecbf71878.png"
                alt="empty"
                className={cx("search-empty-result_img")}
              />
              <div className={cx("search-empty-result_title")}>
                No results found
              </div>
              <div className={cx("search-empty-result_hint")}>
                Try different or more general keywords
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductSearch;
