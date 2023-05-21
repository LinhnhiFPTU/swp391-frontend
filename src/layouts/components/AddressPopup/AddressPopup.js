import classNames from "classnames/bind";
import styles from "./AddressPopup.module.scss";

const cx = classNames.bind(styles);

function AddressPopup({ closeModel }) {
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
                <label for="text" className={cx("form-label")}>
                  Phone
                </label>
              </div>
              <div className={cx("addr-field", "text-address")}>
                <input
                  type="text"
                  className={cx("form-input")}
                  placeholder=" "
                  required
                />
                <label for="text" className={cx("form-label")}>
                  Specific address
                </label>
              </div>
            </div>
          </div>
          <div className={cx("popup-footer")}>
            <div className={cx("popup-btn")}>
              <button className={cx("cancel", "p-btn")} onClick={() => closeModel(false)}>Cancel</button>
              <button className={cx("update", "p-btn")}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressPopup;
