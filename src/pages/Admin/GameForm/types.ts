import { Genre } from "../../../api/types/genre";

export interface GameForm {
  id?: string;
  title: string;
  cover_imgUrl: string;
  year: string;
  description: string;
  imdbScore: string;
  trailer_youTubeUrl: string;
  gameplay_youTubeUrl: string;
  genres: Genre[];
  favorite?: boolean;
}

export interface ErrorMsgs {
  title: string;
  cover_imgUrl: string;
  year: string;
  description: string;
  imdbScore: string;
  trailer_youTubeUrl: string;
  gameplay_youTubeUrl: string;
  genres: string;
}

export interface GameFormProps {
  genres: Genre[];
  emptyGame: GameForm;
  gameFormState: GameForm;
  setGameFormState: React.Dispatch<React.SetStateAction<GameForm>>;
  getAllGames(): Promise<void>;
  closeGameForm(): void;
}
