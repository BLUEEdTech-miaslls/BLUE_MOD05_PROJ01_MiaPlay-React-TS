export const games = {
  endpoint: () => "/games",

  allGames: () => games.endpoint(),
  createGame: () => games.endpoint(),
  gameById: (id: string) => `${games.endpoint()}/${id}`,
  updateGame: (id: string) => `${games.endpoint()}/${id}`,
  removeGame: (id: string) => `${games.endpoint()}/${id}`,
};
