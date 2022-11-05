import "./GenreForm.css";

import { GenreFormProps } from "./types";

const GenreForm = ({ setShowGenreForm }: GenreFormProps) => {
  return (
    <>
      <section className="admin-section admin-genres-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>genres</h2>

            <div className="admin-header-icon-wrapper">
              <div
                className="admin-header-icon clickable"
                onClick={() => setShowGenreForm(false)}
              >
                <i className="bi bi-x-lg"></i>
              </div>
            </div>
          </div>
        </div>
        <form className="genre-form">
          <input
            type="text"
            name="genre"
            placeholder="add genre"
            autoComplete="off"
          />

          <button>
            <div className="admin-header-icon clickable">
              <i className="bi bi-check-circle"></i>
            </div>
          </button>
        </form>
      </section>
    </>
  );
};

export default GenreForm;
