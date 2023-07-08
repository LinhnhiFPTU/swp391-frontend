import classNames from "classnames/bind";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "~/components/Popper";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import StarRating from "~/layouts/components/StarRating";
import {UserContext} from "~/userContext/Context";

import styles from "./Feedback.module.scss";
import axios from "axios";

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

function FeedBack() {
    const UC = useContext(UserContext);
    const context = UC.state;
    const [shop, setShop] = useState({})
    const [titleFilter, setTitleFilter] = useState("All");
    const [feedbacks, setFeedbacks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/api/v1/shop/feedbacks')
            .then(res => setFeedbacks(res.data))
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        if (context && context.shopDTO) {
            setShop(context.shopDTO);
        }
    }, [context]);

    const handleDetail = (e, feedback) => {
        e.preventDefault();
        navigate("detail", {
            state: feedback
        })
    }

    useEffect(() => {
        document.title = "Seller Centre";
    }, []);
    return (
        <>
            <HeaderSeller title="Feedback"/>
            <div className={cx("feedback_wrapper")}>
                <div className={cx("feedback_sidebar")}>
                    <SideBar/>
                </div>
                <div className={cx("feedback_container")}>
                    <div className={cx("feedback-content")}>
                        <div className={cx("feedback-header")}>
                            <div className={cx("title")}>Shop Ratings</div>
                            <div className={cx("rating-overall")}>
                                {shop.rating} <span className={cx("overall")}>/ 5</span>
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
                                            src={feedback.userImageUrl}
                                            alt="avatar"
                                            className={cx("user-avatar")}
                                        />
                                        <div className={cx("user-info")}>
                                            <div className={cx("user-content")}>
                                                <div className={cx("user-name")}>
                                                    {feedback.userName}
                                                </div>
                                                <div className={cx("feedback-date")}>
                                                    {feedback.data}
                                                </div>
                                            </div>
                                            <div className={cx("user-rating")}>
                                                <StarRating
                                                    rating={feedback.rate}
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
                                        <div className={cx("feedback-type")}>
                                            <span className={cx("type-title")}>Type of feedback: </span>
                                            <span
                                                className={cx("type-content")}>{feedback.type == "REPORT" ? feedback.type + " - " + feedback.description : feedback.type}</span>
                                        </div>
                                        <span className={cx("feedback-data")}>
                      {feedback.description}
                    </span>
                                    </div>
                                    <div className={cx("see-detail-body")}>
                                        <a
                                            className={cx("forward-detail")}
                                            onClick={e => handleDetail(e, feedback)}
                                        >
                                            Detail
                                        </a>
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
