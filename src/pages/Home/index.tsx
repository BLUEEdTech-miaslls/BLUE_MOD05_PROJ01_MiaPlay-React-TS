import "./Home.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

import GameList from "./GameList";
import GenreGameListService from "../../services/GenreGameListService";
import { GenreGameList } from "../../types/api/genreGameList";

import GameService from "../../services/GameService";
import { Game } from "../../types/api/game";

const Home = () => {
  // 📌 Menu navigation

  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  // 📌 getGameLists

  const [showEmptyNotice, setShowEmptyNotice] = useState<boolean>(false);
  const [genreGameLists, setGenreGameLists] = useState<
    GenreGameList[] | undefined
  >([]);

  const getGameLists = async () => {
    const response = await GenreGameListService.getAll();

    response.length === 0
      ? setShowEmptyNotice(true)
      : response.sort((a, b) =>
          a.genre.name > b.genre.name ? 1 : b.genre.name > a.genre.name ? -1 : 0
        );

    setGenreGameLists(response);
  };

  useEffect(() => {
    getGameLists();
  }, []);

  // 📌 getFavoriteGames

  interface FavoriteGameList {
    name: "favorite games";
    games: Game[];
  }

  const [favoriteGames, setFavoriteGames] = useState<
    FavoriteGameList | undefined
  >();

  const getFavoriteGames = async () => {
    const response = await GameService.getAll();
    const filteredGames = response.filter((game) => game.favorite === true);

    filteredGames.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );

    const newFavoriteGames: FavoriteGameList = {
      name: "favorite games",
      games: filteredGames,
    };

    setFavoriteGames(newFavoriteGames);
  };

  useEffect(() => {
    getFavoriteGames();
  }, []);

  // 📌📌📌🚨 HOME return

  return (
    <>
      <Header
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
      />

      <main className="game-lists">
        {favoriteGames && (
          <GameList name="favorite games" games={favoriteGames.games} />
        )}

        {genreGameLists &&
          genreGameLists.map((list, index) => (
            <GameList
              key={`game-list-${index}`}
              name={list.genre.name}
              games={list.games}
            />
          ))}

        {showEmptyNotice && <h2>GAME LIST EMPTY</h2>}
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
