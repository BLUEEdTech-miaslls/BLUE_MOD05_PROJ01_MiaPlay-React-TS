import { Game } from "../../../api/types/game";
import { GameForm } from "../GameForm/types";

export interface AdminGameListProps {
  games: Game[];
  showEmptyGames: boolean;
  setShowGameForm: React.Dispatch<React.SetStateAction<boolean>>;
  setGameFormState: React.Dispatch<React.SetStateAction<GameForm>>;
  getAllGames(): Promise<void>;
}
