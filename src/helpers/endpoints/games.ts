import { endpoints } from ".";

export const games = {
  endpoint: () => `${endpoints.baseUrl}/games`,

  allGames: () => games.endpoint(),
  createGenre: () => games.endpoint(),
  genreById: (id: string) => `${games.endpoint()}/${id}`,
  updateGenre: (id: string) => `${games.endpoint()}/${id}`,
  deleteGenre: (id: string) => `${games.endpoint()}/${id}`,
};
