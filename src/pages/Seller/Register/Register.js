import classNames from 'classnames/bind';

import HeaderForm from '~/layouts/components/HeaderForm';
import Footer from '~/layouts/components/Footer';
import styles from './Register.module.scss'

const cx = classNames.bind(styles)

function Register() {
  return (
    <>
      <HeaderForm text='Seller Register'/>
      <div className={cx("register_wrapper")}>
        <div className={cx("register_container")}>
          <div className={cx("register_form")}>
              <div className={cx("form-header")}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;