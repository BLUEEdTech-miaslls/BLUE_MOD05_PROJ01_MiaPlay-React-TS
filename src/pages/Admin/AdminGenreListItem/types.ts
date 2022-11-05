import { Genre } from "../../../api/types/genre";

export interface AdminGenreListItemProps {
  genre: Genre;
  genreIconMode: "edit" | "delete";
}
