import "./AdminGenreList.css";

import { AdminGenreListProps } from "./types";
import AdminGenreListItem from "../AdminGenreListItem";
import { useState } from "react";

const AdminGenreList = ({
  genres,
  showEmptyGenres,
  genreErrorMessage,
  setShowLoading,
  setGenreFormState,
  setGenreErrorMessage,
  getAllGenres,
  openGenreForm,
}: AdminGenreListProps) => {
  // 📌

  const [genreIconMode, setGenreIconMode] = useState<"edit" | "delete">(
    "delete"
  );

  // 📌📌📌🚨  return

  return (
    <>
      <section className="admin-section admin-genres-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>genres</h2>

            <div className="admin-header-icon-wrapper">
              {genreIconMode === "delete" && (
                <div
                  className="admin-header-icon clickable"
                  onClick={() => setGenreIconMode("edit")}
                >
                  <i className="bi bi-pencil"></i>
                </div>
              )}

              {genreIconMode === "edit" && (
                <div
                  className="admin-header-icon clickable"
                  onClick={() => setGenreIconMode("delete")}
                >
                  <i className="bi bi-x-lg"></i>
                </div>
              )}

              <div
                className="admin-header-icon clickable"
                onClick={() => openGenreForm()}
              >
                <i className="bi bi-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>

        {genreErrorMessage.length > 0 && (
          <div className="genre-error-container">
            <div className="genre-error-icon">
              <i className="bi bi-exclamation-triangle"></i>
            </div>
            <div className="genre-error-message">{genreErrorMessage}</div>
            <div
              className="genre-error-close"
              onClick={() => setGenreErrorMessage("")}
            >
              <i className="bi bi-x"></i>
            </div>
          </div>
        )}

        <ul className="admin-genre-list">
          {genres.map((genre, index) => (
            <AdminGenreListItem
              key={`admin-genre-${index}`}
              genre={genre}
              genreIconMode={genreIconMode}
              setShowLoading={setShowLoading}
              setGenreFormState={setGenreFormState}
              setGenreErrorMessage={setGenreErrorMessage}
              getAllGenres={getAllGenres}
              openGenreForm={openGenreForm}
            />
          ))}

          {showEmptyGenres && <li>GENRE LIST EMPTY</li>}
        </ul>
      </section>
    </>
  );
};

export default AdminGenreList;
