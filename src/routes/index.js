
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from '~/pages/Signup'


const publicRoutes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/signup', component: Signup},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }