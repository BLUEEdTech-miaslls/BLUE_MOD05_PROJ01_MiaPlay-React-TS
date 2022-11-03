import { endpoints } from "../endpoints";
import { GenreGameList } from "../types/genreGameList";

const GenreGameListService = {
  getAll: (): Promise<GenreGameList[]> =>
    fetch(endpoints.allGenreGameLists(), {
      method: "GET",
    }).then((response: Response) => response.json()),
};

export default GenreGameListService;
