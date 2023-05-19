import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import Banner from "~/layouts/components/Banner/";
import birds from "~/assets/images/birds.png";
import birdFood from "~/assets/images/bird-foods.png";
import birdAccessories from "~/assets/images/bird-accessories.png";
import birdCage from "~/assets/images/bird-cage.png";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
const categories = [
  {
    image: birds,
    title: "BIRDS",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
  {
    image: birdFood,
    title: "BIRD FOODS",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
  {
    image: birdCage,
    title: "BIRD CAGE",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
  {
    image: birdAccessories,
    title: "BIRD ACCESSORIES",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    to: "",
  },
];
function Home() {
  return (
    <>
      {/* -----------------HEADER----------------- */}
      <Header />

      <div className={cx("container")}>
        <div className={cx("content")}>
          {/* -----------------BANNER----------------- */}
          <Banner />
          {/* -----------------CATEGORIES----------------- */}
          <div className={cx("categories-heading")}>
            <i className={cx("cate-icon", "fa-solid fa-bars")}></i>
            <span className={cx("cate-text")}>Categories</span>
          </div>
          <div className={cx("categories")}>
            {categories.map((category, index) => (
              <Link to={category.to} className={cx("category-item")} key={index}>
                <div className={cx("cate-img")}>
                  <img src={category.image} alt="cate-img" className={cx("image")} />
                </div>
                <div className={cx("cate-text-after")}>
                  <h3 className={cx("cate-text-head")}>{category.title}</h3>
                  <p className={cx("cate-text-sub")}>
                    {category.subTitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* -----------------FLASH SALE----------------- */}
          
          {/* -----------------BEST SELLER----------------- */}
          {/* -----------------SHOP TRENDING----------------- */}
          
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
