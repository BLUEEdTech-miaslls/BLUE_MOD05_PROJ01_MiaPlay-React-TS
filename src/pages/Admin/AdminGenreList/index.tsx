import "./AdminGenreList.css";

import { AdminGenreListProps } from "./types";
import AdminGenreListItem from "../AdminGenreListItem";
import { useState } from "react";

const AdminGenreList = ({
  genres,
  showEmptyGenres,
  setShowGenreForm,
  setGenreFormState,
}: AdminGenreListProps) => {
  const [genreIconMode, setGenreIconMode] = useState<"edit" | "delete">(
    "delete"
  );

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
                onClick={() => setShowGenreForm(true)}
              >
                <i className="bi bi-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>

        <ul className="admin-genre-list">
          {genres.map((genre, index) => (
            <AdminGenreListItem
              key={`admin-genre-${index}`}
              genre={genre}
              genreIconMode={genreIconMode}
              setGenreFormState={setGenreFormState}
              setShowGenreForm={setShowGenreForm}
            />
          ))}

          {showEmptyGenres && <li>GENRE LIST EMPTY</li>}
        </ul>
      </section>
    </>
  );
};

export default AdminGenreList;
