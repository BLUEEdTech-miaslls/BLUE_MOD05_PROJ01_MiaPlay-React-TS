import { AxiosResponse } from "axios";

import API from ".";
import { endpoints } from "../endpoints";
import { Genre, GenreBody } from "../types/genre";

const GenreService = {
  getAll: (): Promise<Genre[]> =>
    API.get(endpoints.allGenres()).then(
      (response: AxiosResponse) => response.data
    ),

  getById: (id: string): Promise<Genre[]> =>
    API.get(endpoints.genreById(id)).then(
      (response: AxiosResponse) => response.data
    ),

  create: (body: GenreBody): Promise<Genre> =>
    API.post(endpoints.createGenre(), body, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: AxiosResponse) => response.data),

  update: (id: string, body: GenreBody): Promise<Genre> =>
    API.patch(endpoints.updateGenre(id), body, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: AxiosResponse) => response.data),

  remove: (id: string): Promise<number> =>
    API.delete(endpoints.removeGenre(id))
      .then((response: AxiosResponse) => response.status)
      .catch((err) => err.response.status),
};

export default GenreService;
