import classNames from "classnames/bind";
import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import styles from "./NewPassword.module.scss";

const cx = classNames.bind(styles);

function NewPassword() {
  const handleSubmit = () => {};

  return (
    <>
      <div className={cx("header")}>
        <HeaderForm />
      </div>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <form>
            <div className={cx("head-text")}>
              <p>New password</p>
            </div>
            <div className={cx("header-subText")}>
              <p>Enter your new password below to reset your password.</p>
            </div>
            <div className={cx("info")}>
              <div className={cx("text")}>
                <input type="password" className={cx("password")} required />
                <span></span>
                <label>New password</label>
              </div>

              <div className={cx("text")}>
                <input type="password" className={cx("password")} required />
                <span></span>
                <label>Confirm password</label>
              </div>

              <div className={cx("btn-submit")}>
                <button disabled onClick={handleSubmit}>
                  Reset
                </button>
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

export default NewPassword;
