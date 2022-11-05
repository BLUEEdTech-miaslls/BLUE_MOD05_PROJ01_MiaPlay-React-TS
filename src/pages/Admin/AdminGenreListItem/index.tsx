import "./AdminGenreListItem.css";

import { AdminGenreListItemProps } from "./types";

const AdminGenreListItem = ({
  genre,
  genreIconMode,
}: AdminGenreListItemProps) => {
  return (
    <>
      <li className="admin-genre-list-item">
        <div className="admin-genre-name">{genre.name}</div>
        {genreIconMode === "delete" && (
          <div className="admin-game-options-icon clickable">
            <i className="bi bi-x"></i>
          </div>
        )}

        {genreIconMode === "edit" && (
          <div className="admin-game-options-icon clickable">
            <i className="bi bi-pencil"></i>
          </div>
        )}
      </li>
    </>
  );
};

export default AdminGenreListItem;
