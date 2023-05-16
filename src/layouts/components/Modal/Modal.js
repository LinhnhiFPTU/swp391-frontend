import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { Link } from "react-router-dom";
import success from '~/assets/images/success.png'

const cx = classNames.bind(styles);

function Modal({ closeModal, message = "Messaage", subMessage = "Sub messaage", path="/", contentBtn = "OKAY"}) {
  const imgStyles = {
    width: "130px",
    height: "130px",
    backgroundImage: `url(${success})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: "40px",
  };
  return (
    <div onClick={() => closeModal(false)} className={cx("overlay")}>
      <div onClick={(e) => e.stopPropagation()} className={cx("pop-up")}>
        <div className={cx("logo-success")}>
          <div className={cx("img-success")} style={imgStyles}></div>
        </div>
        <div className={cx("success-heading")}>
          <h1>{message}</h1>
        </div>
        <div className={cx("success-text")}>
          <p>{subMessage}</p>
        </div>
        <div className={cx("navigate")}>
          <Link className={cx("navigate-link")} to={path}>
            {contentBtn}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
