import classNames from "classnames/bind";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { Link } from "react-router-dom";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "./NavBar";
import HeaderFilter from "./HeaderFilter";
import Table from "./Table";

import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

const items = [
  {
    title: "Name",
    children: {
      data: [
        {
          title: "A-Z",
        },
        {
          title: "Z-A",
        },
      ],
    },
  },
  {
    title: "Price",
    children: {
      data: [
        {
          title: "High to Low",
        },
        {
          title: "Low to High",
        },
      ],
    },
  },
  {
    title: "Quantity",
    children: {
      data: [
        {
          title: "Ascending",
        },
        {
          title: "Descending",
        },
      ],
    },
  },
];

function Product() {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const [headerTitle, setHeaderTitle] = useState("");
  const [typeSort, setTypeSort] = useState("");
  const [titleFilter, setTitleFilter] = useState("Filter");

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <div
          className={cx("option")}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
              setHeaderTitle(item.title);
            }else {
              setTypeSort(item.title)
              setTitleFilter(item.title)
            }
          }}
        >
          {item.title}
        </div>
      );
    });
  };

  return (
    <>
      <HeaderSeller title="Product" />
      <div className={cx("product_wrapper")}>
        <div className={cx("product_sidebar")}>
          <SideBar />
        </div>
        <div className={cx("product_container")}>
          <div className={cx("product_content")}>
            <NavBar />
            <div className={cx("product-search")}>
              <div className={cx("product-type")}>Product name</div>
              <form className={cx("form-search")}>
                <div className={cx("search-input")}>
                  <input
                    type="text"
                    placeholder="Product name"
                    spellCheck={false}
                    className={cx("input")}
                  />
                  <i
                    className={cx(
                      "fa-light fa-magnifying-glass",
                      "search-icon"
                    )}
                  ></i>
                </div>
                <button type="submit" className={cx("search-btn")}>
                  Search
                </button>
              </form>
            </div>
            <div className={cx("product-manage")}>
              <div className={cx("product-count")}>0 Product</div>
              <div className={cx("product-options")}>
                <div className={cx("product-add")}>
                  <Link to = "/seller/portal/product/new" className={cx("add-btn")}>
                    <i
                      className={cx("fa-sharp fa-light fa-plus", "add-icon")}
                    ></i>
                    Add new product
                  </Link>
                </div>
                <Tippy
                  interactive
                  delay={[0, 300]}
                  placement="bottom-end"
                  render={(attrs) => (
                    <div
                      className={cx("sort-options")}
                      tabIndex="-1"
                      {...attrs}
                    >
                      <PopperWrapper>
                        {history.length > 1 && (
                          <HeaderFilter
                            title={headerTitle}
                            onBack={() => {
                              setHistory((prev) =>
                                prev.slice(0, prev.length - 1)
                              );
                              setTitleFilter("Filter")
                            }}
                          />
                        )}
                        {renderItems()}
                      </PopperWrapper>
                    </div>
                  )}
                >
                  <div className={cx("filter-product")}>
                    <span className={titleFilter === "Filter" ? cx("sort-title") : cx("sort-title-active")}>{titleFilter}</span>
                    <i
                      className={cx(
                        "fa-sharp fa-light fa-chevron-down",
                        "down-icon"
                      )}
                    ></i>
                  </div>
                </Tippy>
              </div>
            </div>
            <div className={cx("product-table")}>
              <Table/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
