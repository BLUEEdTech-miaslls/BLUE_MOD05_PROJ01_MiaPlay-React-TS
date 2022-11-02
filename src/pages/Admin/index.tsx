import "./Admin.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdminGameListItem from "./AdminGameListItem";

import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

const Admin = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  return (
    <>
      <div className="generic-page-container">
        <div className="wrapper">
          <Header
            active={RoutePath.ADMIN}
            navItems={navigationItems}
            handleNavigation={handleNavigation}
          />
          <main className="admin-page-container">
            <section className="admin-section admin-games-container">
              <div className="admin-section-header">
                <div className="admin-header-wrapper">
                  <h2>games</h2>

                  <div className="admin-header-icon-wrapper">
                    <div className="admin-header-icon clickable">
                      <i className="bi bi-pencil"></i>
                    </div>

                    <div className="admin-header-icon clickable">
                      <i className="bi bi-plus-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="admin-game-list">
                <AdminGameListItem />
                <AdminGameListItem />
                <AdminGameListItem />
                <AdminGameListItem />
                <AdminGameListItem />
              </ul>
            </section>

            <aside>
              <section className="admin-section admin-genres-container">
                <div className="admin-section-header">
                  <div className="admin-header-wrapper">
                    <h2>genres</h2>

                    <div className="admin-header-icon-wrapper">
                      <div className="admin-header-icon clickable">
                        <i className="bi bi-pencil"></i>
                      </div>

                      <div className="admin-header-icon clickable">
                        <i className="bi bi-plus-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="admin-genre-list">
                  <div className="admin-genre-list-item">
                    <div className="admin-genre-name">genre</div>
                    <div className="admin-genre-options-icon clickable">
                      <i className="bi bi-x"></i>
                    </div>
                  </div>

                  <div className="admin-genre-list-item">
                    <div className="admin-genre-name">sandbox</div>
                    <div className="admin-genre-options-icon clickable">
                      <i className="bi bi-x"></i>
                    </div>
                  </div>

                  <div className="admin-genre-list-item">
                    <div className="admin-genre-name">shooter</div>
                    <div className="admin-genre-options-icon clickable">
                      <i className="bi bi-x"></i>
                    </div>
                  </div>

                  <div className="admin-genre-list-item">
                    <div className="admin-genre-name">MOBA</div>
                    <div className="admin-genre-options-icon clickable">
                      <i className="bi bi-x"></i>
                    </div>
                  </div>

                  <div className="admin-genre-list-item">
                    <div className="admin-genre-name">action</div>
                    <div className="admin-genre-options-icon clickable">
                      <i className="bi bi-x"></i>
                    </div>
                  </div>

                  <div className="admin-genre-list-item">
                    <div className="admin-genre-name">RPG</div>
                    <div className="admin-genre-options-icon clickable">
                      <i className="bi bi-x"></i>
                    </div>
                  </div>

                  <div className="admin-genre-list-item">
                    <div className="admin-genre-name">simulation</div>
                    <div className="admin-genre-options-icon clickable">
                      <i className="bi bi-x"></i>
                    </div>
                  </div>
                </div>
              </section>

              <section className="admin-section admin-users-container">
                <h2>users</h2>
                <p>(placeholder)</p>
              </section>
            </aside>
          </main>
        </div>
        <Footer
          active={RoutePath.ADMIN}
          navItems={navigationItems}
          handleNavigation={handleNavigation}
        />
      </div>
    </>
  );
};

export default Admin;
