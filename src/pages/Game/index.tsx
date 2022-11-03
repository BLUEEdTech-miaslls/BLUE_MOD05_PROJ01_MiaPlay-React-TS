import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import { RoutePath } from "../../routers/routes";
import { navigationItems } from "../../components/Menu/navigation";

import GameCard from "./GameCard";

const Game = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  const { gameId } = useParams();

  const [showLoading, setShowLoading] = useState<boolean>(true);

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

          {/* {!showLoading && ( */}
          <GameCard
            gameId={gameId || ""}
            showLoading={showLoading}
            setShowLoading={setShowLoading}
          />
          {/* )} */}

          {showLoading && <Loading />}
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
