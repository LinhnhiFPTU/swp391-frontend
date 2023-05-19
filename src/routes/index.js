
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from '~/pages/Signup'
import Forget from '~/pages/ForgetPassword'
import About from '~/pages/About'
import Contact from '~/pages/Contact'
import Profile from "~/pages/Profile";
import Password from "~/pages/Profile/Password";


const publicRoutes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/signup', component: Signup},
  { path: '/reset', component: Forget},
  { path: '/about', component: About},
  { path: '/contact', component: Contact},
  { path: '/profile', component: Profile},
  { path: '/user-password', component: Password},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }