import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { Rate } from "antd";
import ImageItem from "~/pages/SellerPortal/ProductMng/AddProduct/ImageItem";
import styles from "./SendFeedback.module.scss";
const cx = classNames.bind(styles);

function RateProduct() {
  const fileInputImageRef = useRef();
  const fileInputVideoRef = useRef();
  const videoPreview = useRef();
  const [rating, setRating] = useState(5);
  const [quantityImage, setQuantityImage] = useState(0);
  const [listImage, setListImage] = useState([]);
  const [video, setVideo] = useState("");
  const [videoDuration, setVideoDuration] = useState("00:00");
  const [showDeleteVideo, setShowDeleteVideo] = useState(false);
  const [videoError, setVideoError] = useState("");
  const [countTextarea, setCountTextarea] = useState(0);
  const [inputTextarea, setInputTextarea] = useState("");
  const [errorTextarea, setErrorTextarea] = useState("");

  const handleClickImage = () => {
    fileInputImageRef.current.click();
  };

  const handleClickVideo = () => {
    fileInputVideoRef.current.click();
  };

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setListImage((prev) => [...prev, file.preview]);
    setQuantityImage((pre) => pre + 1);
  };

  const handlePreviewVideo = (e) => {
    const file = e.target.files[0];
    const fileSize = e.target.files[0].size;
    const maxSizeInBytes = 31457280;
    if (file) {
      if (fileSize > maxSizeInBytes) {
        setVideoError(
          "This file is too large to be previewed (less than 30MB)"
        );
      } else {
        file.preview = URL.createObjectURL(file);
        setVideo(file.preview);
        setVideoError("");
      }
    }
  };

  const handleChangeTextarea = (e) => {
    let tempText = e.target.value;
    setInputTextarea(e.target.value);
    if (tempText === "") {
      setErrorTextarea("Feedback cannot be empty");
    } else {
      setErrorTextarea("");
    }
    setCountTextarea(e.target.value.length);
  };

  const onLoadedMetadata = () => {
    let duration =
      videoPreview.current.duration &&
      Math.floor(videoPreview.current.duration);
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
  return (
    <div className={cx("rate-product-container")}>
      <div className={cx("product-report")}>
        <img
          src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
          alt="product-img"
          className={cx("product-img")}
        />
        <div className={cx("product-name")}>
          {" "}
          Pet Birds Feeder Food Water Feeding Box For Small Medium Large Birds
          Parrots
        </div>
      </div>
      <div className={cx("product-rating")}>
        <div className={cx("product-quality")}>
          <div className={cx("title")}>Product quality</div>
          <div className={cx("rate")}>
            <Rate defaultValue={rating} onChange={(val) => setRating(val)} />
          </div>
        </div>
        <div className={cx("product-media")}>
          <div className={cx("upload-image")}>
            <div className={cx("title")}>Product Images</div>
            <div className={cx("list-image")}>
              <div className={cx("required-image")}>
                <span className={cx("required")}>* </span>Scale image 1:1
              </div>
              <div className={cx("image-action")}>
                {listImage &&
                  listImage.map((image, index) => (
                    <ImageItem
                      key={index}
                      image={image}
                      index={index}
                      setListImage={setListImage}
                      setQuantityImage={setQuantityImage}
                    />
                  ))}
                {listImage.length < 4 && (
                  <div className={cx("image-selected")}>
                    <div className={cx("selected")} onClick={handleClickImage}>
                      <div className={cx("selected-icon")}>
                        <i
                          className={cx("fa-regular fa-image", "image-icon")}
                        ></i>
                        <i className={cx("fa-solid fa-plus", "plus-icon")}></i>
                      </div>
                      <div className={cx("selected-text")}>
                        Add images ({quantityImage}/4)
                      </div>
                    </div>
                    <input
                      ref={fileInputImageRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className={cx("image-input")}
                      style={{ display: "none" }}
                      onChange={handlePreviewImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={cx("upload-video")}>
            <div className={cx("title")}>Product Video</div>
            <div className={cx("video-content")}>
              <div className={cx("video-main")}>
                <div className={cx("video-action")}>
                  {video ? (
                    <div
                      className={cx("video-view")}
                      onMouseEnter={() => setShowDeleteVideo(true)}
                      onMouseLeave={() => setShowDeleteVideo(false)}
                    >
                      <video
                        ref={videoPreview}
                        src={video}
                        className={cx("video")}
                        onLoadedMetadata={onLoadedMetadata}
                      />
                      {showDeleteVideo ? (
                        <div className={cx("action")}>
                          <i
                            className={cx(
                              "fa-regular fa-trash-can",
                              "delete-icon"
                            )}
                            onClick={() => setVideo("")}
                          ></i>
                        </div>
                      ) : (
                        <div className={cx("duration")}>{videoDuration}</div>
                      )}
                    </div>
                  ) : (
                    <div className={cx("video-selected")}>
                      <div
                        className={cx("selected")}
                        onClick={handleClickVideo}
                      >
                        <div className={cx("selected-icon")}>
                          <i
                            className={cx(
                              "fa-light fa-video-plus",
                              "video-icon"
                            )}
                          ></i>
                        </div>
                        <div className={cx("selected-text")}>Add video</div>
                      </div>
                      <input
                        ref={fileInputVideoRef}
                        type="file"
                        accept="video/*"
                        multiple
                        className={cx("video-input")}
                        style={{ display: "none" }}
                        onChange={handlePreviewVideo}
                      />
                    </div>
                  )}
                </div>
                <div className={cx("video-requirements")}>
                  <ul className={cx("list-requirements")}>
                    <li className={cx("item-requirements")}>
                      Size: Up to 30Mb
                    </li>
                    <li className={cx("item-requirements")}>Format: MP4</li>
                  </ul>
                </div>
              </div>
              {videoError && (
                <div className={cx("video-error")}>{videoError}</div>
              )}
            </div>
          </div>
          <div className={cx("upload-content-feedback")}>
            <div className={cx("title")}>Feedback</div>
            <div className={cx("description-input")}>
              <textarea
                className={errorTextarea ? cx("input-error") : cx("input")}
                maxLength={500}
                spellCheck={false}
                onChange={handleChangeTextarea}
              />
              <div className={cx("input-notify")}>
                <div className={cx("error-textarea")}>{errorTextarea}</div>
                <div className={cx("count-textarea")}>{countTextarea}/500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateProduct;
