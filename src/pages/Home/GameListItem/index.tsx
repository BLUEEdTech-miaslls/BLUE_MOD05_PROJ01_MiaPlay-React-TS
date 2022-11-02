import "./GameListItem.css";

import { GameListItemProps } from "./types";

const GameListItem = ({
  id,
  image,
  title,
  year,
  rating,
  favorite,
  toggleFavorite,
}: GameListItemProps) => {
  return (
    <>
      <li className="game-list-item-container">
        <div
          className="game-img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="game-info-container">
          <div className="game-info-top-row">
            <h3 className="game-title">{title}</h3>
            <div className="game-year">{year}</div>
          </div>

          <div className="game-info-bottom-row">
            <div className="game-rating">
              <div className="game-rating-icon">
                <i className="bi bi-star"></i>
              </div>
              <div className="game-rating-text">{rating}</div>
            </div>

            <div
              className="game-favorite clickable"
              onClick={() => toggleFavorite(id, favorite)}
            >
              {favorite ? (
                <i className="bi bi-heart-fill"></i>
              ) : (
                <i className="bi bi-heart"></i>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default GameListItem;
