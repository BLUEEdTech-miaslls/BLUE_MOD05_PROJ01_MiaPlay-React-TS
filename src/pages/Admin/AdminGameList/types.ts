import { Game } from "../../../api/types/game";
import { GameForm } from "../GameForm/types";

export interface AdminGameListProps {
  games: Game[];
  showEmptyGames: boolean;
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowGameForm: React.Dispatch<React.SetStateAction<boolean>>;
  setGameFormState: React.Dispatch<React.SetStateAction<GameForm>>;
  getAllGames(): Promise<void>;
}
