import { RoutePath } from "../../types/routes";

export interface NavItem {
  icon: String;
  path: RoutePath;
}

export interface MenuProps {
  active: RoutePath | false;
  navItems: NavItem[];
}
