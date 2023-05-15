import classNames from "classnames/bind";
import styles from "./SignUpModal.module.scss";

import { useNavigate } from "react-router-dom";
import success from "~/assets/images/success.png";

const cx = classNames.bind(styles);

function SignUpModal({ closeModal }) {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/login");
  };
  return (
    <div onClick={() => closeModal(false)} className={cx("overlay")}>
      <div onClick={(e) => e.stopPropagation()} className={cx("pop-up")}>
        <div className={cx("logo-success")}>
          <div className={cx('img-success')}></div>
        </div>
        <div className={cx("success-heading")}>
          <h1>Success!</h1>
        </div>
        <div className={cx("success-text")}>
          <p>Your account has been created successfully</p>
        </div>
        <div className={cx("navigate")}>
          <button className={cx("navigate-btn")} onClick={handleContinue}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
