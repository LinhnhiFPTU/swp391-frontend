import classNames from "classnames/bind";
import { useState } from "react";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import styles from "./Verify.module.scss";

const cx = classNames.bind(styles);

function Verify({ onClick, errMsg = "" }) {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    onClick(e, { code });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyUp = (e) => {
    let value = e.target.value;
    if (value.length > 1) e.target.value = 9;
    if (e.keyCode === 8) {
      e.target.previousSibling && (e.target.disabled = true);
      e.target.previousSibling && (e.target.previousSibling.disabled = false);
      e.target.previousSibling && (e.target.previousSibling.value = "");
      e.target.previousSibling && e.target.previousSibling.focus();
      setCode("");
      return;
    }
    e.target.nextSibling && (e.target.disabled = true);
    e.target.nextSibling && (e.target.nextSibling.disabled = false);
    e.target.nextSibling && e.target.nextSibling.focus();
    if (!e.target.nextSibling) {
      let codes = "";
      let ite = e.target;
      while (ite.previousSibling) {
        codes += ite.value;
        ite = ite.previousSibling;
      }
      codes += ite.value;
      codes = codes.split("").reverse().join("");
      setCode(codes);
    }
  };

  return (
    <>
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
                <input type="number" onKeyUp={handleKeyUp} autoFocus />
                <input type="number" onKeyUp={handleKeyUp} disabled />
                <input type="number" onKeyUp={handleKeyUp} disabled />
                <input type="number" onKeyUp={handleKeyUp} disabled />
                <input type="number" onKeyUp={handleKeyUp} disabled />
                <input type="number" onKeyUp={handleKeyUp} disabled />
              </div>
              {errMsg && (
                <Alert key="danger" variant="danger">
                  {errMsg}
                </Alert>
              )}
              <div className={cx("btn-submit")}>
                <button onClick={handleSubmit} disabled={code.length !== 6}>
                  VERRIFICATION
                </button>
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
    </>
  );
}

export default Verify;
