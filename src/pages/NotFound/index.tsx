import "./NotFound.css";

import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  return (
    <>
      <div className="generic-page-container">
        <div className="wrapper">
          <Header
            active={false}
            navItems={navigationItems}
            handleNavigation={handleNavigation}
          />

          <main className="not-found-page-container">
            <div className="code-404">404</div>
            <h2 className="not-found">
              <span>Not</span> Found
            </h2>
          </main>
        </div>
        <Footer
          active={false}
          navItems={navigationItems}
          handleNavigation={handleNavigation}
        />
      </div>
    </>
  );
};

export default NotFound;
