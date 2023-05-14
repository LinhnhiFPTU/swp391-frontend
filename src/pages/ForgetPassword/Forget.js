import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import styles from "./Forget.module.scss";

const cx = classNames.bind(styles);

function Forget() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/verify");
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
              <p>Forget Password</p>
            </div>
            <div className={cx("header-subText")}>
              <p>
                <span className={cx('sub-error')}>Opps!!!</span> Something happen with your account. Input your email address to
                fix the issue.
              </p>
            </div>
            <div className={cx("info")}>
              <div className={cx("text")}>
                <input type="text" className={cx("email")} required />
                <span></span>
                <label>Email</label>
              </div>

              <div className={cx("btn-submit")}>
                <button onClick={handleSubmit}>Submit</button>
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

export default Forget;
