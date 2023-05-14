
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from '~/pages/Signup'
import Forget from '~/pages/ForgetPassword'

const publicRoutes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/signup', component: Signup},
  { path: '/reset', component: Forget},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }