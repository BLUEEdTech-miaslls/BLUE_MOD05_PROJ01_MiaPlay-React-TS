import "./Footer.css";

import Menu from "../Menu";
import { MenuProps } from "../Menu/types";

const Footer = ({ active, navItems, onNavigate }: MenuProps) => {
  return (
    <>
      <footer>
        <div className="footer-menu">
          <Menu active={active} navItems={navItems} onNavigate={onNavigate} />
        </div>
        <h1 className="footer-title">
          Mia<span>Play</span>
        </h1>
      </footer>
    </>
  );
};
export default Footer;
