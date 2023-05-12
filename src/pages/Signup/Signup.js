import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        { id: checked }
    );
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
              <p>Register</p>
            </div>
            <div className={cx("info")}>
              <div className={cx("text")}>
                <input
                  type="text"
                  className={cx("first-name")}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <span></span>
                <label>First name</label>
              </div>
              <div className={cx("text")}>
                <input
                  type="text"
                  className={cx("last-name")}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <span></span>
                <label>Last name</label>
              </div>
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
              <div className={cx("text")}>
                <input
                  type="password"
                  className={cx("confirm-password")}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span></span>
                <label>Confirm password</label>
              </div>
              <div className={cx("gender-form")}>
                <p>Gender</p>
                <div className={cx("gender")}>
                  {genders.map((gender) => (
                    <label key={gender.id}>
                      <input
                        type="radio"
                        checked={checked === gender.id}
                        onChange={() => setChecked(gender.id)}
                      />
                      <i></i>
                      <span>{gender.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className={cx("btn-submit")}>
                <button onClick={handleSubmit}>Sign up</button>
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
    </>
  );
}

export default Signup;
