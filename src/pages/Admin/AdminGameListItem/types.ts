import { Game } from "../../../api/types/game";
import { GameForm } from "../GameForm/types";

export interface AdminGameListItemProps {
  game: Game;
  gameIconMode: "edit" | "delete";
  setGameFormState: React.Dispatch<React.SetStateAction<GameForm>>;
  setShowGameForm: React.Dispatch<React.SetStateAction<boolean>>;
  getAllGames(): Promise<void>;
}
