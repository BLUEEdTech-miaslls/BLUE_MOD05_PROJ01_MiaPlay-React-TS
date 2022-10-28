import "./Home.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameList from "./GameList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="game-lists">
        <GameList />
        <GameList />
        <GameList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
