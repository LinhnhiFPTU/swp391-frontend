import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import styles from "./Verify.module.scss";

const cx = classNames.bind(styles);

function Verify() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/reset");
  };

  return (
    <>
      <div className={cx("header")}>
        <HeaderForm />
      </div>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <form>
            <div className={cx("head-text")}>
              <p>Verification</p>
            </div>
            <div className={cx("header-subText")}>
              <p>
                Copy the verification code in{" "}
                <span className={cx("hight-light")}>your email</span> to verify
                this account recovery.
              </p>
            </div>
            <div className={cx("info")}>
              <div className={cx("verify-input")}>
                <input type="text" minLength="1" autoFocus />
                <input type="text" minLength="1" />
                <input type="text" minLength="1" />
                <input type="text" minLength="1" />
                <input type="text" minLength="1" />
                <input type="text" minLength="1" />
              </div>

              <div className={cx("btn-submit")}>
                <button onClick={handleSubmit}>
                  Verification
                </button>
              </div>
              <div className={cx("choices")}>
                <div className={cx("re-send")}>
                  <p>
                    Didn't get the code?{" "}
                    <span>
                      <Link to="">Resend Email</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </>
  );
}

export default Verify;
