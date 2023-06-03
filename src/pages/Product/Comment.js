import classNames from "classnames/bind";
import { useState, useRef } from "react";
import styles from "./Product.module.scss";
const cx = classNames.bind(styles);

function Comment({ feedback, commentRating }) {
  const videoRef = useRef();
  const videoRefPreview = useRef();
  const [imagePreview, setImagePreview] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [isPause, setIsPause] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const [videoDuration, setVideoDuration] = useState("00:00");

  const onLoadedMetadata = () => {
    let duration =
      videoRef.current.duration && Math.floor(videoRef.current.duration);
    let rs = "00:00";
    if (duration) {
      let minute = Math.floor(duration / 60);
      let seconds = duration % 60;
      let secString = "";
      if (seconds < 10) secString = "0" + seconds;
      else secString = seconds;
      rs = minute + ":" + secString;
    }
    setVideoDuration(rs);
  };

  const handlePause = (e) => {
    setIsPause(true);
  };

  const handlePlay = (e) => {
    setIsPause(false);
  };

  const handleEnded = (e) => {
    setIsPause(false)
    setIsReload(true);
  };

  const handleReplay = (e) => {
    setIsReload(false);
    videoRefPreview.current.currentTime = 0;
    videoRefPreview.current.play();
  }

  const handleClickIcon = (e) => {
    videoRefPreview.current.play();
  };

  return (
    <div className={cx("product-comment-list")}>
      <div className={cx("product-comment")}>
        <div className={cx("user_avatar")}>
          <img src={feedback.user.avatar} alt="user-avatar" />
        </div>
        <div className={cx("content_comment")}>
          <div className={cx("user_comment")}>
            <div className={cx("user_name")}>
              <span className={cx("name")}>{feedback.user.name}</span>
            </div>
            <div className={cx("user_rating")}>
              {commentRating.map((r, index) =>
                r <= feedback.user.rating ? (
                  <i
                    key={index}
                    className={cx("fa-solid fa-star", "rate_icon")}
                  ></i>
                ) : (
                  <i
                    key={index}
                    className={cx("fa-regular fa-star", "rate_icon")}
                  ></i>
                )
              )}
            </div>
            <div className={cx("date_time-comment")}>
              <span className={cx("date-time")}>{feedback.date}</span>
            </div>
          </div>
          <div className={cx("comment-content")}>
            <span className={cx("comment-text")}>{feedback.description}</span>
          </div>

          <div className={cx("comment-list")}>
            <div className={videoPreview ? cx("comment-video-active") : cx("comment-video")}>
              <video
                src={feedback.feedbackVideo}
                type="video/mp4"
                ref={videoRef}
                onClick={(e) => {
                  setVideoPreview(p => {
                    if(p)
                    {
                      return "";
                    }
                    return e.target.src;
                  });
                  setImagePreview("");
                }}
                onLoadedMetadata={onLoadedMetadata}
              ></video>

              <div className={cx("icon-video")}>
                <i className={cx("fa-solid fa-video")}></i>
                <span>{videoDuration}</span>
              </div>
            </div>
            {feedback.feedbackImages.map((imageURL, index) => (
              <div
                className={(imagePreview.id === index) ? cx("comment-image-active") : cx("comment-image")}
                style={{
                  backgroundImage: `url(${imageURL})`,
                }}
                key={index}
                onClick={() => {
                  setImagePreview(p => {
                    if(p.id === index)
                    {
                      return "";
                    }
                    return {
                      id: index,
                      src: imageURL
                    };
                  });
                  setVideoPreview("");
                }}
              ></div>
            ))}
          </div>

          {imagePreview && (
            <div className={cx("comment-preview")}>
              <img src={imagePreview.src} alt="img-preview" />
            </div>
          )}

          {videoPreview && (
            <div className={cx("comment-preview")}>
              <video
                src={videoPreview}
                ref={videoRefPreview}
                controls
                onPause={handlePause}
                onPlay={handlePlay}
                onEnded={handleEnded}
                autoPlay
              />

              {isPause && (
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x="0"
                  y="0"
                  className={cx("svg-icon")}
                  onClick={handleClickIcon}
                >
                  <g opacity=".54">
                    <g>
                      <circle cx="7.5" cy="7.5" fill="#040000" r="7.3"></circle>
                      <path
                        d="m7.5.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                  <path
                    d="m6.1 5.1c0-.2.1-.3.3-.2l3.3 2.3c.2.1.2.3 0 .4l-3.3 2.4c-.2.1-.3.1-.3-.2z"
                    fill="#ffffff"
                  ></path>
                </svg>
              )}

              {isReload && (
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x="0"
                  y="0"
                  className={cx("svg-icon")}
                  onClick={handleReplay}
                >
                  <g opacity=".54">
                    <g>
                      <circle cx="7.5" cy="7.5" fill="#040000" r="7.3"></circle>
                      <path
                        d="m7.5.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                  <path
                    clipRule="evenodd"
                    d="m10.2 5.3c.5.7.8 1.4.8 2.2 0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5v.5c-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3c0-.7-.2-1.3-.6-1.8-.1-.1-.1-.1-.1-.1-.1-.1-.1-.3 0-.4s.3-.1.4.1c0-.1 0 0 0 0z"
                    fill="#ffffff"
                    fillRule="evenodd"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="m7.5 2.9c0-.1.1-.1.1-.1l1.4 1.5-1.4 1.4c0 .1-.1.1-.1 0z"
                    fill="#ffffff"
                    fillRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
