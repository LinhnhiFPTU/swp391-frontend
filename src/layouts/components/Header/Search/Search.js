import classNames from "classnames/bind";

import styles from "~/layouts/components/Header/Header.module.scss";

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("search-container")}>
      <form action="" className={cx("search-bar")}>
        <input type="text" placeholder="Search your product from here"></input>
        <button type="submit">
          <i className={cx("fa-regular fa-magnifying-glass")}></i>
        </button>
      </form>
    </div>
  );
}

export default Search;
