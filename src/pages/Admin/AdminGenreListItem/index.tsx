import "./AdminGenreListItem.css";

import { AdminGenreListItemProps } from "./types";

import { Genre } from "../../../api/types/genre";
import GenreService from "../../../api/services/GenreService";

const AdminGenreListItem = ({
  genre,
  genreIconMode,
  setShowLoading,
  setGenreFormState,
  setGenreErrorMessage,
  getAllGenres,
  openGenreForm,
}: AdminGenreListItemProps) => {
  // 📌 handleEdit

  const handleEdit = (genre: Genre) => {
    setGenreFormState({ id: genre.id, name: genre.name });
    openGenreForm();
  };

  // 📌 handleRemove

  const handleRemove = async (id: string) => {
    setShowLoading(true);
    const response = await GenreService.remove(id);

    switch (response) {
      case 200:
        getAllGenres();
        break;
      case 405:
        setGenreErrorMessage("cannot delete: genre is not empty");
        setShowLoading(false);
        break;
      default:
        setGenreErrorMessage("cannot delete: unknown error");
    }
  };

  // 📌📌📌🚨 return

  return (
    <>
      <li className="admin-genre-list-item">
        <div className="admin-genre-name">{genre.name}</div>
        {genreIconMode === "delete" && (
          <div
            className="admin-game-options-icon clickable"
            onClick={() => handleRemove(genre.id)}
          >
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
