import HomePage from "../pages/home";
import ShopPage from "../pages/shop";
import ShopDetail from "../pages/shopdetail";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  SHOP: "ShopRoute",
  SHOP_DETAIL: "ShopDetailRoute",
};

export const PATHNAME_LIST = {
  HOME: "/",
  SHOP: "/Shop",
  SHOP_DETAIL: "/shop/detail",
  BLOG: "/Blog",
  OUR_STORY: "/Ourstory",
  SEARCH: "/Search",
  CART: "/Cart",
  USER: "/User",
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

export const appRoute = [HomeRoute, ShopRoute, ShopDetailRoute];
