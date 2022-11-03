import { Game } from "../../../api/types/game";

export interface GameListProps {
  name: string;
  games: Game[];
  toggleFavorite(id: string, favorite: boolean): Promise<void>;
}
