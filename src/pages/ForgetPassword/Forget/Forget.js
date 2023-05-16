import classNames from "classnames/bind";

import styles from "./Forget.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Forget({onClick}) {

  const [email, setEmail] = useState('')

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
                <input type="text" className={cx("email")} onChange={e => setEmail(e.target.value)} required />
                <span></span>
                <label>Email</label>
              </div>

              <div className={cx("btn-submit")}>
                <button onClick={onClick} disabled={email === ''}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default (Forget);
