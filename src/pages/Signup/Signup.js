import * as React from "react";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import ModalSuccess from "~/layouts/components/Modal/SignUpModal";
import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import styles from "./Signup.module.scss";

const cx = classNames.bind(styles);

const genders = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
  {
    id: 3,
    name: "Other",
  },
];
function Signup() {
  const [msg, setMsg] = useState("");
  const [confirm, setConfirm] = useState("");
  const [checked, setChecked] = useState();
  const [user, setUser] = useState({});
  const [submit, setSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (submit) {
      axios
        .post("/api/v1/auths/registration", user)
        .then((res) => {
          console.log(res);
          setOpenModal(true);
          setOpen(false)
        })
        .catch((e) => {
          console.log(e.response.data.message);
          setMsg(e.response.data.message);
          setSubmit(false);
          setOpen(false);
        });
    }
  }, [submit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {openModal && <ModalSuccess />}
      <HeaderForm />
      <div className={cx("container")}>
        <div className={cx("content")}>
          <form>
            <div className={cx("head-text")}>
              <p>Register</p>
            </div>
            <div className={cx("info")}>
              <div className={cx("text")}>
                <input
                  type="text"
                  className={cx("first-name")}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  required
                />
                <span></span>
                <label>First name</label>
              </div>
              <div className={cx("text")}>
                <input
                  type="text"
                  className={cx("last-name")}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                  required
                />
                <span></span>
                <label>Last name</label>
              </div>
              <div className={cx("text")}>
                <input
                  type="email"
                  className={cx("email")}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
                <span></span>
                <label>Email</label>
              </div>
              {/* <div className={cx("error")}>
                <p className={cx("mess")}>{msg}</p>
              </div> */}
              <div className={cx("text")}>
                <input
                  type="password"
                  className={cx("password")}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
                <span></span>
                <label>Password</label>
              </div>
              <div className={cx("text")}>
                <input
                  type="password"
                  className={cx("confirm-password")}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
                <span></span>
                <label>Confirm password</label>
              </div>

              {/* <div className={cx('error')}>
                <p className={cx("mess")}>
                </p>
              </div> */}

              <div className={cx("gender-form")}>
                <p>Gender</p>
                <div className={cx("gender")}>
                  {genders.map((gender) => (
                    <label key={gender.id}>
                      <input
                        type="radio"
                        checked={checked === gender.id}
                        onChange={() => {
                          setChecked(gender.id);
                          setUser({
                            ...user,
                            gender: gender.name.toUpperCase(),
                          });
                        }}
                      />
                      <i></i>
                      <span>{gender.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className={cx("btn-submit")}>
                <button onClick={handleSubmit}>SIGN UP</button>
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
              <div className={cx("login")}>
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link to="/login">Log in</Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
