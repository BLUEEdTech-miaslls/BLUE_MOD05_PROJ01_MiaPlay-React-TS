import "./AdminGenreList.css";

import { AdminGenreListProps } from "./types";
import AdminGenreListItem from "../AdminGenreListItem";

const AdminGenreList = ({ genres }: AdminGenreListProps) => {
  return (
    <>
      <section className="admin-section admin-genres-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>genres</h2>

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

        <div className="admin-genre-list">
          {genres.map((genre, index) => (
            <AdminGenreListItem key={`admin-genre-${index}`} genre={genre} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AdminGenreList;
