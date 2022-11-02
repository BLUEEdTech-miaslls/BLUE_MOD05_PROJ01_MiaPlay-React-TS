import { Game } from "../../../types/api/game";

export interface GameListProps {
  name: string;
  games: Game[];
  toggleFavorite(id: string, favorite: boolean): Promise<void>;
}
