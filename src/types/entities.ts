export interface GenreBody {
  name: String;
}

export interface Genre extends GenreBody {
  id: String;
}

export interface GameBody {
  title: String;
  cover_imgUrl: String;
  year: Number;
  description: String;
  imdbScore: Number;
  trailer_youTubeUrl: String;
  gameplay_youTubeUrl: String;
  genres: Genre[];
}

export interface Game extends GameBody {
  id: String;
  favorite: Boolean;
}

export interface GenreGameList {
  id: String;
  genre: Genre;
  games: Game[];
}
