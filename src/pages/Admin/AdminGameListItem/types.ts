import { Game } from "../../../api/types/game";
import { GameForm } from "../GameForm/types";

export interface AdminGameListItemProps {
  game: Game;
  gameIconMode: "edit" | "delete";
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setGameFormState: React.Dispatch<React.SetStateAction<GameForm>>;
  setShowGameForm: React.Dispatch<React.SetStateAction<boolean>>;
  getAllGames(): Promise<void>;
}
