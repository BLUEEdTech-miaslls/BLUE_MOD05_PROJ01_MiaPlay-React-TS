import "./AdminGameList.css";

import { useState } from "react";

import { AdminGameListProps } from "../AdminGameList/types";
import AdminGameListItem from "../AdminGameListItem";

const AdminGameList = ({
  games,
  showEmptyGames,
  setShowGameForm,
}: AdminGameListProps) => {
  const [gameIconMode, setGameIconMode] = useState<"edit" | "delete">("delete");

  return (
    <>
      <section className="admin-section admin-games-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>games</h2>

            <div className="admin-header-icon-wrapper">
              {gameIconMode === "delete" && (
                <div
                  className="admin-header-icon clickable"
                  onClick={() => setGameIconMode("edit")}
                >
                  <i className="bi bi-pencil"></i>
                </div>
              )}

              {gameIconMode === "edit" && (
                <div
                  className="admin-header-icon clickable"
                  onClick={() => setGameIconMode("delete")}
                >
                  <i className="bi bi-x-lg"></i>
                </div>
              )}

              <div
                className="admin-header-icon clickable"
                onClick={() => setShowGameForm(true)}
              >
                <i className="bi bi-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>

        <ul className="admin-game-list">
          {games.map((game, index) => (
            <AdminGameListItem
              key={`admin-game-${index}`}
              game={game}
              gameIconMode={gameIconMode}
            />
          ))}

          {showEmptyGames && <li>GAME LIST EMPTY</li>}
        </ul>
      </section>
    </>
  );
};

export default AdminGameList;
