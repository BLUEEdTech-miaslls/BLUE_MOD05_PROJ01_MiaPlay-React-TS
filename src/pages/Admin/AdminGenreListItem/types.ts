import { Genre } from "../../../api/types/genre";
import { GenreForm } from "../GenreForm/types";

export interface AdminGenreListItemProps {
  genre: Genre;
  genreIconMode: "edit" | "delete";
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setGenreFormState: React.Dispatch<React.SetStateAction<GenreForm>>;
  setGenreErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  getAllGenres(): Promise<void>;
  openGenreForm(): void;
}
