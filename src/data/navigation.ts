import { RoutePath } from "../types/routes";
import { NavItem } from "../components/Menu/types";

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
