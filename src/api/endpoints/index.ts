import { genres } from "./genres";
import { games } from "./games";
import { genreGameLists } from "./genreGameLists";

export const endpoints = {
  baseUrl: "https://miaplay-01-server.fly.dev",
  ...genres,
  ...games,
  ...genreGameLists,
};
