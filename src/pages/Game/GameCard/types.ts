import { Game } from "../../../types/api/game";

export interface GameCardProps {
  game: Game;
  toggleFavorite(id: string, favorite: boolean): Promise<void>;
}
