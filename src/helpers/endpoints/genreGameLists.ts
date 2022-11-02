import { endpoints } from ".";

export const genreGameLists = {
  endpoint: () => `${endpoints.baseUrl}/genre-game-lists`,

  allGenreGameLists: () => genreGameLists.endpoint(),
};
