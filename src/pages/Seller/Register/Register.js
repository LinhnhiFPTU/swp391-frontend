import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import HeaderForm from "~/layouts/components/HeaderForm";
import AddressPopup from "~/layouts/components/AddressPopup";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

function Register() {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [showAddressPopup, setAddressPopup] = useState(false);
  const [addressTitle, setAddressTitle] = useState("");
  const [showAddressBtn, setShowAddressBtn] = useState(true);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailMsg, setErrorEmailMsg] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(false);
  useEffect(() => {
    if (email) {
      const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

      if (!regex.test(email)) {
        setErrorEmail(true);
        setErrorEmailMsg("Email not valid!");
        return
      }

      setShowSaveButton(true);
    }
  }, [email]);

  const handleInputBlur = () => {
    if (input === "") {
      setShowError(true);
      setShowAddressBtn(true);
    } else {
      setShowError(false);
      setShowAddressBtn(false);
    }
  };

  const handleEmailBlur = (e) => {
    let tempEmail = e.target.value.trim();
    setEmail(e.target.value.trim());
    if (tempEmail === "") {
      setErrorEmail(true);
      setErrorEmailMsg("Please enter shop email");
      return;
    }
  };
  return (
    <>
      {showAddressPopup && <AddressPopup closeModel={setAddressPopup} />}
      <HeaderForm text="Seller Register" />
      <div className={cx("register_wrapper")}>
        <div className={cx("register_container")}>
          <div className={cx("register_form")}>
            <div className={cx("form-header")}>
              <div className={cx("text")}>Shop information settings</div>
            </div>
            <div className={cx("form-container")}>
              <form className={cx("form-register")}>
                <div className={cx("shop-name")}>
                  <div className={cx("name")}>
                    <span className={cx("required")}>* </span>Shop Name
                  </div>
                  <div className={cx("name-input")}>
                    <input
                      type="text"
                      className={showError ? cx("input-error") : cx("input")}
                      placeholder="Input"
                      spellCheck={false}
                      onChange={(e) => setInput(e.target.value)}
                      onBlur={handleInputBlur}
                      onFocus={() => setShowError(false)}
                    />
                    {showError && (
                      <div className={cx("error")}>Please enter shop name</div>
                    )}
                  </div>
                </div>
                <div className={cx("shop-address")}>
                  <div className={cx("name")}>
                    <span className={cx("required")}>* </span>Shop Address
                  </div>
                  <div className={cx("add")}>
                    {addressTitle ? (
                      <div className={cx("add-detail")}>{addressTitle}</div>
                    ) : (
                      <button
                        className={cx("add-btn")}
                        onClick={(e) => {
                          e.preventDefault();
                          setAddressPopup(true);
                          setAddressTitle(
                            "Phước Thành, Phường 7, Thành Phố Đà Lạt, Lâm Đồng"
                          );
                        }}
                        disabled={showAddressBtn}
                      >
                        <i
                          className={cx(
                            "fa-sharp fa-regular fa-plus",
                            "icon-add"
                          )}
                        ></i>
                        Add
                      </button>
                    )}
                  </div>
                </div>
                <div className={cx("shop-email")}>
                  <div className={cx("name")}>
                    <span className={cx("required")}>* </span>Email
                  </div>
                  <div className={cx("email-input")}>
                    <input
                      type="text"
                      className={errorEmail ? cx("input-error") : cx("input")}
                      placeholder="abc@gmail.com"
                      spellCheck={false}
                      disabled={addressTitle === "" ? true : false}
                      onBlur={handleEmailBlur}
                      onFocus={() => setErrorEmail(false)}
                    />
                    {errorEmail && (
                      <div className={cx("error")}>{errorEmailMsg}</div>
                    )}
                  </div>
                </div>
                <div className={cx("shop-phone")}>
                  <div className={cx("name")}>
                    <span className={cx("required")}>* </span>Phone
                  </div>
                  <div className={cx("phone-input")}>
                    <input
                      type="number"
                      className={cx("input")}
                      placeholder="Phone Number"
                      value={"0123456789"}
                      disabled
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className={cx("form-footer")}>
              <div className={cx("save")}>
                <button className={cx("save-btn")} disabled={!showSaveButton}>
                  <i
                    className={cx(
                      "fa-sharp fa-regular fa-floppy-disk",
                      "save-icon"
                    )}
                  ></i>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
