import classNames from "classnames/bind";
import { useState } from "react";

import RateProduct from "./RateProduct";
import ReportProduct from "./ReportProduct";

import styles from "./SendFeedback.module.scss";
const cx = classNames.bind(styles);

function SendFeedback({ setOpenFeedback }) {
  const [typeFeedback, setTypeFeedback] = useState("Rate Product");

  return (
    <div className={cx("overlay")}>
      <div className={cx("send-feedback-popup")}>
        <div className={cx("send-feedback_container")}>
          <div className={cx("send-feedback-options")}>
            <button
              className={cx("rate-product", {
                active: typeFeedback === "Rate Product",
              })}
              onClick={() => setTypeFeedback("Rate Product")}
            >
              Rate Product
            </button>
            <button
              className={cx("report-product", {
                active: typeFeedback === "Report Product",
              })}
              onClick={() => setTypeFeedback("Report Product")}
            >
              Report Product
            </button>
          </div>
          {typeFeedback === "Rate Product" && <RateProduct />}
          {typeFeedback === "Report Product" && <ReportProduct />}
          <div className={cx("submit-feedback")}>
            <button
              className={cx("cancel-btn")}
              onClick={() => setOpenFeedback(false)}
            >
              Cancel
            </button>
            <button className={cx("send-btn")}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendFeedback;
