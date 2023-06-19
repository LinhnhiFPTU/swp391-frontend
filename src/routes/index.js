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
import Purchase from "~/pages/Purchase";
import Cancelled from "~/pages/Purchase/Cancelled";
import Completed from "~/pages/Purchase/Completed";
import Pending from "~/pages/Purchase/Pending";
import Shipping from "~/pages/Purchase/Shipping";
import Seller from "~/pages/Seller";
import Register from "~/pages/Seller/Register";
import Dashboard from "~/pages/SellerPortal/Dashboard";

import OrderMng from "~/pages/SellerPortal/OrderMng";
import PendingOrder from "~/pages/SellerPortal/OrderMng/Pending";
import ShippingOrder from "~/pages/SellerPortal/OrderMng/Shipping";
import CompleteOrder from "~/pages/SellerPortal/OrderMng/Completed";
import CancelOrder from "~/pages/SellerPortal/OrderMng/Cancelled";

import ProductMng from "~/pages/SellerPortal/ProductMng";
import Active from "~/pages/SellerPortal/ProductMng/Active";
import SoldOut from "~/pages/SellerPortal/ProductMng/SoldOut";
import PendingProduct from "~/pages/SellerPortal/ProductMng/Pending";
import Band from "~/pages/SellerPortal/ProductMng/Band";
import AddProduct from "~/pages/SellerPortal/ProductMng/AddProduct";

import ShopMng from "~/pages/SellerPortal/ShopMng";
import SaleMng from "~/pages/SellerPortal/SaleMng";
import Chart from "~/pages/SellerPortal/Chart";

import DashboardAdmin from "~/pages/Admin/Dashboard";
import AdminProductMng from "~/pages/Admin/AdminProductMng";
import AdminShopMng from "~/pages/Admin/AdminShopMng";
import AdminUserMng from "~/pages/Admin/AdminUserMng";



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

  { path: "/purchase/all", component: Purchase },
  { path: "/purchase/pending", component: Pending },
  { path: "/purchase/shipping", component: Shipping },
  { path: "/purchase/complete", component: Completed },
  { path: "/purchase/cancel", component: Cancelled },

  { path: "/seller", component: Seller },
  { path: "/seller/register", component: Register },
  { path: "/seller/portal/dashboard", component: Dashboard },

  { path: "/seller/portal/order/all", component: OrderMng },
  { path: "/seller/portal/order/pending", component: PendingOrder },
  { path: "/seller/portal/order/shipping", component: ShippingOrder },
  { path: "/seller/portal/order/complete", component: CompleteOrder },
  { path: "/seller/portal/order/cancel", component: CancelOrder },

  { path: "/seller/portal/product/all", component: ProductMng },
  { path: "/seller/portal/product/active", component: Active },
  { path: "/seller/portal/product/soldout", component: SoldOut },
  { path: "/seller/portal/product/pending", component: PendingProduct },
  { path: "/seller/portal/product/band", component: Band },
  { path: "/seller/portal/product/new", component: AddProduct },

  { path: "/seller/portal/shop", component: ShopMng },
  { path: "/seller/portal/finance", component: SaleMng },
  { path: "/seller/portal/chart", component: Chart },

  { path: "/admin/portal/dashboard", component: DashboardAdmin},
  { path: "/admin/portal/usermng", component: AdminUserMng},
  { path: "/admin/portal/shopmng", component: AdminShopMng},
  { path: "/admin/portal/productmng", component: AdminProductMng},

];

const privateRoutes = [
  { path: "/user/account/profile", component: Account },
  { path: "/user/account/password", component: Password },
  { path: "/user/account/address", component: Address },
];

export { publicRoutes, privateRoutes };
