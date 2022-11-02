import { Game } from "../../../types/api/game";
import { Genre } from "../../../types/api/genre";

export interface GameListProps {
  genre: Genre;
  games: Game[];
}
