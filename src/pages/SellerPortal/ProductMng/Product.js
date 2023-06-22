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

const products = [
  {
    productId: 0,
    productStatus: "Pending",
    listImage: [
      "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71+4X8orK7L._AC_SL1500_.jpg",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    productName: "Prevue Pet Products Travel Carrier for Birds, Black",
    productCategory: "Bird Cage",
    productPrice: 1200,
    productQuantity: 100,
    productDescription:
      "Easy to Use: The bird travel cage is an ideal solution for short-term traveling or emergency situations to the vet. The bird-proof door lock prevents your bird from escaping while the comfortable design helps your pet feel at home.",
  },
  {
    productId: 1,
    productStatus: "Active",
    listImage: [
      "https://m.media-amazon.com/images/I/71tMJsLvMSL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61NweC6UrjL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61G1aiEd2aL._AC_SL1200_.jpg",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    productName:
      "FOIBURELY Bird Nest Canary Finch Parrot Nest with Felt（4.5 inches）",
    productCategory: "Bird Accessory",
    productPrice: 2000,
    productQuantity: 55,
    productDescription:
      "Products include: a multi-functional plastic frame, a bird's nest and a wool felt mat. Fine workmanship, imitating the natural bird's nest, wool felt cushion is comfortable, warm and breathable.",
  },
  {
    productId: 2,
    productStatus: "Sold out",
    listImage: [
      "https://m.media-amazon.com/images/I/71SwSh8H46L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61r1QAoldBL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61b+yBJdFyL._AC_SL1000_.jpg  ",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    productName:
      "Pretty Bird International Species Specific African Bird Food- 8-Pound",
    productCategory: "Bird Food",
    productPrice: 890,
    productQuantity: 0,
    productDescription:
      "Premium Bird Food Is Designed For Most African Species, Medium And Large Conures, Contains Higher Calcium  14-Percent Protein And 8-Percent Fat In Medium Sized Morsels Available In 8-Pounds",
  },
  {
    productId: 3,
    productStatus: "Pending",
    listImage: [
      "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71+4X8orK7L._AC_SL1500_.jpg",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    productName: "Prevue Pet Products Travel Carrier for Birds, Black",
    productCategory: "Bird Cage",
    productPrice: 1200,
    productQuantity: 100,
    productDescription:
      "Easy to Use: The bird travel cage is an ideal solution for short-term traveling or emergency situations to the vet. The bird-proof door lock prevents your bird from escaping while the comfortable design helps your pet feel at home.",
  },
  {
    productId: 4,
    productStatus: "Band",
    listImage: [
      "https://m.media-amazon.com/images/I/71tMJsLvMSL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61NweC6UrjL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61G1aiEd2aL._AC_SL1200_.jpg",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    productName:
      "FOIBURELY Bird Nest Canary Finch Parrot Nest with Felt（4.5 inches）",
    productCategory: "Bird Accessory",
    productPrice: 2000,
    productQuantity: 55,
    productDescription:
      "Products include: a multi-functional plastic frame, a bird's nest and a wool felt mat. Fine workmanship, imitating the natural bird's nest, wool felt cushion is comfortable, warm and breathable.",
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
            } else {
              setTypeSort(item.title);
              setTitleFilter(item.title);
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
              <div className={cx("product-count")}>{products.length} {products.length > 1 ? "Products" : "Product"}</div>
              <div className={cx("product-options")}>
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
                              setTitleFilter("Filter");
                            }}
                          />
                        )}
                        {renderItems()}
                      </PopperWrapper>
                    </div>
                  )}
                >
                  <div className={cx("filter-product")}>
                    <span
                      className={
                        titleFilter === "Filter"
                          ? cx("sort-title")
                          : cx("sort-title-active")
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
                <div className={cx("product-add")}>
                  <Link
                    to="/seller/portal/product/new"
                    className={cx("add-btn")}
                  >
                    <i
                      className={cx("fa-sharp fa-light fa-plus", "add-icon")}
                    ></i>
                    Add new product
                  </Link>
                </div>
              </div>
            </div>
            <div className={cx("product-table")}>
              <Table products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
