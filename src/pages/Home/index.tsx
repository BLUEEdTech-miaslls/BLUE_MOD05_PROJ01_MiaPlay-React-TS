import "./Home.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameList from "./GameList";

import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  return (
    <>
      <Header
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
      />
      <main className="game-lists">
        <GameList />
        <GameList />
        <GameList />
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
