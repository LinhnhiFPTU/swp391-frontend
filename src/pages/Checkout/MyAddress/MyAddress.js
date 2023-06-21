import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import AddressPopup from "~/layouts/components/AddressPopup";
import styles from "./MyAddress.module.scss";
import axios from "axios";
const cx = classNames.bind(styles);

function MyAddress({ close }) {
  const [show, setShow] = useState(false);
  const [receiveinfos, setReceiveInfos] = useState([]);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    axios
      .get("/api/v1/users/info/receives?page=" + curPage)
      .then((res) => {
        let setup = res.data || [];
        let param = curPage === 1 ? "" : "?page=" + curPage;
        setReceiveInfos(setup);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [curPage]);

  return (
    <>
      {show && <AddressPopup closeModel={setShow} />}
      <div className={cx("overlay")}>
        <div className={cx("myAddress_popup")}>
          <div className={cx("myAddress-header")}>
            <span>My Address</span>
          </div>
          <div className={cx("myAddress-content")}>
            <div className={cx("myAddress-detail")}>
              {receiveinfos.map((info, index) => (
                <div className={cx("myAddress-info")}>
                  <span className={cx("name")}>{info.fullname}</span>
                  <span className={cx("phone")}>{info.phone}</span>
                  <div className={cx("address")}>
                    {`${info.specific_address}, ${info.ward.name}, ${info.district.name}, ${info.province.name}`}
                  </div>
                  {info._default && <span className={cx("default")}>Default</span>}
                </div>
              ))}
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
            <button className={cx("cancel")} onClick={() => close(false)}>
              Cancel
            </button>
            <button className={cx("confirm")}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAddress;
