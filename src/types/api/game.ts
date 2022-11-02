import { Genre } from "./genre";

export interface GameBody {
  title: string;
  cover_imgUrl: string;
  year: number;
  description: string;
  imdbScore: number;
  trailer_youTubeUrl: string;
  gameplay_youTubeUrl: string;
  genres: Genre[];
}

export interface GameUpdateFavorite {
  id: string;
  favorite: boolean;
}

export interface Game extends GameBody {
  id: string;
  favorite: boolean;
}
