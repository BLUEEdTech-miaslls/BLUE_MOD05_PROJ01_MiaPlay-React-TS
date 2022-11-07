import { Genre } from "../../../api/types/genre";
import { GenreForm } from "../GenreForm/types";

export interface AdminGenreListItemProps {
  genre: Genre;
  genreIconMode: "edit" | "delete";
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setGenreFormState: React.Dispatch<React.SetStateAction<GenreForm>>;
  setShowGenreForm: React.Dispatch<React.SetStateAction<boolean>>;
  getAllGenres(): Promise<void>;
}
