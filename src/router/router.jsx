import MyAccount from "../pages/My_Account";
import Blog from "../pages/blog";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import ContactUs from "../pages/contactus";
import HomePage from "../pages/home";
import myaccount from "../pages/myaccount";
import OrderDetail from "../pages/orderdetail";
import OurStory from "../pages/ourstory";
import PostDetail from "../pages/postdetail";
import ShopPage from "../pages/shop";
import ShopDetail from "../pages/shopdetail";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  SHOP: "ShopRoute",
  SHOP_DETAIL: "ShopDetailRoute",
  CONTRACT_US: "ContactUsRoute",
  MY_ACCOUNT: "MyAccountRoute",
  my_account: "myaccountRoute",
  BLOG: "BlogRoute",
  POST_DETAIL: "PostDetailRoute",
  OUR_STORY: "OurStoryRoute",
  ORDER_DETAIL: "OrderDetailRoute",
  CART: "CartRoute",
  CHECK_OUT: "CheckoutRoute",
};

export const PATHNAME_LIST = {
  HOME: "/",
  SHOP: "/Shop",
  SHOP_DETAIL: "/shop/detail",
  BLOG: "/Blog",
  OUR_STORY: "/Ourstory",
  SEARCH: "/Search",
  CART: "/Cart",
  MY_ACCOUNT: "/MyAccount",
  ORDER_DETAIL: "/MyAccount/order-detail",
  my_account: "/my_account",
  CONTRACT_US: "/contact",
  POST_DETAIL: "/Blog/post-detail",
  CHECK_OUT: "/Cart/checkout",
};

export const LAYOUT_TYPE = {
  LAYOUT_DEFAULT: 1,
  LAYOUT_SIDE_BAR: 2,
  LAYOUT_SIDE_BAR_BLOG: 3,
};

export const DEFAULT_PATHNAME = PATHNAME_LIST.HOME;

// Define routes
export const HomeRoute = {
  id: ROUTE_ID.HOME,
  path: PATHNAME_LIST.HOME,
  component: HomePage,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const ShopRoute = {
  id: ROUTE_ID.SHOP,
  path: PATHNAME_LIST.SHOP,
  component: ShopPage,
  layout: LAYOUT_TYPE.LAYOUT_SIDE_BAR,
};

export const ShopDetailRoute = {
  id: ROUTE_ID.SHOP_DETAIL,
  path: PATHNAME_LIST.SHOP_DETAIL,
  component: ShopDetail,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const ContactUsRoute = {
  id: ROUTE_ID.CONTRACT_US,
  path: PATHNAME_LIST.CONTRACT_US,
  component: ContactUs,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const myaccountRoute = {
  id: ROUTE_ID.my_account,
  path: PATHNAME_LIST.my_account,
  component: myaccount,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const MyAccountRoute = {
  id: ROUTE_ID.MY_ACCOUNT,
  path: PATHNAME_LIST.MY_ACCOUNT,
  component: MyAccount,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const BlogRoute = {
  id: ROUTE_ID.MY_ACCOUNT,
  path: PATHNAME_LIST.BLOG,
  component: Blog,
  layout: LAYOUT_TYPE.LAYOUT_SIDE_BAR_BLOG,
};

export const PostDetailRoute = {
  id: ROUTE_ID.POST_DETAIL,
  path: PATHNAME_LIST.POST_DETAIL,
  component: PostDetail,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const OurStoryRoute = {
  id: ROUTE_ID.OUR_STORY,
  path: PATHNAME_LIST.OUR_STORY,
  component: OurStory,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const OrderDetailRoute = {
  id: ROUTE_ID.ORDER_DETAIL,
  path: PATHNAME_LIST.ORDER_DETAIL,
  component: OrderDetail,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const CartRoute = {
  id: ROUTE_ID.CART,
  path: PATHNAME_LIST.CART,
  component: Cart,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const CheckoutRoute = {
  id: ROUTE_ID.CHECK_OUT,
  path: PATHNAME_LIST.CHECK_OUT,
  component: Checkout,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const appRoute = [
  HomeRoute,
  ShopRoute,
  ShopDetailRoute,
  ContactUsRoute,
  myaccountRoute,
  MyAccountRoute,
  BlogRoute,
  PostDetailRoute,
  OurStoryRoute,
  OrderDetailRoute,
  CartRoute,
  CheckoutRoute,
];
