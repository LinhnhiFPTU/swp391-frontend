import classNames from "classnames/bind";

import HeaderSeller from "~/layouts/components/HeaderSeller";
import SideBar from "~/pages/SellerPortal/SideBar";
import NavBar from "../NavBar";
import OrderData from "./OrderData";

import styles from "./ContactOrder.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function ContactOrder() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        axios
            .get("/api/v1/shop/orders/search?filter=SPECIAL_SHOP&page=" + page)
            .then((res) => setOrders(res.data))
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        document.title = "Seller Centre";
    }, []);
    return (
        <>
            <HeaderSeller title="Contact Order"/>
            <div className={cx("order_wrapper")}>
                <div className={cx("order_sidebar")}>
                    <SideBar/>
                </div>
                <div className={cx("order_container")}>
                    <div className={cx("order_content")}>
                        <NavBar/>
                        <div className={cx("order_search")}>
                            <div className={cx("type-search")}>Code orders</div>
                            <form className={cx("form-search")}>
                                <div className={cx("search-input")}>
                                    <input
                                        type="text"
                                        placeholder="Code"
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
                        <div className={cx("order_count")}>0 Orders</div>
                        <OrderData orders={orders}/>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactOrder;
