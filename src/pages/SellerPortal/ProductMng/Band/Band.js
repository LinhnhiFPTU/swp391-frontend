import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "../NavBar";
import CountFilter from "../CountFilter";
import Table from "../Table";

import styles from "./Band.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Ban() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [headerTitle, setHeaderTitle] = useState("");

    useEffect(() => {
        let fil = headerTitle.toLowerCase()
            ? headerTitle.toLowerCase() + "." + filter
            : "default";
        axios
            .get("/api/v1/shop/products/ban?page=" + page + "&filter=" + fil)
            .then((res) => {
                setProducts(res.data.filter((item, index) => index < 5));
            })
            .catch((e) => console.log(e));
    }, [filter]);

    useEffect(() => {
        document.title = "Seller Centre";
    }, []);

    return (
        <>
            <HeaderSeller title="Product Band"/>
            <div className={cx("product_wrapper")}>
                <div className={cx("product_sidebar")}>
                    <SideBar/>
                </div>
                <div className={cx("product_container")}>
                    <div className={cx("product_content")}>
                        <NavBar/>
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
                        <CountFilter
                            count={products.length}
                            setFilter={setFilter}
                            headerTitle={headerTitle}
                            setHeaderTitle={setHeaderTitle}
                        />
                        <div className={cx("product-table")}>
                            <Table products={products}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ban;
