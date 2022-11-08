import { Genre } from "../../../api/types/genre";
import { GenreForm } from "../GenreForm/types";

export interface AdminGenreListProps {
  genres: Genre[];
  showEmptyGenres: boolean;
  genreErrorMessage: string;
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setGenreFormState: React.Dispatch<React.SetStateAction<GenreForm>>;
  setGenreErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  getAllGenres(): Promise<void>;
  openGenreForm(): void;
}
