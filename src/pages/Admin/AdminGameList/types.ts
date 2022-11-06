import { Game } from "../../../api/types/game";

export interface AdminGameListProps {
  games: Game[];
  showEmptyGames: boolean;
  setShowGameForm: React.Dispatch<React.SetStateAction<boolean>>;
}
