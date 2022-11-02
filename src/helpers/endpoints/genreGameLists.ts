import { endpoints } from ".";

export const genreGameLists = {
  endpoint: () => `${endpoints.baseUrl}/genreGameLists`,

  allGenreGameLists: () => genreGameLists.endpoint(),
};
