import "./AdminGameList.css";

import { AdminGameListProps } from "../AdminGameList/types";
import AdminGameListItem from "../AdminGameListItem";

const AdminGameList = ({ games }: AdminGameListProps) => {
  return (
    <>
      <section className="admin-section admin-games-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>games</h2>

            <div className="admin-header-icon-wrapper">
              <div className="admin-header-icon clickable">
                <i className="bi bi-pencil"></i>
              </div>

              <div className="admin-header-icon clickable">
                <i className="bi bi-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>

        <ul className="admin-game-list">
          {games.map((game, index) => (
            <AdminGameListItem key={`admin-game-${index}`} game={game} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default AdminGameList;
