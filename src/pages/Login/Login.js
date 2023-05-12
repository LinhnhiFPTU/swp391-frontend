import classNames from "classnames/bind";

import HeaderForm from "~/layouts/components/HeaderForm";
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function Login() {
  return (
    <div className={cx('wrapper')}>
      <HeaderForm />
      <div className={cx('container')}>
        <h1>Login</h1>  
      </div>
    </div>
  );
}

export default Login;
