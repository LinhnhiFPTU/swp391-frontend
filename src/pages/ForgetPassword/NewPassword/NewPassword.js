import classNames from "classnames/bind";
import styles from "./NewPassword.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function NewPassword() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const handleSubmit = () => {
    
  };

  return (
    <>

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
                <input type="password" className={cx("password")} required value={password} onChange={e => setPassword(e.target.value)}/>
                <span></span>
                <label>New password</label>
              </div>

              <div className={cx("text")}>
                <input type="password" className={cx("password")} required value={confirm} onChange={e => setConfirm(e.target.value)}/>
                <span></span>
                <label>Confirm password</label>
              </div>

              <div className={cx("btn-submit")}>
                <button disabled={password !== confirm} onClick={handleSubmit}>
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}

export default NewPassword;
