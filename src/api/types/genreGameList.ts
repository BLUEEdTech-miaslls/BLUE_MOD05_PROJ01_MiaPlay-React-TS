import { Genre } from "./genre";
import { Game } from "./game";

export interface GenreGameList {
  _id: string;
  genre: Genre;
  games: Game[];
}
