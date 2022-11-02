import "./Home.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameList from "./GameList";

import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

import { GenreGameList } from "../../types/api/genreGameList";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  const [genreGameLists, setGenreameLists] = useState<GenreGameList[] | []>([]);

  return (
    <>
      <Header
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
      />

      <main className="game-lists">
        {genreGameLists.map((list, index) => (
          <GameList key={`game-list-${index}`} list={list} />
        ))}
      </main>

      <Footer
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
      />
    </>
  );
};

export default Home;
