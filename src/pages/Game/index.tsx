import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

import GameCard from "./GameCard";
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

    if (response._id) {
      setGame(response);
    } else {
      navigate(RoutePath.NOTFOUND);
    }
  };

  useEffect(() => {
    if (gameId) {
      getGameById(gameId);
    }
  }, []);

  // 📌 toggleFavorite

  // TODO: LOADING

  const toggleFavorite = async (id: string, favorite: boolean) => {
    if (gameId) {
      const body: GameUpdateFavorite = { favorite: favorite ? false : true };
      const response: IGame = await GameService.update(id, body);

      response._id ? getGameById(gameId) : navigate(RoutePath.NOTFOUND);
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

          {game && <GameCard game={game} toggleFavorite={toggleFavorite} />}
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
