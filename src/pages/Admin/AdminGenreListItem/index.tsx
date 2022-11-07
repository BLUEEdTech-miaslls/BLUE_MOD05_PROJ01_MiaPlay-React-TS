import { Genre } from "../../../api/types/genre";
import "./AdminGenreListItem.css";

import { AdminGenreListItemProps } from "./types";

const AdminGenreListItem = ({
  genre,
  genreIconMode,
  setGenreFormState,
  setShowGenreForm,
}: AdminGenreListItemProps) => {
  // 📌 handle Edit

  const handleEdit = (genre: Genre) => {
    setGenreFormState({ id: genre._id, name: genre.name });
    setShowGenreForm(true);
  };

  // 📌📌📌🚨 return

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
          <div
            className="admin-game-options-icon clickable"
            onClick={() => handleEdit(genre)}
          >
            <i className="bi bi-pencil"></i>
          </div>
        )}
      </li>
    </>
  );
};

export default AdminGenreListItem;
