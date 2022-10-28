import "./AdminGameListItem.css";

import gameImg from "../../mocks/img/the-sims-4.png";

const AdminGameListItem = () => {
  return (
    <>
      <li className="admin-game-list-item">
        <div
          className="admin-game-column admin-game-img"
          style={{ backgroundImage: `url(${gameImg})` }}
        ></div>

        <div className="admin-game-column admin-game-year">2014</div>

        <div className="admin-game-column admin-game-name clickable">
          The Sims 4
        </div>

        <div className="admin-game-column admin-game-genre">
          fantasy, simulation, strategy
        </div>

        <div className="admin-game-column admin-game-rating">
          <div className="admin-game-rating-icon">
            <i className="bi bi-star"></i>
          </div>
          <div className="admin-game-rating-text">6.8</div>

          <div className="admin-game-options-icon clickable">
            <i className="bi bi-x"></i>
          </div>
        </div>
      </li>
    </>
  );
};

export default AdminGameListItem;
