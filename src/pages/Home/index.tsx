import "./Home.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameList from "./GameList";

import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";

import GenreGameListService from "../../services/GenreGameListService";
import { GenreGameList } from "../../types/api/genreGameList";

import GameService from "../../services/GameService";
import { Game } from "../../types/api/game";

const Home = () => {
  // 📌 menu navigation

  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  // 📌 FavoriteGames

  interface FavoriteGameList {
    genre: {
      id: string;
      name: string;
    };
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

    setFavoriteGames({
      genre: {
        id: "",
        name: "favorite games",
      },
      games: filteredGames,
    });
  };

  useEffect(() => {
    getFavoriteGames();
  }, []);

  // 📌 GameLists

  const [genreGameLists, setGenreGameLists] = useState<GenreGameList[] | []>(
    []
  );

  const getGameLists = async () => {
    const response = await GenreGameListService.getAll();

    response.sort((a, b) =>
      a.genre.name > b.genre.name ? 1 : b.genre.name > a.genre.name ? -1 : 0
    );

    setGenreGameLists(response);
  };

  useEffect(() => {
    getGameLists();
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
          <GameList genre={favoriteGames.genre} games={favoriteGames.games} />
        )}

        {genreGameLists.map((list, index) => (
          <GameList
            key={`game-list-${index}`}
            genre={list.genre}
            games={list.games}
          />
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
