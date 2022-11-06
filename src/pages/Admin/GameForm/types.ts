import { Genre } from "../../../api/types/genre";

export interface GameFormProps {
  setShowGameForm: React.Dispatch<React.SetStateAction<boolean>>;
  genres: Genre[];
}
