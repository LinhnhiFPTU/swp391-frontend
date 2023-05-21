
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from '~/pages/Signup'
import Forget from '~/pages/ForgetPassword'
import About from '~/pages/About'
import Contact from '~/pages/Contact'
import Account from "~/pages/Profile/Account";
import Password from "~/pages/Profile/Password";
import Address from "~/pages/Profile/Address"
import Confirm from '~/pages/Confirm'
import Popup from '~/layouts/components/AddressPopup'


const publicRoutes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/signup', component: Signup},
  { path: '/reset', component: Forget},
  { path: '/about', component: About},
  { path: '/contact', component: Contact},
  { path: '/user/account/profile', component: Account},
  { path: '/user/account/password', component: Password},
  { path: '/user/account/address', component: Address},
  { path: '/confirm', component: Confirm},
  { path: '/popup', component: Popup},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }