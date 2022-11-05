import "./AdminGenreListItem.css";

import { AdminGenreListItemProps } from "./types";

const AdminGenreListItem = ({
  genre,
  genreIconMode,
}: AdminGenreListItemProps) => {
  return (
    <>
      <div className="admin-genre-list-item">
        <div className="admin-genre-name">{genre.name}</div>
        {genreIconMode === "delete" && (
          <div className="admin-game-options-icon clickable">
            <i className="bi bi-x-lg"></i>
          </div>
        )}

        {genreIconMode === "edit" && (
          <div className="admin-game-options-icon clickable">
            <i className="bi bi-pencil"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminGenreListItem;
