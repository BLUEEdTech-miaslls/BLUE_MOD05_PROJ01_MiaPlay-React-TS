import { AxiosResponse } from "axios";

import API from ".";
import { endpoints } from "../endpoints";
import { Game, GameBody, GameUpdateFavorite } from "../types/game";

const GameService = {
  getAll: (): Promise<Game[]> =>
    API.get(endpoints.allGames()).then(
      (response: AxiosResponse) => response.data
    ),

  getById: (id: string): Promise<Game> =>
    API.get(endpoints.gameById(id)).then(
      (response: AxiosResponse) => response.data
    ),

  create: (body: GameBody): Promise<Game> =>
    API.post(endpoints.createGame(), body, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: AxiosResponse) => response.data),

  update: (id: string, body: GameBody | GameUpdateFavorite): Promise<Game> =>
    API.patch(endpoints.updateGame(id), body, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: AxiosResponse) => response.data),

  remove: (id: string): Promise<boolean> =>
    API.delete(endpoints.removeGame(id)).then(
      (response: AxiosResponse) => response.status === 200
    ),
};

export default GameService;
