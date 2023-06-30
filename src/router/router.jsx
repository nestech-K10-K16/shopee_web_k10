import HomePage from "../pages/home";
import ShopPage from "../pages/shop";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  SHOP: "ShopRoute",
};

export const PATHNAME_LIST = {
  HOME: "/",
  SHOP: "/shop",
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
  layout: LAYOUT_TYPE.LAYOUT_DEFAULT,
};

export const appRoute = [HomeRoute, ShopRoute];
