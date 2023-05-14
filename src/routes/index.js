
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from '~/pages/Signup'
import Forget from '~/pages/ForgetPassword'
import Verify from '~/pages/Verify'
import NewPassword from '~/pages/NewPassword'


const publicRoutes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/signup', component: Signup},
  { path: '/forget', component: Forget},
  { path: '/verify', component: Verify},
  { path: '/reset', component: NewPassword},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }