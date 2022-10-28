export interface Genre {
  id: String;
  name: String;
  games?: Game[];
}

export interface Game {
  id: String;
  title: String;
  cover_imgUrl: String;
  year: Number;
  description: String;
  imdbScore: String;
  trailer_youTubeUrl: String;
  gameplay_youTubeUrl: String;
  genres: Genre[];
}
