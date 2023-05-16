import classNames from "classnames/bind";
import styles from "./EmailPopup.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function EmailPopup({
  closeModal,
  email = "your email"
}) {

  return (
    <div onClick={() => closeModal(false)} className={cx("overlay")}>
      <div onClick={(e) => e.stopPropagation()} className={cx("pop-up")}>
        <div className={cx("logo-success")}>
          <div className={cx("img-success")}></div>
        </div>
        <div className={cx("success-heading")}>
          <h1>Verify email</h1>
        </div>
        <div className={cx("success-text")}>
          <p>Register successfully, please check <span className={cx('email')}>{email}</span> to verify.</p>
        </div>
        <div className={cx("navigate")}>
          <Link className={cx("navigate-link")} to="/">
            OKAY
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;
