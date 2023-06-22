import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import styles from "./FeedbackDetail.module.scss";

const cx = classNames.bind(styles);

function FeedbackDetail() {
  return (
    <>
      <HeaderSeller title="Feedback Detail" path="/seller/portal/feedback" />
      <div className={cx("feedback-detail_wrapper")}>
        <div className={cx("feedback-detail_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("feedback-detail_container")}>
          <div className={cx("feedback-detail-content")}>
            <div className={cx("feedback-header")}>
              <div className={cx("product-information")}>
                Product Information
              </div>
              <div className={cx("user-feedback")}>Customer Ratings</div>
            </div>
            <div className={cx("feedback-body")}>
              <div className={cx("product-information-body")}>
                <img
                  src="https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg"
                  alt="product-img"
                  className={cx("product-img")}
                />
                <div className={cx("product-content")}>
                  <div className={cx("name")}>
                    Prevue Pet Products Travel Carrier for Birds, Black
                  </div>
                  <div className={cx("price")}>$1200</div>
                </div>
              </div>
              <div className={cx("user-feedback-body")}>
                <div className={cx("content")}>
                  <pre className={cx("text")}>
                    {`Shop giao hàng nhanh chóng, đóng gói kỹ càng, cẩn thận. hiện đại, đường may chắc chắn, chất liệu vải khá là tốt, dày. Shop tư vấn nhiệt tình nên mình chọn đc cỡ áo, màu hợp với mình. Áo thích hợp đi làm, đi chơi. Cảm ơn shop về sp này. Shop giao hàng nhanh chóng, đóng gói kỹ càng, cẩn thận. Sp đúng như shop mô tả. Áo thiết kế khá là trẻ trung, hiện đại, đường may chắc chắn, chất liệu vải khá là tốt, dày. chắc chắn, chất liệu vải khá là tốt.. `}
                  </pre>
                </div>
                <div className={cx("list")}>
                  <div className={cx("video")}></div>
                </div>
                
              </div>
              <div className={cx("reply")}>
                <button className={cx("reply-btn")}>Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackDetail;
