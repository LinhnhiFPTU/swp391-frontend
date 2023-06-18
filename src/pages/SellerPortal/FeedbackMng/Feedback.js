import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./Feedback.module.scss";

const cx = classNames.bind(styles);

function Sale() {
  return (
    <>
      <HeaderSeller title="Feedback" />
      <div className={cx("feedback_wrapper")}>
        <div className={cx("feedback_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("feedback_container")}></div>
      </div>
    </>
  );
}

export default Sale;
