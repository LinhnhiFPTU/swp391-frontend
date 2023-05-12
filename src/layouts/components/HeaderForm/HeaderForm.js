import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import logo from "~/assets/images/logo.png";
import styles from "./HeaderForm.module.scss";

const cx = classNames.bind(styles);

function HeaderForm() {
  return (
    <div className={cx("header")}>
        <Link to="/" className={cx("logo-link")}>
          <img src={logo} alt="Bird" className={cx('logo')}/>
          <p className={cx('text')}>BIRD TRADING</p>
        </Link>
    </div>
  );
}

export default HeaderForm;
