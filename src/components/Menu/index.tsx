import "./Menu.css";

import { MenuProps } from "./types";

const Menu = ({ active, navItems }: MenuProps) => {
  return (
    <>
      <nav className="menu">
        {navItems.map((item, index) => (
          <div
            key={`menu-item-${index}`}
            className={`menu-item ${
              item.path === active ? "menu-item-active" : "clickable"
            }`}
          >
            <i className={`bi bi-${item.icon}`}></i>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Menu;
