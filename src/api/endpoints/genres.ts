export const genres = {
  endpoint: () => "/genres",

  allGenres: () => genres.endpoint(),
  createGenre: () => genres.endpoint(),
  genreById: (id: string) => `${genres.endpoint()}/${id}`,
  updateGenre: (id: string) => `${genres.endpoint()}/${id}`,
  removeGenre: (id: string) => `${genres.endpoint()}/${id}`,
};
