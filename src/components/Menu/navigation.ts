import { RoutePath } from "../../routers/routes";
import { NavItem } from "./types";

export const navigationItems: NavItem[] = [
  {
    icon: "house",
    path: RoutePath.HOME,
  },
  {
    icon: "sliders",
    path: RoutePath.ADMIN,
  },
  {
    icon: "person",
    path: RoutePath.LOGIN,
  },
];
