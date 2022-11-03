import { endpoints } from "../endpoints";
import { Genre, GenreBody } from "../types/genre";

const GenreService = {
  getAll: (): Promise<Genre[]> =>
    fetch(endpoints.allGenres(), {
      method: "GET",
    }).then((response: Response) => response.json()),

  getById: (id: string): Promise<Genre[]> =>
    fetch(endpoints.genreById(id), {
      method: "GET",
    }).then((response: Response) => response.json()),

  create: (body: GenreBody): Promise<Genre> =>
    fetch(endpoints.createGenre(), {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => response.json()),

  update: (id: string, body: GenreBody): Promise<Genre> =>
    fetch(endpoints.updateGenre(id), {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => response.json()),

  remove: (id: string): Promise<boolean> =>
    fetch(endpoints.removeGenre(id), { method: "DELETE" }).then(
      (response: Response) => response.ok
    ),
};

export default GenreService;
