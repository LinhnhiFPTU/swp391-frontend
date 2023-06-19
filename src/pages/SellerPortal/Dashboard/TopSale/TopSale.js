import classNames from "classnames/bind";

import styles from "./TopSale.module.scss";

const cx = classNames.bind(styles);

const products = [
  {
    id: 0,
    image: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    sold: 1241,
  },
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/81OfgffymML._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    sold: 798,
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61Dq2+9h7xL._AC_SL1081_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    sold: 465,
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71tMJsLvMSL._AC_SL1200_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    sold: 243,
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/71XKmGkVUOL._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    sold: 165,
  },
];

function TopSale() {
  return (
    <>
      {products.map((product) => (
        <div className={cx("product")} key={product.id}>
          <div className={cx("product-info")}>
            <img
              src={product.image}
              alt="product-img"
              className={cx("product-img")}
            />
            <div className={cx("product-detail")}>
              <div className={cx("product-name")}>{product.name}</div>
              <div className={cx("product-price")}>${product.price}</div>
            </div>
          </div>
          <div className={cx("sold")}>
            {(() => {
              let rs = "";
              if (product.sold >= 1000) {
                const sold = product.sold / 1000;
                const rounded = Math.round(sold * 10) / 10;
                return (rs += rounded + "k");
              } else {
                return (rs += product.sold);
              }
            })()}{" "}
            Sold
          </div>
        </div>
      ))}
    </>
  );
}

export default TopSale;
