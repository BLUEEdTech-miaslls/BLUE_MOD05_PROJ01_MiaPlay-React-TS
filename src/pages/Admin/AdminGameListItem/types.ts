import { Game } from "../../../api/types/game";

export interface AdminGameListItemProps {
  game: Game;
  gameIconMode: "edit" | "delete";
}
