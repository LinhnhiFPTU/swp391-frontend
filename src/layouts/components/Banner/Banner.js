import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

import banner from "~/assets/images/banner.jpg";
import banner1 from "~/assets/images/banner1.jpg";
import banner2 from "~/assets/images/banner2.jpg";
import banner3 from "~/assets/images/banner3.jpg";
import banner4 from "~/assets/images/banner4.jpg";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

const birds = [
  {
    url: banner,
    title: "Keep Your Pet Safe",
  },
  {
    url: banner1,
    title: "Keep Your Pet Safe 1",
  },
  {
    url: banner2,
    title: "Keep Your Pet Safe 2",
  },
  {
    url: banner3,
    title: "Keep Your Pet Safe 3",
  },
  {
    url: banner4,
    title: "Keep Your Pet Safe 4",
  },
];

function Banner() {
  return (
    <Fade
      duration={5000}
      transitionDuration={1000}
      arrows={false}
      autoplay={true}
      pauseOnHover={true}
      
    >
      {birds.map((bird, index) => (
        <div className={cx("banner")} key={index}>
          <img src={bird.url} alt="banner"/>
          <div className={cx("banner-content")}>
            <h1 className={cx("content-text")}>{bird.title}</h1>
            <Link to="/shop" className={cx("content-button")}>
              SHOP NOW
            </Link>
          </div>
        </div>
      ))}
    </Fade>
  );
}

export default Banner;
