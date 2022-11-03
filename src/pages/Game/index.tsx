import "./Game.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

import GameService from "../../services/GameService";
import { Game as IGame, GameUpdateFavorite } from "../../types/api/game";

const Game = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  // 📌 getGame

  const [game, setGame] = useState<IGame | undefined>();

  const { gameId } = useParams();

  const getGameById = async (id: string) => {
    const response = await GameService.getById(id);
    setGame(response);
  };

  useEffect(() => {
    gameId ? getGameById(gameId) : false; // TODO: navigate to 404
  }, []);

  // 📌 toggleFavorite

  // TODO: LOADING + 404

  const toggleFavorite = async (id: string, favorite: boolean) => {
    if (gameId) {
      const body: GameUpdateFavorite = { favorite: favorite ? false : true };
      const response: IGame = await GameService.update(id, body);

      getGameById(gameId);
    }
  };

  // 📌📌📌🚨 GAME return

  return (
    <>
      <div className="generic-page-container">
        <div className="wrapper">
          <Header
            active={false}
            navItems={navigationItems}
            handleNavigation={handleNavigation}
          />

          <main className="game-card">
            <div
              className="game-card-img"
              style={{ backgroundImage: `url(${game?.cover_imgUrl})` }}
            ></div>

            <div className="game-card-info">
              <div className="game-card-info-header">
                <div className="game-card-title-wrapper">
                  <h2 className="game-card-title">{game?.title}</h2>
                  <div
                    className="game-card-favorite-icon clickable"
                    onClick={() =>
                      toggleFavorite(gameId || "", game?.favorite || false)
                    }
                  >
                    {game?.favorite ? (
                      <i className="bi bi-heart-fill"></i>
                    ) : (
                      <i className="bi bi-heart"></i>
                    )}
                  </div>
                </div>
                <div className="game-card-subtitle">
                  <div className="game-card-subtitle-wrapper">
                    <div className="game-card-year">{game?.year}</div>
                    <div className="game-card-genres">
                      {game?.genres.map((genre) => genre.name).join(", ")}
                    </div>
                  </div>
                  <div className="game-card-rating">
                    <div className="game-card-rating-icon">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="game-card-rating-text">
                      {game?.imdbScore}/10
                    </div>
                  </div>
                </div>
              </div>

              <div className="game-card-info-mid-container">
                <div className="game-card-description">{game?.description}</div>
              </div>
            </div>

            <div className="game-card-video-outer-container">
              <div className="game-card-video-inner-container">
                <div className="game-card-video-arrow clickable">
                  <i className="bi bi-chevron-double-left"></i>
                </div>

                {/* TODO: format youtube links */}
                {/* TODO: toggle video */}

                <iframe
                  src="https://www.youtube.com/embed/GJENRAB4ykA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="game-card-video-arrow clickable">
                  <i className="bi bi-chevron-double-right"></i>
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="wrapper">
          <Footer
            active={false}
            navItems={navigationItems}
            handleNavigation={handleNavigation}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
