import "./AdminGameListItem.css";

import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routers/routes";

import { AdminGameListItemProps } from "./types";

import GameService from "../../../api/services/GameService";
import { Game } from "../../../api/types/game";

const AdminGameListItem = ({
  game,
  gameIconMode,
  setShowLoading,
  setGameFormState,
  getAllGames,
  openGameForm,
}: AdminGameListItemProps) => {
  const navigate = useNavigate();

  // 📌 handleEdit

  const handleEdit = (game: Game) => {
    setGameFormState({
      ...game,
      ["id"]: game._id,
      ["year"]: game.year.toString(),
      ["imdbScore"]: game.imdbScore.toString(),
    });
    openGameForm();
  };

  // 📌 handleRemove

  const handleRemove = async (id: string) => {
    setShowLoading(true);
    await GameService.remove(id);
    getAllGames();
  };

  // 📌📌📌🚨 return

  return (
    <>
      <li className="admin-game-list-item">
        <div
          className="admin-game-column admin-game-img"
          style={{ backgroundImage: `url(${game.cover_imgUrl})` }}
        ></div>

        <div className="admin-game-column admin-game-year">{game.year}</div>

        <div
          className="admin-game-column admin-game-name clickable"
          onClick={() => navigate(`${RoutePath.GAME}/${game._id}`)}
        >
          {game.title}
        </div>

        <div className="admin-game-column admin-game-genre">
          {game.genres.map((genre) => genre.name).join(", ")}
        </div>

        <div className="admin-game-column admin-game-rating">
          <div className="admin-game-rating-icon">
            <i className="bi bi-star"></i>
          </div>
          <div className="admin-game-rating-text">{game.imdbScore}</div>
        </div>
        {gameIconMode === "delete" && (
          <div
            className="admin-game-options-icon clickable"
            onClick={() => handleRemove(game._id)}
          >
            <i className="bi bi-x"></i>
          </div>
        )}

        {gameIconMode === "edit" && (
          <div
            className="admin-game-options-icon clickable"
            onClick={() => handleEdit(game)}
          >
            <i className="bi bi-pencil"></i>
          </div>
        )}
      </li>
    </>
  );
};

export default AdminGameListItem;
