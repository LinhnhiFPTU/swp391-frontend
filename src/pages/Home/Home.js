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
          {/* <div className={cx("categories")}>
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
          </div> */}

          {/* -----------------FLASH SALE----------------- */}
          {/* -----------------BEST SELLER----------------- */}
          {/* -----------------SHOP TRENDING----------------- */}
          {/* -----------------FOOTER----------------- */}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
