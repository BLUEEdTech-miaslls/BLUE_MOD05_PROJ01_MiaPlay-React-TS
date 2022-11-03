import "./Home.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import { RoutePath } from "../../routers/routes";
import { navigationItems } from "../../components/Menu/navigation";

import GameList from "./GameList";
import GenreGameListService from "../../api/services/GenreGameListService";
import { GenreGameList } from "../../api/types/genreGameList";

import GameService from "../../api/services/GameService";
import { Game, GameUpdateFavorite } from "../../api/types/game";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  const [showLoading, setShowLoading] = useState<boolean>(true);

  // 📌 getGameLists

  const [showEmptyNotice, setShowEmptyNotice] = useState<boolean>(false);
  const [genreGameLists, setGenreGameLists] = useState<
    GenreGameList[] | undefined
  >([]);

  const getGameLists = async () => {
    setShowLoading(true);

    const response = await GenreGameListService.getAll();

    response.length === 0
      ? setShowEmptyNotice(true)
      : response.sort((a, b) =>
          a.genre.name > b.genre.name ? 1 : b.genre.name > a.genre.name ? -1 : 0
        );

    setGenreGameLists(response);
    setShowLoading(false);
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

  // 📌 toggleFavoriteGame

  const toggleFavoriteGame = async (id: string, favorite: boolean) => {
    setShowLoading(true);

    const body: GameUpdateFavorite = { favorite: favorite ? false : true };
    const response: Game = await GameService.update(id, body);

    if (!response._id) {
      navigate(RoutePath.NOTFOUND);
    } else {
      getGameLists();
      getFavoriteGames();
      setShowLoading(false);
    }
  };

  // 📌📌📌🚨 HOME return

  return (
    <>
      <div className="generic-page-container">
        <div className="wrapper">
          <Header
            active={RoutePath.HOME}
            navItems={navigationItems}
            handleNavigation={handleNavigation}
          />

          {!showLoading && (
            <main className="game-lists">
              {favoriteGames && favoriteGames.games.length > 0 && (
                <GameList
                  name="favorite games"
                  games={favoriteGames.games}
                  toggleFavorite={toggleFavoriteGame}
                />
              )}

              {genreGameLists &&
                genreGameLists.map((list, index) => (
                  <GameList
                    key={`game-list-${index}`}
                    name={list.genre.name}
                    games={list.games}
                    toggleFavorite={toggleFavoriteGame}
                  />
                ))}

              {showEmptyNotice && <h2>GAME LIST EMPTY</h2>}
            </main>
          )}

          {showLoading && <Loading />}
        </div>

        <Footer
          active={RoutePath.HOME}
          navItems={navigationItems}
          handleNavigation={handleNavigation}
        />
      </div>
    </>
  );
};

export default Home;
