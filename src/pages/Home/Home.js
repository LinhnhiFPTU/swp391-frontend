import classNames from "classnames/bind";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";

import banner from "~/assets/images/banner.jpg";
import birds from "~/assets/images/birds.png";
import birdfood from "~/assets/images/bird-foods.png";
import birdaccessories from "~/assets/images/bird-accessories.png";
// import bird from "~/assets/images/bird.png";

import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      {/* -----------------HEADER----------------- */}
      <Header />

      <div className={cx("container")}>
        <div className={cx("content")}>
          {/* -----------------BANNER----------------- */}
          <div className={cx("banner")}>
            <img src={banner} alt="banner"></img>
            <div className={cx("banner-content")}>
              <h1 className={cx("content-text")}>Keep Your Pet Safe</h1>
              <Link to="/shop" className={cx("content-button")}>
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* -----------------CATEGORIES----------------- */}
          <div className={cx("categories")}>
            <div className={cx("bird-cage_cat")}>
              <img src={birds} alt="Birds"></img>
              <p>Birds</p>
            </div>
            <div className={cx("bird-food_cat")}>
              <img src={birdfood} alt="Bird food"></img>
              <p>Bird Food</p>
            </div>
            <div className={cx("bird-clothes_cat")}>
              <img src={birdaccessories} alt="Bird accessories"></img>
              <p>Bird Accessories</p>
            </div>
          </div>

          {/* -----------------FLASH SALE----------------- */}
          {/* <div className={cx("flash-sale")}>
            <p className={cx("flash-sale_title")}>Flash sale</p>
            <div className={cx("flash-sale_wrapper")}>
              <div className={cx("flash-sale_products")}>
                <div className={cx("flash-sale_product")}>
                  <div className={cx("product-sale")}>
                    <p>50%</p>
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("flash-sale_products")}>
                <div className={cx("flash-sale_product")}>
                  <div className={cx("product-sale")}>
                    <p>50%</p>
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("flash-sale_products")}>
                <div className={cx("flash-sale_product")}>
                  <div className={cx("product-sale")}>
                    <p>50%</p>
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("flash-sale_products")}>
                <div className={cx("flash-sale_product")}>
                  <div className={cx("product-sale")}>
                    <p>50%</p>
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("flash-sale_products")}>
                <div className={cx("flash-sale_product")}>
                  <div className={cx("product-sale")}>
                    <p>50%</p>
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* -----------------BEST SELLER----------------- */}
          {/* <div className={cx("best-seller")}>
            <p className={cx("best-seller_title")}>Best seller</p>
            <div className={cx("best-seller_wrapper")}>
              <div className={cx("best-seller_products")}>
                <div className={cx("best-seller_product")}>
                  <div className={cx("heart-icon")}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("best-seller_products")}>
                <div className={cx("best-seller_product")}>
                  <div className={cx("heart-icon")}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("best-seller_products")}>
                <div className={cx("best-seller_product")}>
                  <div className={cx("heart-icon")}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("best-seller_products")}>
                <div className={cx("best-seller_product")}>
                  <div className={cx("heart-icon")}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
              <div className={cx("best-seller_products")}>
                <div className={cx("best-seller_product")}>
                  <div className={cx("heart-icon")}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <img src={bird} alt="Bird" />
                  <div className={cx("product-name")}>
                    <p>Bird</p>
                  </div>
                  <div className={cx("product-price")}>
                    <span>216,27</span> $
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* -----------------SHOP TRENDING----------------- */}
          {/* -----------------FOOTER----------------- */}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
