import "./AdminGenreListItem.css";

import { AdminGenreListItemProps } from "./types";

const AdminGenreListItem = ({ genre }: AdminGenreListItemProps) => {
  return (
    <>
      <div className="admin-genre-list-item">
        <div className="admin-genre-name">{genre.name}</div>
        <div className="admin-genre-options-icon clickable">
          <i className="bi bi-x"></i>
        </div>
      </div>
    </>
  );
};

export default AdminGenreListItem;
