import classNames from "classnames/bind";
import styles from "./ModalFail.module.scss";
import { Link } from "react-router-dom";
import fail from "~/assets/images/fail.png";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function ModalFail({
  closeModal,
  message = "Message",
  subMessage = "Sub message",
  path = "/",
  contentBtn = "OKAY",
  isResend = true,
}) {
  const [resend, setResend] = useState(false);
  const [resendMsg, setResendMsg] = useState("");

  const imgStyles = {
    width: "130px",
    height: "130px",
    backgroundImage: `url(${fail})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: "40px",
  };

  useEffect(() => {
    if (resend) {
      axios
        .get("/api/v1/auths/registration/resend")
        .then((res) => {})
        .catch((e) => {});
    }
  }, [resend]);

  const handleResend = (e) => {
    e.preventDefault();
    setResend(true);
  };

  return (
    <div className={cx("overlay")}>
      <div onClick={(e) => e.stopPropagation()} className={cx("pop-up")}>
        <div className={cx("logo-success")}>
          <div className={cx("img-success")} style={imgStyles}></div>
        </div>
        <div className={cx("success-heading")}>
          <h1 className={cx("fail")}>{message}</h1>
        </div>
        <div className={cx("success-text")}>
          <p>{subMessage}</p>
        </div>
        <div className={cx("navigate")}>
          <Link className={cx("navigate-link")} to={path}>
            {contentBtn}
          </Link>
          {isResend && (
            <a className={cx("navigate-link")} onClick={handleResend}>
              {"Resend"}
            </a>
          )}
        </div>
        <div className={cx("success-text")}>
          <p>{resendMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalFail;
