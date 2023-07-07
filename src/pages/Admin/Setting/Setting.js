import classNames from "classnames/bind";

import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);

const settingsList = [
  {
    id: 0,
    type: "Number of products on sale",
  },
  {
    id: 1,
    type: "Number of related products",
  },
  {
    id: 2,
    type: "Number of bundled products",
  },
  {
    id: 3,
    type: "Number of comments on each page of product",
  },
];

function Setting() {
  return (
    <>
      <Topbar />
      <div className={cx("setting_wrapper")}>
        <div className={cx("setting_sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("setting_container")}>
          <div className={cx("setting-content")}>
            <div className={cx("setting-header")}>
              <i className={cx("fa-light fa-gear", "setting-icon")}></i>
              <span className={cx("text")}>Settings</span>
            </div>
            <div className={cx("setting-content_main")}>
              <div className={cx("setting-list-item")}>
                {settingsList.map((item) => (
                  <div className={cx("setting-item")} key={item.id}>
                    <div className={cx("type-setting")}>
                      {item.type}:{" "}
                    </div>
                    <div className={cx("edit-setting")}>
                      <input type="number" className={cx("input")} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("setting-footer")}>
              <button className={cx("save-btn")}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
