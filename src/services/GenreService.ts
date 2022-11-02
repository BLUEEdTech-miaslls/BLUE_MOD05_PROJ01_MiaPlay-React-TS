import { Api } from "../helpers/endpoints/Api";
import { endpoints } from "../helpers/endpoints";
import { Genre, GenreBody } from "../types/api/genre";

export default class GenreService {
  static getAll(): Promise<Genre[]> {
    const response = Api(endpoints.allGenres(), {
      method: "GET",
    }).then((response) => response.json());

    return response;
  }

  static getById(id: string): Promise<Genre> {
    const response = Api(endpoints.genreById(id), {
      method: "GET",
    }).then((response) => response.json());

    return response;
  }

  static create(body: GenreBody): Promise<Genre> {
    const response = Api(endpoints.createGenre(), {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    return response;
  }

  static update(id: string, body: GenreBody): Promise<Genre> {
    const response = Api(endpoints.updateGenre(id), {
      method: "PATCH",
      body: JSON.stringify(body),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    return response;
  }

  static remove(id: string): Promise<Genre> {
    const response = Api(endpoints.removeGenre(id), {
      method: "DELETE",
    }).then((response) => response.json());

    return response;
  }
}
