import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

import GameCard from "./GameCard";

const Game = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  const { gameId } = useParams();

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

          <GameCard gameId={gameId || ""} />
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
