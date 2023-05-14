import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import gmail from "~/assets/images/gmail.png";
import github from "~/assets/images/github.png";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-section")}>
        <div className={cx("footer-item")}>
          <p className={cx('main-title')}>Bird Trading Platform</p>
        </div>
        <div className={cx("footer-item")}>
          <p className={cx('title')}>SHOP</p>
          <div className={cx('footer-item-text')}>
            <Link to="/bird" className={cx("link")}>
              <p>Bird</p>
            </Link>
            <Link to="/bird-food" className={cx("link")}>
              <p>Bird food</p>
            </Link>
            <Link to="/bird-accessories" className={cx("link")}>
              <p >Bird accessories</p>
            </Link>
            <Link to="/login" className={cx("link")}>
              <p >Login</p>
            </Link>
            <Link to="/signup" className={cx("link")}>
              <p >Sign up</p>
            </Link>
          </div>
        </div>

        <div className={cx("footer-item")}>
          <p className={cx('title')}>ABOUT US</p>
          <div className={cx("intro-project")}>
            <p className={cx("text-about")}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className={cx("footer-item")}>
          <p className={cx('title')}>FOLLOW US</p>
          <div className={cx('footer-item-text')}>
            <div className={cx("social-media-mail")}>
              <img src={gmail} alt="gmail" className={cx("logo")}></img>
              <p className={cx("text")}>swp391.birdtrading@gmail.com</p>
            </div>
            <div className={cx("social-media-github")}>
              <img src={github} alt="github" className={cx("logo")}></img>
              <a href="/github" className={cx("link")}>
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className={cx("footer-section-below")}>
        <div className={cx("copy-right")}>
          <p className={cx("copy-right-text")}>
            @{new Date().getFullYear()} Bird Trading Platform. All right
            reserved.
          </p>
        </div>
        <div className={cx("below-link")}>
          <Link to="" className={cx("text-link-below")}>Term of use</Link>
          <Link to="" className={cx("text-link-below")}>Privacy policy</Link>
          <Link to="" className={cx("text-link-below")}>Security</Link>
          <Link to="" className={cx("text-link-below")}>Cookies</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
