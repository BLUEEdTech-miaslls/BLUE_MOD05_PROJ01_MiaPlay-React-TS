import { Api } from "../helpers/endpoints/Api";
import { endpoints } from "../helpers/endpoints";
import { GenreGameList } from "../types/api/genreGameList";

export default class GenreGameListService {
  static getAll(): Promise<GenreGameList[]> {
    const response = Api(endpoints.allGenreGameLists(), {
      method: "GET",
    }).then((response) => response.json());

    return response;
  }
}
