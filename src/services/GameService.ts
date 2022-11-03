import { endpoints } from "../helpers/endpoints";
import { Game, GameBody, GameUpdateFavorite } from "../types/api/game";

const GameService = {
  getAll: (): Promise<Game[]> =>
    fetch(endpoints.allGames(), {
      method: "GET",
    }).then((response: Response) => response.json()),

  getById: (id: string): Promise<Game> =>
    fetch(endpoints.gameById(id), {
      method: "GET",
    }).then((response: Response) => response.json()),

  create: (body: GameBody): Promise<Game> =>
    fetch(endpoints.createGame(), {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => response.json()),

  update: (id: string, body: GameBody | GameUpdateFavorite): Promise<Game> =>
    fetch(endpoints.updateGame(id), {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => response.json()),

  remove: (id: string): Promise<boolean> =>
    fetch(endpoints.removeGame(id), { method: "DELETE" }).then(
      (response: Response) => response.ok
    ),
};

export default GameService;
