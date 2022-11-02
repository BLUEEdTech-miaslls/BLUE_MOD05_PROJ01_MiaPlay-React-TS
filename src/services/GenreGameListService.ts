import { endpoints } from "../helpers/endpoints";
import { GenreGameList } from "../types/api/genreGameList";

const GenreGameListService = {
  getAll: (): Promise<GenreGameList[]> =>
    fetch(endpoints.allGenreGameLists(), {
      method: "GET",
    }).then((response: Response) => response.json()),
};

export default GenreGameListService;
