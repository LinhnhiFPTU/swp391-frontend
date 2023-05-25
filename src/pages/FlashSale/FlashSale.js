import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";

import Header from "~/layouts/components/Header/";
import Footer from "~/layouts/components/Footer/";
import banner from "~/assets/images/banner.png";
import birdFood from "~/assets/images/bird-food.png"
import styles from "./FlashSale.module.scss";

const cx = classNames.bind(styles);


const filterBtns = ["birds", "foods", "medicines", "cages", "accessories"];
function FlashSale() {
  const [type, setType] = useState("birds");
  const [second,setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const timeID = useRef();

  useEffect(() => {
    let now2 = new Date();
    now2.setHours(now2.getHours() + 1);
    now2.setMinutes(0);
    now2.setSeconds(0);
    let end = now2.getTime();
    timeID.current = setInterval(() => {
      let now = new Date().getTime();
      let distance = end - now;

      let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      let second = Math.floor((distance % (60 * 1000)) / 1000);
      setMinute(minute)
      setSecond(second)
    }, 1000);
    return () => {
      clearInterval(timeID.current);
    };
  });

  // useEffect(() => {
  //   if (countdown.minute === 0 && countdown.second === 0) {
  //     setMinute(30);
  //     setSecond(59);
  //   }
  // }, [countdown.minute, countdown.second]);

  return (
    <>
      <Header />
      <div className={cx("flash_sale-wrapper")}>
        <div className={cx("flash_sale-container")}>
          <div className={cx("flash_sale-countdown")}>
            <div className={cx("flash_sale-countdown-content")}>
              <div className={cx("flash_sale-head")}>
                <span className={cx("flash_sale-text1")}>
                  F<i className={cx("fa-solid fa-bolt-lightning")}></i>
                  ASH <span className={cx("flash_sale-text2")}>SALE</span>
                </span>
              </div>
              <div className={cx("flash_sale-countdown-end")}>
                <i className={cx("fa-light fa-clock", "clock-icon")}></i>
                <span>ENDS IN</span>
              </div>
              <div className={cx("flash_sale-countdown-time")}>
                <span className={cx("countdown-minute")}>
                  {minute < 10
                    ? "0" + minute
                    : minute}
                </span>
                <span className={cx("countdown-second")}>
                  {second < 10
                    ? "0" + second
                    : second}
                </span>
              </div>
            </div>
          </div>
          <div className={cx("flash_sale-banner")}>
            <img src={banner} alt="flash_sale-img" />
          </div>
          <div className={cx("flash_sale-filter")}>
            {filterBtns.map((btn) => (
              <button
                className={
                  type === btn
                    ? cx("filter-bird-btn-active")
                    : cx("filter-bird-btn")
                }
                key={btn}
                onClick={() => setType(btn)}
              >
                {btn.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={cx("flash_sale-list")}>
            <div className={cx("flash_sale-product")}>
                <div className={cx("product-name")}>
                </div>
                <div className={cx("product-rating")}>

                </div>
                <div className={cx("product-price")}>

                </div>
                <div className={cx("product-feature")}>

                </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FlashSale;
