import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import googleIcon from "~/assets/images/googleIcon.png";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
              <p>Welcome</p>
            </div>

            <div className={cx("info")}>
              <div className={cx("text")}>
                <input
                  type="text"
                  className={cx("email")}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span></span>
                <label>Email</label>
              </div>
              <div className={cx("text")}>
                <input
                  type="password"
                  className={cx("password")}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span></span>
                <label>Password</label>
              </div>

              <div className={cx("options")}>
                <Link to="/forget" className={cx("options-link")}>
                  Forgotten password
                </Link>
              </div>

              <div className={cx("btn-submit")}>
                <button onClick={handleSubmit}>Log in</button>
              </div>
              <div className={cx("or")}>
                <span></span>
                <p>or</p>
                <span></span>
              </div>

              <div className={cx("choices")}>
                <label className={cx("login-google")}>
                  <div className={cx("icon-google")}>
                    <img src={googleIcon} alt="google"></img>
                  </div>
                </label>
                <div className={cx("sign-up")}>
                  <p>
                    Don't have account?{" "}
                    <span>
                      <Link to="/signup">Sign up</Link>
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

export default Login;
