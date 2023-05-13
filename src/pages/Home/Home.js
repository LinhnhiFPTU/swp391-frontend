import Header from "~/layouts/components/Header/Header";
import birds from "~/assets/images/birds.png"
import birdfood from "~/assets/images/bird-foods.png"
import birdaccessories from "~/assets/images/bird-accessories.png"
import bird from "~/assets/images/bird.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      {/* -----------------HEADER----------------- */}
      <Header />
      {/* -----------------CATEGORIES----------------- */}
      <div className={cx('categories')}>
        <div className={cx('bird-cage_cat')}>
          <img src={birds} alt="Birds"></img>
          <p>Birds</p>
        </div>
        <div className={cx('bird-food_cat')}>
          <img src={birdfood} alt="Bird food"></img>
          <p>Bird Food</p>
        </div>
        <div className={cx('bird-clothes_cat')}>
          <img src={birdaccessories} alt="Bird accessories"></img>
          <p>Bird Accessories</p>
        </div>
      </div>

      {/* -----------------FLASH SALE----------------- */}
      <div className={cx('flash-sale')}>
        <p className={cx('flash-sale_title')}>Flash sale</p>
        <div className={cx('flash-sale_wrapper')}>
          <div className={cx('flash-sale_products')}>
            <div className={cx('flash-sale_product')}>
              <div className={cx('product-sale')}>
                <p>50%</p>
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('flash-sale_products')}>
            <div className={cx('flash-sale_product')}>
              <div className={cx('product-sale')}>
                <p>50%</p>
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('flash-sale_products')}>
            <div className={cx('flash-sale_product')}>
              <div className={cx('product-sale')}>
                <p>50%</p>
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('flash-sale_products')}>
            <div className={cx('flash-sale_product')}>
              <div className={cx('product-sale')}>
                <p>50%</p>
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('flash-sale_products')}>
            <div className={cx('flash-sale_product')}>
              <div className={cx('product-sale')}>
                <p>50%</p>
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------BEST SELLER----------------- */}
      <div className={cx('best-seller')}>
        <p className={cx('best-seller_title')}>Best seller</p>
        <div className={cx('best-seller_wrapper')}>
          <div className={cx('best-seller_products')}>
            <div className={cx('best-seller_product')}>
              <div className={cx('heart-icon')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('best-seller_products')}>
            <div className={cx('best-seller_product')}>
              <div className={cx('heart-icon')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('best-seller_products')}>
            <div className={cx('best-seller_product')}>
              <div className={cx('heart-icon')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('best-seller_products')}>
            <div className={cx('best-seller_product')}>
              <div className={cx('heart-icon')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
          <div className={cx('best-seller_products')}>
            <div className={cx('best-seller_product')}>
              <div className={cx('heart-icon')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <img src={bird} alt="Bird" />
              <div className={cx('product-name')}>
                <p>Bird</p>
              </div>
              <div className={cx('product-price')}>
                <span>216,27</span> $
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;