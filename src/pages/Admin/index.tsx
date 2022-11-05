import "./Admin.css";

import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routers/routes";
import { navigationItems } from "../../components/Menu/navigation";

import { Game } from "../../api/types/game";
import GameService from "../../api/services/GameService";
import AdminGameList from "./AdminGameList";

import { Genre } from "../../api/types/genre";
import GenreService from "../../api/services/GenreService";
import AdminGenreList from "./AdminGenreList";

const Admin = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  const [showLoading, setShowLoading] = useState<boolean>(true);

  // 📌 GAMES

  const [games, setGames] = useState<Game[]>([]);

  const getAllGames = async () => {
    setShowLoading(true);

    const response = await GameService.getAll();

    response.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );

    setGames(response);
    setShowLoading(false);
  };

  useEffect(() => {
    getAllGames();
  }, []);

  // 📌 GENRES

  const [genres, setGenres] = useState<Genre[]>([]);

  const getAllGenres = async () => {
    setShowLoading(true);

    const response = await GenreService.getAll();

    response.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setGenres(response);
    setShowLoading(false);
  };

  useEffect(() => {
    getAllGenres();
  }, []);

  // 📌📌📌🚨 ADMIN return

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
            {!showLoading && <AdminGameList games={games} />}

            <aside>
              {!showLoading && <AdminGenreList genres={genres} />}

              {!showLoading && (
                <section className="admin-section admin-users-container">
                  <h2>users</h2>
                  <p>(placeholder)</p>
                </section>
              )}
            </aside>
          </main>

          {showLoading && <Loading />}
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
