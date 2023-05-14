import classNames from "classnames/bind";
import styles from "./Forget.module.scss";

const cx = classNames.bind(styles);

function Forget({onClick}) {

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <form>
            <div className={cx("head-text")}>
              <p>Forget Password</p>
            </div>
            <div className={cx("header-subText")}>
              <p>
                <span className={cx("sub-error")}>Opps!!!</span> Something
                happen with your account. Input your email address to fix the
                issue.
              </p>
            </div>
            <div className={cx("info")}>
              <div className={cx("text")}>
                <input type="text" className={cx("email")} required />
                <span></span>
                <label>Email</label>
              </div>

              <div className={cx("btn-submit")}>
                <button onClick={onClick}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default (Forget);
