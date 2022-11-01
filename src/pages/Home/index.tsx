import "./Home.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameList from "./GameList";

import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

const Home = () => {
  return (
    <>
      <Header active={RoutePath.HOME} navItems={navigationItems} />
      <main className="game-lists">
        <GameList />
        <GameList />
        <GameList />
      </main>
      <Footer active={RoutePath.HOME} navItems={navigationItems} />
    </>
  );
};

export default Home;
