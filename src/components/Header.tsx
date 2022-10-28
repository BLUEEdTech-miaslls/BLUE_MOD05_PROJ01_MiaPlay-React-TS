import "../styles/Header.css";

import avatar1 from "../assets/avatars/100/avatar-1.png";

const Header = () => {
  return (
    <>
      <header>
        {/* <div className="header-left">
          <img src={avatar1} alt="profile icon" />
        </div> */}
        <div className="header-right">
          <h1>
            Mia<span>Play</span>
          </h1>

          <nav className="main-menu">
            {/* <div className="main-menu-item clickable">
              <i className="bi bi-person"></i>
            </div> */}
            <div className="main-menu-item clickable">
              <i className="bi bi-sliders"></i>
            </div>
            <div className="main-menu-item clickable">
              <i className="bi bi-house"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
