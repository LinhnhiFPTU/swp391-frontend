import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import Forget from "~/pages/ForgetPassword";
import About from "~/pages/About";
import Contact from "~/pages/Contact";
import Account from "~/pages/Profile/Account";
import Password from "~/pages/Profile/Password";
import Address from "~/pages/Profile/Address";
import Confirm from "~/pages/Confirm";
import FlashSale from "~/pages/FlashSale";
import Product from "~/pages/Product";
import Shop from "~/pages/Shop";
import ProductSearch from "~/pages/ProductSearch";
import Cart from "~/pages/Cart";
import Category from "~/pages/Category";
import ProductAll from "~/pages/ProductAll";
import Checkout from "~/pages/Checkout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/reset", component: Forget },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/confirm", component: Confirm },
  { path: "/shop", component: Shop },
  { path: "/flash_sale", component: FlashSale },
  { path: "/product", component: Product },
  { path: "/search", component: ProductSearch },
  { path: "/category", component: Category },
  { path: "/products", component: ProductAll },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
];

const privateRoutes = [
  { path: "/user/account/profile", component: Account },
  { path: "/user/account/password", component: Password },
  { path: "/user/account/address", component: Address },
];

export { publicRoutes, privateRoutes };
