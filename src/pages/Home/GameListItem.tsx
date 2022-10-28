import "./GameListItem.css";

import gameImg from "../../mocks/img/the-sims-4.png";

const GameListItem = () => {
  return (
    <>
      <li className="game-list-item-container">
        <div
          className="game-img"
          style={{ backgroundImage: `url(${gameImg})` }}
        ></div>

        <div className="game-info-container">
          <div className="game-info-top-row">
            <h3 className="game-title">The Sims 4</h3>
            <div className="game-year">2014</div>
          </div>

          <div className="game-info-bottom-row">
            <div className="game-rating">
              <div className="game-rating-icon">
                <i className="bi bi-star"></i>
              </div>
              <div className="game-rating-text">6.8/10</div>
            </div>

            <div className="game-favorite clickable">
              <i className="bi bi-heart"></i>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default GameListItem;
