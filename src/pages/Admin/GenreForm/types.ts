export interface GenreForm {
  id?: string;
  name: string;
}

export interface GenreFormProps {
  emptyGenre: GenreForm;
  genreFormState: GenreForm;
  setGenreFormState: React.Dispatch<React.SetStateAction<GenreForm>>;
  getAllGenres(): Promise<void>;
  closeGenreForm(): void;
}
