import { Genre } from "../../../api/types/genre";
import { GenreForm } from "../GenreForm/types";

export interface AdminGenreListProps {
  genres: Genre[];
  showEmptyGenres: boolean;
  setShowGenreForm: React.Dispatch<React.SetStateAction<boolean>>;
  setGenreFormState: React.Dispatch<React.SetStateAction<GenreForm>>;
}
