import { RoutePath } from "../types/routes";
import { NavItem } from "../components/Menu/types";

export const navigationItems: NavItem[] = [
  {
    icon: "person",
    path: RoutePath.LOGIN,
  },
  {
    icon: "sliders",
    path: RoutePath.ADMIN,
  },
  {
    icon: "house",
    path: RoutePath.HOME,
  },
];
