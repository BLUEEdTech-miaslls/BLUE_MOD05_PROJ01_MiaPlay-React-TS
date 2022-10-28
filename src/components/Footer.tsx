import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <nav className="footer-menu">
          {/* <div className="footer-menu-item clickable">
            <i className="bi bi-person"></i>
          </div> */}
          <div className="footer-menu-item clickable">
            <i className="bi bi-sliders"></i>
          </div>
          <div className="footer-menu-item clickable">
            <i className="bi bi-house"></i>
          </div>
        </nav>
        <h1 className="footer-title">
          Mia<span>Play</span>
        </h1>
      </footer>
    </>
  );
};
export default Footer;
