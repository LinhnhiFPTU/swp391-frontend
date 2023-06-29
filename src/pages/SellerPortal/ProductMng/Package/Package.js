import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import styles from "./Package.module.scss";

const cx = classNames.bind(styles);

const packages = [
  {
    packageType: "Free Trial",
    packageFee: {
      price: "Free",
      type: "7 days free trial",
    },
    packageFeatures: [
      {
        isCheck: true,
        title: "5 products",
      },
    ],
  },
  {
    packageType: "Gold",
    packageFee: {
      price: "$ 600",
      type: "3 months",
    },
    packageFeatures: [
      {
        isCheck: true,
        title: "25 products",
      },
    ],
  },
  {
    packageType: "Platinum",
    packageFee: {
      price: "$ 1150",
      type: "6 months",
    },
    packageFeatures: [
      {
        isCheck: true,
        title: "60 products",
      },
    ],
  },
  {
    packageType: "Diamond",
    packageFee: {
      price: "$ 1650",
      type: "9 months",
    },
    packageFeatures: [
      {
        isCheck: true,
        title: "100 products",
      },
    ],
  },
  {
    packageType: "Titanium",
    packageFee: {
      price: "$ 2200",
      type: "1 year",
    },
    packageFeatures: [
      {
        isCheck: true,
        title: "300 products",
      },
    ],
  },
];

function Package() {
  return (
    <>
      <HeaderSeller title="Package" />
      <div className={cx("package_wrapper")}>
        <div className={cx("package_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("package_container")}>
          <div className={cx("package-content")}>
            <div className={cx("package-header")}>
              Welcome to{" "}
              <span className={cx("highlight")}>Bird Trading Platform!</span> We
              would like to introduce attractive packages and encourage you to
              buy to receive many special offers. Here is a list of packages and
              the benefits you will get:
            </div>
            <div className={cx("list-package")}>
              {packages.map((item, index) => (
                <div className={cx("package")} key={index}>
                  <div className={cx("desc-package")}>
                    <div className={cx("desc-title")}>{item.packageType}</div>
                  </div>
                  <div className={cx("package-content")}>
                    <div className={cx("package-price")}>
                      <div className={cx("price")}>{item.packageFee.price}</div>
                      <div className={cx("type")}>per {item.packageFee.type}</div>
                    </div>
                    <div className={cx("feature-package")}>
                      {item.packageFeatures.map((feature, i) => (
                        <div className={cx("feature-check")} key={i}>
                          <i
                            className={cx("fa-regular fa-check", "icon-check")}
                          ></i>
                          <span className={cx("text")}>{feature.title}</span>
                        </div>
                      ))}

                      {/* <div className={cx("feature-uncheck")}>
                        <i
                          className={cx("fa-regular fa-xmark", "icon-uncheck")}
                        ></i>
                        <span className={cx("text")}>Free basic tools</span>
                      </div> */}
                    </div>
                    <div className={cx("purchase-package")}>
                      <button className={cx("purchase-btn")}>Purchase</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
