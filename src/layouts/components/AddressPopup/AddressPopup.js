import classNames from "classnames/bind";
import styles from "./AddressPopup.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

const cx = classNames.bind(styles);

function AddressPopup({ closeModel }) {
  const [receiveInfo, setReceiveInfo] = useState({});
  const [focusP, setFocusP] = useState(false);
  const [focusD, setFocusD] = useState(false);
  const [focusW, setFocusW] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province",
        {
          headers: {
            "Content-Type": "application/json",
            Token: "fc0ea700-c65d-11ed-ab31-3eeb4194879e",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  const handleHideP = () => {
    setFocusP(false);
  };
  const handleHideD = () => {
    setFocusD(false);
  };
  const handleHideW = () => {
    setFocusW(false);
  };

  return (
    <div className={cx("overlay")}>
      <div className={cx("addr-popup")}>
        <div className={cx("addr-container")}>
          <div className={cx("popup-head")}>
            <span className={cx("popup-head-text")}>New address</span>
          </div>
          <div className={cx("popup-content")}>
            <div className={cx("addr-content")}>
              <div className={cx("addr-field", "text-name")}>
                <input
                  type="text"
                  className={cx("form-input")}
                  placeholder=" "
                  required
                />
                <label className={cx("form-label")}>Full name</label>
              </div>
              <div className={cx("addr-field", "text-phone")}>
                <input
                  type="text"
                  className={cx("form-input")}
                  placeholder=" "
                  required
                />
                <label className={cx("form-label")}>
                  Phone
                </label>
              </div>
            </div>
            <div className={cx("addr-detail")}>
              <Tippy
                interactive
                visible={focusP}
                delay={[0, 200]}
                placement="bottom-start"
                render={(attrs) => (
                  <div className={cx("province-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <span className={cx("province-item")}>
                        TP Ho Chi Minh
                      </span>
                      
                    </PopperWrapper>
                  </div>
                )}
                onClickOutside={handleHideP}
              >
                <div className={cx("addr-field")}>
                  <input
                    type="text"
                    className={cx("form-input")}
                    placeholder=" "
                    onFocus={() => setFocusP(true)}
                    required
                  />
                  <label className={cx("form-label")}>
                    Province
                  </label>
                </div>
              </Tippy>

              <Tippy
                interactive
                visible={focusD}
                delay={[0, 200]}
                placement="bottom"
                render={(attrs) => (
                  <div className={cx("province-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <span className={cx("province-item")}>
                        TP Ho Chi Minh
                      </span>
                      
                    </PopperWrapper>
                  </div>
                )}
                onClickOutside={handleHideD}
              >
                <div className={cx("addr-field")}>
                  <input
                    type="text"
                    className={cx("form-input")}
                    placeholder=" "
                    onFocus={() => setFocusD(true)}
                    required
                  />
                  <label className={cx("form-label")}>
                    District
                  </label>
                </div>
              </Tippy>
              <Tippy
                interactive
                visible={focusW}
                delay={[0, 200]}
                placement="bottom"
                render={(attrs) => (
                  <div className={cx("province-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <span className={cx("province-item")}>
                        TP Ho Chi Minh
                      </span>
                      
                    </PopperWrapper>
                  </div>
                )}
                onClickOutside={handleHideW}
              >
                <div className={cx("addr-field")}>
                  <input
                    type="text"
                    className={cx("form-input")}
                    placeholder=" "
                    onFocus={() => setFocusW(true)}
                    required
                  />
                  <label className={cx("form-label")}>
                    Ward
                  </label>
                </div>
              </Tippy>
            </div>
            <div className={cx("specific-add")}>
              <div className={cx("addr-field")}>
                <input
                  type="text"
                  className={cx("form-input")}
                  placeholder=" "
                  required
                />
                <label className={cx("form-label")}>
                  Specific address
                </label>
              </div>
            </div>
          </div>
          <div className={cx("popup-footer")}>
            <div className={cx("popup-btn")}>
              <button
                className={cx("cancel", "p-btn")}
                onClick={() => closeModel(false)}
              >
                Cancel
              </button>
              <button className={cx("update", "p-btn")}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressPopup;
