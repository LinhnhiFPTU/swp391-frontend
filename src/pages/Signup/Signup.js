import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [checked, setChecked] = useState();
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
                  type="text"
                  className={cx("email")}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
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
                        onChange={() => {
                          setChecked(gender.id);
                          setUser({ ...user, gender: gender.id });
                        }}
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
      <div className={cx("footer")}>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
