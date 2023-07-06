import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";

import avatar from "~/assets/images/avatar.png";
import styles from "./Shop.module.scss";

const cx = classNames.bind(styles);

function Shop() {
  const fileInputImageRef = useRef();
  const [countInput, setCountInput] = useState(0);
  const [previewImage, setPreviewImage] = useState(avatar);
  const [imgError, setImgError] = useState("");

  useEffect(() => {
    document.title = "Seller Centre";
  }, []);

  const handleClickImage = () => {
    fileInputImageRef.current.click();
  };

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    const fileSize = e.target.files[0].fileSize;
    const maxSize = 2097152;
    if (file) {
      if (fileSize > maxSize) {
        setImgError("This file is too large to be previewed (less than 2.0MB)");
      } else {
        file.preview = URL.createObjectURL(file);
        setPreviewImage(file.preview);
        setImgError("");
      }
    }
  };
  return (
    <>
      <HeaderSeller title="Shop" />
      <div className={cx("shop_wrapper")}>
        <div className={cx("shop_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("shop_container")}>
          <div className={cx("shop-content")}>
            <div className={cx("shop-header")}>
              <div className={cx("title")}>Shop Profile</div>
              <div className={cx("subTitle")}>
                View Shop status and update your Shop profile
              </div>
            </div>
            <div className={cx("main-content")}>
              <div className={cx("content-text")}>Basic Information</div>
              <div className={cx("content-shop")}>
                <div className={cx("shop-name")}>
                  <div className={cx("name-title")}>Shop name</div>
                  <div className={cx("name-input")}>
                    <input
                      type="text"
                      spellCheck={false}
                      maxLength={30}
                      className={cx("input")}
                      onChange={(e) => setCountInput(e.target.value.length)}
                    />
                    <div className={cx("count-input")}>{countInput}/30</div>
                  </div>
                </div>
                <div className={cx("shop-phone")}>
                  <div className={cx("phone-title")}>Shop phone</div>
                  <div className={cx("phone-input")}>
                    <input
                      type="number"
                      spellCheck={false}
                      className={cx("input")}
                    />
                  </div>
                </div>
                <div className={cx("shop-logo")}>
                  <div className={cx("logo-title")}>Shop logo</div>
                  <div className={cx("logo-content")}>
                    <div className={cx("logo-main")}>
                      <div className={cx("logo-upload")}>
                        <img
                          src={previewImage}
                          alt="shop-avatar"
                          className={cx("shop-avatar")}
                        />
                        <div className={cx("upload")}>
                          <i
                            className={cx(
                              "fa-regular fa-camera-retro",
                              "upload-icon"
                            )}
                            onClick={handleClickImage}
                          ></i>
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
                      </div>
                      <div className={cx("logo-required")}>
                        <ul className={cx("required-list")}>
                          <li className="required">Scale image 1:1</li>
                          <li className="required">Maximum file size: 2.0MB</li>
                          <li className="required">
                            Image format accepted: JPG, JPEG, PNG
                          </li>
                        </ul>
                      </div>
                    </div>
                    {imgError && (
                      <div className={cx("logo-error")}>{imgError}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className={cx("shop-actions")}>
                <button className={cx("save-btn")}>Save</button>
                <button className={cx("cancel-btn")}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
