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
    feedbackData:
      "Hàng giao khá nhanh , shipper thân thiện , đóng gói chắc chắn , nhưng mà có điều mình thấy chát vải giống như vải của áo mặc bóng đá vậy , với số tiền này thì mình có thể mua đc áo ổn áp hơn",
  },
  {
    user: {
      avatarUrl: "https://vnn-imgs-f.vgcloud.vn/2021/08/28/13/ronaldo-mu.jpg",
      name: "eelVuxx",
      rating: 4.5,
    },
    feedbackData:
      "Hàng giao khá nhanh , shipper thân thiện , đóng gói chắc chắn , nhưng mà có điều mình thấy chát vải giống như vải của áo mặc bóng đá vậy , với số tiền này thì mình có thể mua đc áo ổn áp hơn",
  },
  {
    user: {
      avatarUrl:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      name: "eelVuxx",
      rating: 4.2,
    },
    feedbackData:
      "Hàng giao khá nhanh , shipper thân thiện , đóng gói chắc chắn , nhưng mà có điều mình thấy chát vải giống như vải của áo mặc bóng đá vậy , với số tiền này thì mình có thể mua đc áo ổn áp hơn",
  },
  {
    user: {
      avatarUrl:
        "https://toigingiuvedep.vn/wp-content/uploads/2021/02/hinh-nen-ronaldo-cr7-dep-nhat.jpg",
      name: "eelVuxx",
      rating: 5,
    },
    feedbackData:
      "Hàng giao khá nhanh , shipper thân thiện , đóng gói chắc chắn , nhưng mà có điều mình thấy chát vải giống như vải của áo mặc bóng đá vậy , với số tiền này thì mình có thể mua đc áo ổn áp hơn",
  },
  {
    user: {
      avatarUrl:
        "https://tophinhanhdep.com/wp-content/uploads/2021/11/Cristiano-Ronaldo-Desktop-Wallpapers.jpg",
      name: "eelVuxx",
      rating: 2.4,
    },
    feedbackData:
      "Hàng giao khá nhanh , shipper thân thiện , đóng gói chắc chắn , nhưng mà có điều mình thấy chát vải giống như vải của áo mặc bóng đá vậy , với số tiền này thì mình có thể mua đc áo ổn áp hơn",
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

              {feedbacks.map((data, index) => (
                <div className={cx("body-content")} key={index}>
                  <div className={cx("user-information-body")}>
                    <img
                      src={data.user.avatarUrl}
                      alt="avatar"
                      className={cx("user-avatar")}
                    />
                    <div className={cx("user-info")}>
                      <div className={cx("user-name")}>{data.user.name}</div>
                      <div className={cx("user-rating")}>
                        <StarRating
                          rating={data.user.rating}
                          font={1.4}
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
                      {data.feedbackData}
                    </span>
                  </div>
                  <div className={cx("see-detail-body")}>
                    <Link to="/seller/portal/feedback/detail" className={cx("forward-detail")}>
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
