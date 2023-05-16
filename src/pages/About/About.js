import Header from '~/layouts/components/Header'
import classNames from "classnames/bind";

import styles from "./About.module.scss";
const cx = classNames.bind(styles);
function About() {
    return (
        <div className={cx('about-wrapper')}>
            <Header />
            
        </div>

    );
}
export default (About);