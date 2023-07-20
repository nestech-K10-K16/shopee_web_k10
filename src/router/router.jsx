import ContactUs from "../pages/contactus";
import HomePage from "../pages/home";
import MyAccount from "../pages/myaccount";
import ShopPage from "../pages/shop";
import ShopDetail from "../pages/shopdetail";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  SHOP: "ShopRoute",
  SHOP_DETAIL: "ShopDetailRoute",
  CONTRACT_US: "ContactUsRoute",
  MY_ACCOUNT: "MyAccountRoute",
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
  CONTRACT_US: "/contact",
};

export const LAYOUT_TYPE = {
  LAYOUT_DEFAULT: 1,
  LAYOUT_SIDE_BAR: 2,
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

export const MyAccountRoute = {
  id: ROUTE_ID.MY_ACCOUNT,
  path: PATHNAME_LIST.MY_ACCOUNT,
  component: MyAccount,
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const appRoute = [
  HomeRoute,
  ShopRoute,
  ShopDetailRoute,
  ContactUsRoute,
  MyAccountRoute,
];
