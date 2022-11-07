import { AxiosResponse } from "axios";

import API from ".";
import { endpoints } from "../endpoints";
import { GenreGameList } from "../types/genreGameList";

const GenreGameListService = {
  getAll: (): Promise<GenreGameList[]> =>
    API.get(endpoints.allGenreGameLists()).then(
      (response: AxiosResponse) => response.data
    ),
};

export default GenreGameListService;
