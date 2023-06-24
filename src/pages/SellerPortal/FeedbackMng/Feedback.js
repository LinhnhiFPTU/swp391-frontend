import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import StarRating from "~/layouts/components/StarRating";

import styles from "./Feedback.module.scss";

const cx = classNames.bind(styles);

const filterStar = [
  {
    title: "5 Star",
  },
  {
    title: "4 Star",
  },
  {
    title: "3 Star",
  },
  {
    title: "2 Star",
  },
  {
    title: "1 Star",
  },
];

const feedbacks = [
  {
    user: {
      avatarUrl:
        "https://www.thesun.ie/wp-content/uploads/sites/3/2022/02/crop-17770689.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
      name: "eelVuxx",
      rating: 4,
    },
    product: {
      productImage:
        "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      productName: "Prevue Pet Products Travel Carrier for Birds, Black",
      productPrice: 1200,
    },
    feedbackData: {
      feedbackContent:
        "Shop giao hàng nhanh chóng, đóng gói kỹ càng, cẩn thận. hiện đại, đường may chắc chắn, chất liệu vải khá là tốt, dày. Shop tư vấn nhiệt tình nên mình chọn đc cỡ áo, màu hợp với mình. Áo thích hợp đi làm, đi chơi. Cảm ơn shop về sp này. Shop giao hàng nhanh chóng, đóng gói kỹ càng, cẩn thận. Sp đúng như shop mô tả. Áo thiết kế khá là trẻ trung, hiện đại, đường may chắc chắn, chất liệu vải khá là tốt, dày. chắc chắn, chất liệu vải khá là tốt. chất liệu vải khá là tốt, dày. chắc chắn, chất liệu vải",
      feedbackVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
      feedbackImage: [
        {
          id: 0,
          url: "https://m.media-amazon.com/images/I/71+4X8orK7L._AC_SL1500_.jpg",
        },
        {
          id: 1,
          url: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
        },
        {
          id: 2,
          url: "https://m.media-amazon.com/images/I/81uf1-L-u1L._AC_SL1500_.jpg",
        },
        {
          id: 3,
          url: "https://m.media-amazon.com/images/I/81ESBV8P-DL._AC_SL1500_.jpg",
        },
      ],
    },
  },
];

function FeedBack() {
  const [titleFilter, setTitleFilter] = useState("All");
  return (
    <>
      <HeaderSeller title="Feedback" />
      <div className={cx("feedback_wrapper")}>
        <div className={cx("feedback_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("feedback_container")}>
          <div className={cx("feedback-content")}>
            <div className={cx("feedback-header")}>
              <div className={cx("title")}>Shop Ratings</div>
              <div className={cx("rating-overall")}>
                0.0 <span className={cx("overall")}>/ 5</span>
              </div>
            </div>
            <div className={cx("feedback-details")}>
              <div className={cx("feedback-statistic")}>
                <div className={cx("count-feedback")}>0 Feedback</div>
                <Tippy
                  interactive
                  delay={[0, 100]}
                  placement="bottom-end"
                  render={(attrs) => (
                    <div
                      className={cx("filter-options")}
                      tabIndex="-1"
                      {...attrs}
                    >
                      <PopperWrapper>
                        {filterStar.map((filter, index) => (
                          <div
                            className={cx("option")}
                            key={index}
                            onClick={() => setTitleFilter(filter.title)}
                          >
                            {filter.title}
                          </div>
                        ))}
                      </PopperWrapper>
                    </div>
                  )}
                >
                  <div className={cx("filter-feedback")}>
                    <span
                      className={
                        titleFilter === "All"
                          ? cx("filter-title")
                          : cx("filter-title-active")
                      }
                    >
                      {titleFilter}
                    </span>
                    <i
                      className={cx(
                        "fa-sharp fa-light fa-chevron-down",
                        "down-icon"
                      )}
                    ></i>
                  </div>
                </Tippy>
              </div>
              <div className={cx("header-table")}>
                <div className={cx("user-information-head")}>
                  User Information
                </div>
                <div className={cx("feedback-information-head")}>
                  Feedback Information
                </div>
              </div>

              {feedbacks.map((feedback, index) => (
                <div className={cx("body-content")} key={index}>
                  <div className={cx("user-information-body")}>
                    <img
                      src={feedback.user.avatarUrl}
                      alt="avatar"
                      className={cx("user-avatar")}
                    />
                    <div className={cx("user-info")}>
                      <div className={cx("user-content")}>
                        <div className={cx("user-name")}>
                          {feedback.user.name}
                        </div>
                        <div className={cx("feedback-date")}>22/03/2023</div>
                      </div>
                      <div className={cx("user-rating")}>
                        <StarRating
                          rating={feedback.user.rating}
                          font={1.3}
                          color={`var(--primary)`}
                        />
                      </div>
                      <div className={cx("chat")}>
                        <button className={cx("chat-btn")}>
                          <i
                            className={cx("fa-solid fa-messages", "icon-chat")}
                          ></i>
                          <span className={cx("chat-text")}>Chat</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={cx("feedback-information-body")}>
                    <span className={cx("feedback-data")}>
                      {feedback.feedbackData.feedbackContent}
                    </span>
                  </div>
                  <div className={cx("see-detail-body")}>
                    <Link
                      to="/seller/portal/feedback/detail"
                      className={cx("forward-detail")}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className={cx("prev-next")}>
              <button className={cx("icon-left")}>
                <i className={cx("fa-light fa-angle-left")}></i>
              </button>
              <button className={cx("icon-right")}>
                <i className={cx("fa-light fa-angle-right")}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedBack;
