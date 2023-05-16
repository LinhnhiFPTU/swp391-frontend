import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import Button from "@mui/material/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import googleIcon from "~/assets/images/googleIcon.png";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const [request, setRequest] = useState({});
  const [msg, setMsg] = useState("");
  const [submit, setSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let rs = decodedCookie.substring(name.length);
    return rs;
  }

  useEffect(() => {
    if (submit) {
      axios
        .post("/api/v1/auths/authentication", request)
        .then((res) => {
          setMsg("");
          navigate("/");
          console.log(res.data);
          document.cookie = "auth_token=" + res.data.token;
          console.log(getCookie("auth_token"));
        })
        .catch((e) => {
          setMsg(e.response.data.message);
          setSubmit(false);
          setOpen(false)
        });
    }
  }, [submit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    setSubmit(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HeaderForm />
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
                  onChange={(e) =>
                    setRequest({ ...request, email: e.target.value })
                  }
                  required
                />
                <span></span>
                <label>Email</label>
              </div>
              <div className={cx("text")}>
                <input
                  type="password"
                  className={cx("password")}
                  onChange={(e) =>
                    setRequest({ ...request, password: e.target.value })
                  }
                  required
                />
                <span></span>
                <label>Password</label>
              </div>
              <div className={cx("error")}>
                <p className={cx("mess")}>{msg}</p>
              </div>
              <div className={cx("options")}>
                <Link to="/reset" className={cx("options-link")}>
                  Forget password
                </Link>
              </div>

              <div className={cx("btn-submit")}>
                <button onClick={handleSubmit} disabled={true}>LOG IN</button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
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
      <Footer />
    </>
  );
}

export default Login;
