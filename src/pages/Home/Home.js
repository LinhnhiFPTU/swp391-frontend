import classNames from "classnames/bind";
// import { Link } from "react-router-dom";

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import Banner from "~/layouts/components/Banner/";
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
          <Banner/>
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
