import { GameForm } from "../../types";

import validateTitle from "./validateTitle";
import validateCoverImgUrl from "./validateCoverImgUrl";
import validateYear from "./validateYear";
import validateDescription from "./validateDescription";
import validateImdbScore from "./validateImdbScore";
import validateYTtrailer from "./validateYTtrailer";
import validateYTgameplay from "./validateYTgameplay";
import validateGenres from "./validateGenres";

const validateGameForm = (gameForm: GameForm) => {
  const errorMsgs = {
    title: validateTitle(gameForm.title),
    cover_imgUrl: validateCoverImgUrl(gameForm.cover_imgUrl),
    year: validateYear(gameForm.year),
    description: validateDescription(gameForm.description),
    imdbScore: validateImdbScore(gameForm.imdbScore),
    trailer_youTubeUrl: validateYTtrailer(gameForm.trailer_youTubeUrl),
    gameplay_youTubeUrl: validateYTgameplay(gameForm.gameplay_youTubeUrl),
    genres: validateGenres(gameForm.genres),
  };

  const {
    title,
    cover_imgUrl,
    year,
    description,
    imdbScore,
    trailer_youTubeUrl,
    gameplay_youTubeUrl,
    genres,
  } = errorMsgs;

  const gameFormValid =
    !title &&
    !cover_imgUrl &&
    !year &&
    !description &&
    !imdbScore &&
    !trailer_youTubeUrl &&
    !gameplay_youTubeUrl &&
    !genres;

  return { gameFormValid: gameFormValid, errorMsgs: errorMsgs };
};

export default validateGameForm;
