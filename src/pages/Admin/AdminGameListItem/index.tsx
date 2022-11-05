import "./AdminGameListItem.css";

import { AdminGameListItemProps } from "./types";

const AdminGameListItem = ({ game }: AdminGameListItemProps) => {
  return (
    <>
      <li className="admin-game-list-item">
        <div
          className="admin-game-column admin-game-img"
          style={{ backgroundImage: `url(${game.cover_imgUrl})` }}
        ></div>

        <div className="admin-game-column admin-game-year">{game.year}</div>

        <div className="admin-game-column admin-game-name clickable">
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
        <div className="admin-game-options-icon clickable">
          <i className="bi bi-x"></i>
        </div>
      </li>
    </>
  );
};

export default AdminGameListItem;
