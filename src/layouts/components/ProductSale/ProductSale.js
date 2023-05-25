import classNames from "classnames/bind";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import product from "~/assets/images/bird-cage.png";
import styles from "./ProductSale.module.scss";

const cx = classNames.bind(styles);

function ProductSale() {
  return (
    <>
      <Header />
      <div className={cx("product-wrapper")}>
        <div className={cx("product-container")}>
          <div className={cx("product-main")}>
            {/*------Product image------*/}
            <div className={cx("product-img")}>
              <img src={product} alt="product-img" />
            </div>
            <div className={cx("product-content")}>
              {/*------Product Name------*/}
              <div className={cx("product-name")}>
                <span className={cx("name")}>
                  Prevue Pet Products Square Roof Parrot Cage, Standing
                  Birdcage, Black
                </span>
              </div>
              {/*------Product Status------*/}
              <div className={cx("product-status")}>
                <div className={cx("product-status-left")}>
                  <div className={cx("product-rating")}>
                    <span className={cx("rating-text")}>4.8</span>
                    <div className={cx("rating-star")}>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                      <i className={cx("fa-solid fa-star", "rate_icon")}></i>
                    </div>
                  </div>
                  <div className={cx("rating-status")}>
                    <span className={cx("rating-number")}>8,3k</span>
                    <span className={cx("rate-status")}>Ratings</span>
                  </div>
                  <div className={cx("selling-status")}>
                    <span className={cx("sold-number")}>49,8k</span>
                    <span className={cx("sold-status")}>Sold</span>
                  </div>
                </div>
                <div className={cx("product-status-right")}>
                  <button className={cx("report-btn")}>Report</button>
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
                    <span className={cx("countdown-minute")}>60</span>
                    <span className={cx("countdown-second")}>59</span>
                  </div>
                </div>
              </div>
              {/*------Product Price------*/}
              <div className={cx("product-price")}>
                <div className={cx("price-real")}>$300</div>
                <div className={cx("price-sale")}>$1000</div>
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
                  <span className={cx("sub-content")}>Bird cage</span>
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
                  <button className={cx("minus")}>
                    <i className={cx("fa-solid fa-minus", "minus-icon")}></i>
                  </button>
                  <input type="text" className={cx("text")} value="1" />
                  <button className={cx("plus")}>
                    <i className={cx("fa-solid fa-plus", "plus-icon")}></i>
                  </button>
                </div>
              </div>
              {/*------Add to cart & Buy now------*/}
              <div className={cx("product-buy")}>
                <button className={cx("add")}>
                  <i className={cx("fa-sharp fa-light fa-cart-plus")}></i>
                  <span>Add To Cart</span>
                </button>
                <button className={cx("buy")}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductSale;
