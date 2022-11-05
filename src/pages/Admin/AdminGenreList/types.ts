import { Genre } from "../../../api/types/genre";

export interface AdminGenreListProps {
  genres: Genre[];
  showEmptyGenres: boolean;
  setShowGenreForm: React.Dispatch<React.SetStateAction<boolean>>;
}
