import classNames from "classnames/bind";
import { useState } from "react";

import AddressPopup from "~/layouts/components/AddressPopup";
import styles from "./MyAddress.module.scss";
const cx = classNames.bind(styles);

function MyAddress({ close }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <AddressPopup closeModel={setShow}/>}
      <div className={cx("overlay")}>
        <div className={cx("myAddress_popup")}>
          <div className={cx("myAddress-header")}>
            <span>My Address</span>
          </div>
          <div className={cx("myAddress-content")}>
            <div className={cx("myAddress-detail")}>
              <div className={cx("myAddress-info")}>
                <span className={cx("name")}>Lê Vũ Đình Duy</span>
                <span className={cx("phone")}>0912345678</span>
                <div className={cx("spec-address")}>Phước Thành</div>
                <div className={cx("address")}>
                  Phường 7, Thành Phố Đà Lạt, Lâm Đồng
                </div>
                <span className={cx("default")}>Default</span>
              </div>
              <div className={cx("myAddress-selection")}>
                <button className={cx("select")}>Select</button>
                <button className={cx("edit")}>Edit</button>
              </div>
            </div>
            <button
              className={cx("add_newAddress")}
              onClick={() => setShow(true)}
            >
              <i className={cx("fa-sharp fa-regular fa-plus", "plus-icon")}></i>
              Add New Address
            </button>
          </div>
          <div className={cx("myAddress-footer")}>
            <button className={cx("cancel")} onClick={(() => close(false))}>Cancel</button>
            <button className={cx("confirm")}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAddress;
