import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import Report from "./Report";
import Toast from "./Toast";
import Comment from "./Comment";
import ProductImage from "./ProductImage";
import StarRating from "~/layouts/components/StarRating";

import avatar from "~/assets/images/user-avatar.png";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);
const filterBtns = ["All", "5 Star", "4 Star", "3 Star", "2 Star", "1 Star"];
const commentRating = [1, 2, 3, 4, 5];
const commentPageBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const product = {
  id: 0,
  name: "Prevue Pet Products Square Roof Parrot Cage, Standing Birdcage, Black",
  description: `👩 MÔ TẢ SẢN PHẨM 

  - Áo thun nam nữ oversize sử dụng chất vải cotton 65/35 co giãn 4 chiều. Là loại vải có đặc điểm mềm mịn, độ co giãn cao, khả năng thấm hút tốt và được dệt hoàn toàn từ sợi cây bông tự nhiên. Chất vải cotton cực kỳ thân thiện với làn da.
  
  - Áo thun nam nữ form rộng cổ tròn thoải mái
  
  - Áo phông unisex form rộng dễ phối đồ. Bạn có thể phối với quần jean, chân váy, … kết hợp với một đôi sneaker cho bạn tự tin xuống phố
  
  
  
  📣 HƯỚNG DẪN BẢO QUẢN ÁO PHÔNG NAM NỮ OVERSIZE VENDER Shop
  
  - Lộn trái áo thun nam nữ tay ngắn khi giặt, không giặt chung áo thun unisex trắng với quần áo tối màu. 
  
  - Sử dụng xà phòng trung tính, không sử dụng xà phòng có chất tẩy mạnh cho áo thun nam nữ oversize.
  
  - Không sử dụng chất tẩy, không ngâm áo phông unisex. 
  
  - Phơi ngang, không treo móc khi áo thun unisex ướt, không phơi trực tiếp dưới ánh nắng mặt trời. 
  
  
  
  ️🎯 Giao hàng đúng size, lỗi 1 đổi 1 
  
  ️🎯 Giao COD toàn quốc 
  
  ️🎯 Hỗ trợ đổi size và đổi màu trong vòng 7 ngày kể từ khi nhận hàng, sản phẩm đổi phải còn nguyên tem mac và chưa qua sử dụng.
  
  ⚠️ LƯU Ý: Khi mở sản phẩm, khách yêu vui lòng quay lại video quá trình mở sản phẩm để được đảm bảo 100% đổi lại sản phẩm mới nếu Áo thun VENDER giao bị lỗi.
  
  `,
  price: 1000,
  sold: 111200,
  available: 10,
  rating: 3.7,
  totalRatings: 3000,
  brand: "No brand",
  categoryGroup: "Bird Cage",
  shop: {
    avatar: avatar,
    name: "Shop name",
    active: "Active 11 minutes ago",
    ratings: "281000",
    products: "12500",
    responseRate: "95",
    responseTime: "within hours",
    followers: "62150",
  },
  productImages: [
    "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71+4X8orK7L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81haWHiuQ4L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71sXkl4vt8L._AC_SL1500_.jpg",
  ],
  productVideo:
    "https://play-aka.vod.shopee.com/c3/98934353/103/A3oxOHhUAPiMlIUMEUkCACY.mp4",
  attachWith: [
    {
      id: 0,
      image: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      name: "Prevue Pet Products Square Roof Parrot Cage, Standing Birdcage, Black",
      price: 1000,
    },
  ],
  feedbacks: [
    {
      user: {
        avatar: avatar,
        name: "User name",
        rating: 1,
      },
      date: "2023-05-26 16:00",
      description:
        "Đúng sai đúng màu đủ nhãn mác, đóng gói cẩn thận Áo xinh lắm ạ, chất mềm sờ mát Mình m63 52kg mặc size L qua hông vừa đẹp luôn",
      feedbackImages: [
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-lwwgi4dwh0gv93.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-k9hh34dwh0gv9f.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-5n4f34dwh0gv08.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-gtvew5dwh0gv0d.webp",
      ],
      feedbackVideo:
        "https://play-aka.vod.shopee.com/c3/98934353/103/A3oxOHhUAPiMlIUMEUkCACY.mp4",
      shopResponse:
        "Cảm ơn bạn đã tin tưởng và lựa chọn mua hàng tại shop. Hãy ghé shop thường xuyên để trải nghiệm những sản phẩm và dịch vụ tuyệt vời nhất nhé. Nếu có vấn đề gì chưa hài lòng hãy nhắn lại ngay cho shop để được hỗ trợ và xử lí nhanh nhất ạ. Chúng tôi luôn hy vọng được tiếp tục đồng hành cùng bạn trong tương lai.",
    },
    {
      user: {
        avatar: avatar,
        name: "User name",
        rating: 1,
      },
      date: "2023-05-26 16:00",
      description:
        "Đúng sai đúng màu đủ nhãn mác, đóng gói cẩn thận Áo xinh lắm ạ, chất mềm sờ mát Mình m63 52kg mặc size L qua hông vừa đẹp luôn",
      feedbackImages: [
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-lwwgi4dwh0gv93.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-k9hh34dwh0gv9f.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-5n4f34dwh0gv08.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-gtvew5dwh0gv0d.webp",
      ],
      feedbackVideo:
        "https://play-aka.vod.shopee.com/c3/98934353/103/A3oxOHhUAPiMlIUMEUkCACY.mp4",
      shopResponse: "",
    },
    {
      user: {
        avatar: avatar,
        name: "User name",
        rating: 1,
      },
      date: "2023-05-26 16:00",
      description:
        "Đúng sai đúng màu đủ nhãn mác, đóng gói cẩn thận Áo xinh lắm ạ, chất mềm sờ mát Mình m63 52kg mặc size L qua hông vừa đẹp luôn",
      feedbackImages: [
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-lwwgi4dwh0gv93.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-k9hh34dwh0gv9f.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-5n4f34dwh0gv08.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-gtvew5dwh0gv0d.webp",
      ],
      feedbackVideo:
        "https://play-aka.vod.shopee.com/c3/98934353/103/A3oxOHhUAPiMlIUMEUkCACY.mp4",
      shopResponse:
        "Cảm ơn bạn đã tin tưởng và lựa chọn mua hàng tại shop. Hãy ghé shop thường xuyên để trải nghiệm những sản phẩm và dịch vụ tuyệt vời nhất nhé. Nếu có vấn đề gì chưa hài lòng hãy nhắn lại ngay cho shop để được hỗ trợ và xử lí nhanh nhất ạ. Chúng tôi luôn hy vọng được tiếp tục đồng hành cùng bạn trong tương lai.",
    },
    {
      user: {
        avatar: avatar,
        name: "User name",
        rating: 1,
      },
      date: "2023-05-26 16:00",
      description:
        "Đúng sai đúng màu đủ nhãn mác, đóng gói cẩn thận Áo xinh lắm ạ, chất mềm sờ mát Mình m63 52kg mặc size L qua hông vừa đẹp luôn",
      feedbackImages: [
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-lwwgi4dwh0gv93.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-k9hh34dwh0gv9f.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-5n4f34dwh0gv08.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-gtvew5dwh0gv0d.webp",
      ],
      feedbackVideo:
        "https://play-aka.vod.shopee.com/c3/98934353/103/A3oxOHhUAPiMlIUMEUkCACY.mp4",
      shopResponse: "",
    },
    {
      user: {
        avatar: avatar,
        name: "User name",
        rating: 1,
      },
      date: "2023-05-26 16:00",
      description:
        "Đúng sai đúng màu đủ nhãn mác, đóng gói cẩn thận Áo xinh lắm ạ, chất mềm sờ mát Mình m63 52kg mặc size L qua hông vừa đẹp luôn",
      feedbackImages: [
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-lwwgi4dwh0gv93.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-k9hh34dwh0gv9f.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-5n4f34dwh0gv08.webp",
        "https://down-ws-vn.img.susercontent.com/vn-11134103-22090-gtvew5dwh0gv0d.webp",
      ],
      feedbackVideo:
        "https://play-aka.vod.shopee.com/c3/98934353/103/A3oxOHhUAPiMlIUMEUkCACY.mp4",
      shopResponse:
        "Cảm ơn bạn đã tin tưởng và lựa chọn mua hàng tại shop. Hãy ghé shop thường xuyên để trải nghiệm những sản phẩm và dịch vụ tuyệt vời nhất nhé. Nếu có vấn đề gì chưa hài lòng hãy nhắn lại ngay cho shop để được hỗ trợ và xử lí nhanh nhất ạ. Chúng tôi luôn hy vọng được tiếp tục đồng hành cùng bạn trong tương lai.",
    },
  ],
};

function Product() {
  const [type, setType] = useState("All");
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [cmtPage, setCmtPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);
  const [minPage, setMinPage] = useState(1);
  const [openReport, setOpenReport] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [valueQuantity, setValueQuantity] = useState(1);
  const timeID = useRef();
  const location = useLocation();

  useEffect(() => {
    document.title = `${product.name} | Bird Trading Platform`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setOpenToast(false);
    }, 3500);

    return () => {
      clearTimeout(timeId);
    };
  }, [openToast]);

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

  const handleSkipPage = (e) => {
    e.preventDefault();
    let page = parseInt(e.target.value);
    let maxFake = maxPage;
    let minFake = minPage;
    if (page > commentPageBtns.length) {
      e.target.value = "";
      return;
    }
    if (page > maxFake) {
      while (page > maxFake) {
        let max_length = commentPageBtns.length;
        if (max_length - maxFake >= 3) {
          maxFake = maxFake + 3;
          minFake = minFake + 3;
        } else {
          let distance = max_length - maxFake;
          maxFake = maxFake + distance;
          minFake = minFake + distance;
        }
      }
      setMinPage(minFake);
      setMaxPage(maxFake);
    } else if (page < minFake) {
      while (page < minFake) {
        let min = commentPageBtns[0];
        if (minFake - min >= 3) {
          maxFake = maxFake - 3;
          minFake = minFake - 3;
        } else {
          let distance = minFake - min;
          maxFake = maxFake - distance;
          minFake = minFake - distance;
        }
      }
      setMinPage(minFake);
      setMaxPage(maxFake);
    }
    e.target.value = "";
    setCmtPage(page);
  };

  const handleDescrease = () => {
    if (valueQuantity === 1) {
      return;
    }
    setValueQuantity(valueQuantity - 1);
  };

  const handleIncrease = () => {
    if (valueQuantity === product.available) {
      return;
    }
    setValueQuantity(valueQuantity + 1);
  };
  return (
    <>
      {openReport && <Report closeReport={setOpenReport} />}
      {openToast && <Toast />}
      <Header />
      <div className={cx("product-wrapper")}>
        <div className={cx("product-container")}>
          {/*------Product main------*/}
          <div className={cx("product-main")}>
            {/*------Product image------*/}
            <ProductImage
              previewImage={product.productImages}
              previewVideo={product.productVideo}
              quantitySoldout={product.available}
            />
            <div className={cx("product-content")}>
              {/*------Product Name------*/}
              <div className={cx("product-name")}>
                <span className={cx("name")}>{product.name}</span>
              </div>
              {/*------Product Status------*/}
              <div className={cx("product-status")}>
                <div className={cx("product-status-left")}>
                  <div className={cx("product-rating")}>
                    <span className={cx("rating-text")}>{product.rating}</span>
                    <StarRating
                      rating={product.rating}
                      font={1.6}
                      color={`var(--flash_sale-primary)`}
                    />
                  </div>
                  <div className={cx("rating-status")}>
                    <span className={cx("rating-number")}>
                      {(() => {
                        let rs = "";
                        if (product.totalRatings >= 1000) {
                          const rating = product.totalRatings / 1000;
                          const rounded = Math.round(rating * 10) / 10;
                          return (rs += rounded + "k");
                        } else {
                          return (rs += product.totalRatings);
                        }
                      })()}
                    </span>
                    <span className={cx("rate-status")}>Ratings</span>
                  </div>
                  <div className={cx("selling-status")}>
                    <span className={cx("sold-number")}>
                      {(() => {
                        let rs = "";
                        if (product.sold >= 1000) {
                          const sold = product.sold / 1000;
                          const rounded = Math.round(sold * 10) / 10;
                          return (rs += rounded + "k");
                        } else {
                          return (rs += product.sold);
                        }
                      })()}
                    </span>
                    <span className={cx("sold-status")}>Sold</span>
                  </div>
                </div>
                <div className={cx("product-status-right")}>
                  <button
                    className={cx("report-btn")}
                    onClick={() => setOpenReport(true)}
                  >
                    Report
                  </button>
                </div>
              </div>
              {/*------Product Flash Sale------*/}
              <div className={cx("product-flash_sale")}>
                <div className={cx("flash_sale-title")}>
                  <span className={cx("flash_sale-text1")}>
                    F<i className={cx("fa-solid fa-bolt-lightning")}></i>
                    ASH <span className={cx("flash_sale-text2")}>SALE</span>
                  </span>
                </div>
                <div className={cx("flash_sale-countdown")}>
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
              {/*------Product Price------*/}
              <div className={cx("product-price")}>
                <div className={cx("price-real")}>${product.price}</div>
                <div className={cx("price-sale")}>${product.price}</div>
                <div className={cx("sale-percent")}>20% OFF</div>
              </div>
              {/*------Product Description------*/}
              <div className={cx("product-description")}>
                <div className={cx("available")}>
                  <span className={cx("content")}>Availability</span>
                  <span className={cx("sub-content")}>In stock</span>
                </div>
                <div className={cx("category")}>
                  <span className={cx("content")}>Category</span>
                  <span className={cx("sub-content")}>
                    {product.categoryGroup}
                  </span>
                </div>
                <div className={cx("shipping")}>
                  <span className={cx("content")}>Shipping</span>
                  <div className={cx("shipping-options")}>
                    <div className={cx("shipping-to")}>
                      <i className={cx("fa-light fa-truck", "truck-icon")}></i>
                      <span className={cx("text")}>Shipping To</span>
                      <span className={cx("shipping-content")}>
                        Vinhome Grand Park
                      </span>
                    </div>
                    <div className={cx("shipping-fee")}>
                      <span className={cx("text")}>Shipping Fee</span>
                      <span className={cx("shipping-content")}>35.000</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*------Product Quantity------*/}
              <div className={cx("product-quantity")}>
                <span className={cx("quantity-text")}>Quantity</span>
                <div className={cx("quantity")}>
                  <button className={cx("minus")} onClick={handleDescrease}>
                    <i className={cx("fa-solid fa-minus", "minus-icon")}></i>
                  </button>
                  <input
                    type="number"
                    className={cx("text")}
                    value={valueQuantity}
                    onChange={(e) => {
                      if (e.target.value > product.available) {
                        setValueQuantity(product.available);
                      } else if (e.target.value < product.available) {
                        setValueQuantity(1);
                      }
                    }}
                  />
                  <button className={cx("plus")} onClick={handleIncrease}>
                    <i className={cx("fa-solid fa-plus", "plus-icon")}></i>
                  </button>
                </div>
                <div className={cx("quantity-remaining")}>
                  <span className={cx("remaining-quantity")}>
                    {product.available}
                  </span>
                  <span className={cx("remaining-text")}>
                    {" "}
                    pieces available
                  </span>
                </div>
              </div>
              {/*------Add to cart & Buy now------*/}
              <div className={cx("product-buy")}>
                <button
                  className={cx("add")}
                  disabled={product.available === 0}
                  onClick={() => setOpenToast(true)}
                >
                  <i className={cx("fa-sharp fa-light fa-cart-plus")}></i>
                  <span>Add To Cart</span>
                </button>
                <button
                  className={cx("buy")}
                  disabled={product.available === 0}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/*------Product bundled------*/}
          <div className={cx("product-bundled")}>
            <div className={cx("bundled-title")}>
              <span className={cx("title")}>Bundled Products</span>
            </div>
            <div className={cx("bundled-list")}>
              {product.attachWith.map((bundleProduct, index) => (
                <Link to="" className={cx("bundled-product")} key={index}>
                  <img
                    src={bundleProduct.image}
                    alt="bundled-product-img"
                    className={cx("product-img")}
                  />

                  <div className={cx("product-content")}>
                    <div className={cx("product-name")}>
                      {bundleProduct.name}
                    </div>
                    <div className={cx("product-price")}>
                      <span className={cx("price")}>
                        ${bundleProduct.price}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/*------Shop related------*/}
          <div className={cx("shop-related")}>
            <div className={cx("shop-left")}>
              <div className={cx("shop-avatar")}>
                <img src={product.shop.avatar} alt="shop-avatar" />
              </div>
              <div className={cx("shop-info")}>
                <div className={cx("shop-name")}>
                  <span className={cx("name")}>{product.shop.name}</span>
                </div>
                <div className={cx("shop-active")}>
                  <span className={cx("time-active")}>
                    {product.shop.active}
                  </span>
                </div>
                <div className={cx("shop-contact")}>
                  <button className={cx("chat")}>
                    <i className={cx("fa-solid fa-messages", "icon-chat")}></i>
                    <span className={cx("chat-text")}>Chat Now</span>
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
            <div className={cx("shop-right")}>
              <div className={cx("rating", "container")}>
                <span className={cx("title")}>Ratings</span>
                <span className={cx("quantity")}>
                  {(() => {
                    let rs = "";
                    if (product.shop.ratings >= 1000) {
                      const rating = product.shop.ratings / 1000;
                      const rounded = Math.round(rating * 10) / 10;
                      return (rs += rounded + "k");
                    } else {
                      return (rs += product.shop.ratings);
                    }
                  })()}
                </span>
              </div>
              <div className={cx("response-rate", "container")}>
                <span className={cx("title")}>Response Rate</span>
                <span className={cx("quantity")}>
                  {product.shop.responseRate}%
                </span>
              </div>
              <div className={cx("follower", "container")}>
                <span className={cx("title")}>Followers</span>
                <span className={cx("quantity")}>
                  {(() => {
                    let rs = "";
                    if (product.shop.followers >= 1000) {
                      const follow = product.shop.followers / 1000;
                      const rounded = Math.round(follow * 10) / 10;
                      return (rs += rounded + "k");
                    } else {
                      return (rs += product.shop.followers);
                    }
                  })()}
                </span>
              </div>
              <div className={cx("products", "container")}>
                <span className={cx("title")}>Products</span>
                <span className={cx("quantity")}>
                  {(() => {
                    let rs = "";
                    if (product.shop.products >= 1000) {
                      const pro = product.shop.products / 1000;
                      const rounded = Math.round(pro * 10) / 10;
                      return (rs += rounded + "k");
                    } else {
                      return (rs += product.shop.products);
                    }
                  })()}
                </span>
              </div>
              <div className={cx("response-time", "container")}>
                <span className={cx("title")}>Response Time</span>
                <span className={cx("quantity")}>
                  {product.shop.responseTime}
                </span>
              </div>
            </div>
          </div>
          {/*------Product detail------*/}
          <div className={cx("product-detail")}>
            <div className={cx("product-specifications")}>
              <div className={cx("specification-title")}>
                Product Specifications
              </div>
              <div className={cx("specification-content")}>
                <div className={cx("category", "container")}>
                  <span className={cx("title")}>Category</span>
                  <span className={cx("content")}>{product.categoryGroup}</span>
                </div>
                <div className={cx("brand", "container")}>
                  <span className={cx("title")}>Brand</span>
                  <span className={cx("content")}>{product.brand}</span>
                </div>
                <div className={cx("quantity_available", "container")}>
                  <span className={cx("title")}>Stock</span>
                  <span className={cx("content")}>{product.available}</span>
                </div>
                <div className={cx("ship-from", "container")}>
                  <span className={cx("title")}>Shops From</span>
                  <span className={cx("content")}>HaNoi</span>
                </div>
              </div>
            </div>
            <div className={cx("product-description")}>
              <div className={cx("description-title")}>Product Description</div>
              <div className={cx("description-content")}>
                <pre className={cx("text")}>
                  {`
                    ${product.description}
                  `}
                </pre>
              </div>
            </div>
          </div>
          {/*------Product rating------*/}
          <div className={cx("product-ratings")}>
            <div className={cx("product-rating-title")}>
              <span className={cx("title")}>Product Ratings</span>
            </div>
            <div className={cx("product-rating-container")}>
              <div className={cx("rating-overview")}>
                <div className={cx("rating-text")}>
                  <span className={cx("rating-quantity")}>
                    {product.rating}
                  </span>
                  <span className={cx("rating-total")}> out of 5</span>
                </div>
                <StarRating
                  rating={product.rating}
                  font={2}
                  color={`var(--flash_sale-primary)`}
                />
              </div>
              <div className={cx("filter-rating")}>
                {filterBtns.map((btn, index) => (
                  <button
                    className={
                      type === btn
                        ? cx("filter-rating-btn-active")
                        : cx("filter-rating-btn")
                    }
                    key={index}
                    onClick={() => setType(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
            {product.feedbacks.map((feedback, index) => (
              <Comment
                feedback={feedback}
                commentRating={commentRating}
                key={index}
              />
            ))}
            <div className={cx("more-comment")}>
              <input
                className={cx("input-page")}
                type="number"
                onKeyDown={(e) => e.keyCode === 13 && handleSkipPage(e)}
              />
              <button className={cx("prev")} onClick={handlePrevCmtPage}>
                <i className={cx("fa-solid fa-chevron-left", "prev-icon")}></i>
              </button>
              {commentPageBtns.map(
                (btn, index) =>
                  btn <= maxPage &&
                  btn >= minPage && (
                    <button
                      key={index}
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
      </div>
      <Footer />
    </>
  );
}

export default Product;
