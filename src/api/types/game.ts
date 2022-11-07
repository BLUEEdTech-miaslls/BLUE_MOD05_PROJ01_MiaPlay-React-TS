import { Genre } from "./genre";

export interface GameBody {
  title: string;
  cover_imgUrl: string;
  year: number;
  description: string;
  imdbScore: number;
  trailer_youTubeUrl: string;
  gameplay_youTubeUrl: string;
  genres: string[];
}

export interface GameUpdateFavorite {
  favorite: boolean;
}

export interface Game {
  _id: string;
  title: string;
  cover_imgUrl: string;
  year: number;
  description: string;
  imdbScore: number;
  trailer_youTubeUrl: string;
  gameplay_youTubeUrl: string;
  genres: Genre[];
  favorite: boolean;
}
