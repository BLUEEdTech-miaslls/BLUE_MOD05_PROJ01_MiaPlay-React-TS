import { Genre } from "../../../../../api/types/genre";

const validateGenres = (genres: Genre[]) => {
  if (genres.length === 0) {
    return "select at least ONE genre";
  } else {
    return "";
  }
};

export default validateGenres;
