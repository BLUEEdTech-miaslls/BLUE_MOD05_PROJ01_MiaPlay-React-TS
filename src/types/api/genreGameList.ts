import { Genre } from "./genre";
import { Game } from "./game";

export interface GenreGameList {
  id: string;
  genre: Genre;
  games: Game[];
}
