import classNames from "classnames/bind";

import HeaderForm from "~/layouts/components/HeaderForm";
import styles from "./Seller.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Seller() {
  return (
    <>
      <HeaderForm text="Seller Centre" />
      <div className={cx("seller_wrapper")}>
        <div className={cx("seller_container")}>
          <div className={cx("seller-welcome")}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/seo-and-development-6/155/vector_290_21-256.png"
              alt="welcome-img"
              className={cx("welcome-img")}
            />
            <div className={cx("header")}>
              Welcome to Bird Trading Platform!
            </div>
            <div className={cx("text")}>
              To register to sell on the Bird Trading Platform, you need to
              provide some basic information.
            </div>
            <Link to="register" className={cx("register-link")}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seller;
