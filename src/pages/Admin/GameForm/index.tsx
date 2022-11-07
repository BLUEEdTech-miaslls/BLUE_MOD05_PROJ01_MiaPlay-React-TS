import "./GameForm.css";

import { useState, useEffect } from "react";

import GameService from "../../../api/services/GameService";
import { GameBody } from "../../../api/types/game";
import { GameForm as IGameForm, GameFormProps } from "./types";

import { Genre } from "../../../api/types/genre";

const GameForm = ({
  genres,
  emptyGame,
  gameFormState,
  setGameFormState,
  getAllGames,
  closeGameForm,
}: GameFormProps) => {
  // 📌 default input values

  const [defaultInputValues, setDefaultInputValues] =
    useState<IGameForm>(emptyGame);

  useEffect(() => {
    setDefaultInputValues({
      title: gameFormState.title,
      cover_imgUrl: gameFormState.cover_imgUrl,
      year: gameFormState.year,
      description: gameFormState.description,
      imdbScore: gameFormState.imdbScore,
      trailer_youTubeUrl: gameFormState.trailer_youTubeUrl,
      gameplay_youTubeUrl: gameFormState.gameplay_youTubeUrl,
      genres: gameFormState.genres,
    });
  }, [gameFormState]);

  const getTitleInput = () => defaultInputValues.title;
  const getCoverImgInput = () => defaultInputValues.cover_imgUrl;
  const getYearInput = () => defaultInputValues.year;
  const getDescriptionInput = () => defaultInputValues.description;
  const getImdbScoreInput = () => defaultInputValues.imdbScore;
  const getTrailerInput = () => defaultInputValues.trailer_youTubeUrl;
  const getGameplayInput = () => defaultInputValues.gameplay_youTubeUrl;
  const getGenres = () => defaultInputValues.genres;

  // 📌 handleChange

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    name: string
  ) => {
    setGameFormState({ ...gameFormState, [name]: e.target.value });
  };

  // 📌 handleKeyPress

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitGameForm();
    }
  };

  // 📌 handleCoverImg

  const [coverImg, setCoverImg] = useState<string>("");

  const handleCoverImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoverImg(e.target.value);
  };

  // 📌 handleGenreSelect

  const [selectedGenres, setSelectedGenres] = useState<Genre[]>(getGenres());

  const handleGenreSelect = (genre: Genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGameFormState({ ...gameFormState, ["genres"]: selectedGenres });
  };

  const handleGenreDeselect = (genre: Genre) => {
    const afterDeselect = selectedGenres.filter(
      (selected: Genre) => genre !== selected
    );

    setSelectedGenres(afterDeselect);
    setGameFormState({ ...gameFormState, ["genres"]: afterDeselect });
  };

  // 📌 handleYouTubeUrl

  const [YTtrailer, setYTtrailer] = useState<string>("");
  const [YTgameplay, setYTgameplay] = useState<string>("");

  const handleYouTubeUrl = (
    e: React.ChangeEvent<HTMLInputElement>,
    video: "trailer" | "gameplay"
  ) => {
    video === "trailer"
      ? setYTtrailer(e.target.value.split("=")[1])
      : setYTgameplay(e.target.value.split("=")[1]);
  };

  // 📌 submitGameForm

  const submitGameForm = async () => {
    const {
      id,
      title,
      cover_imgUrl,
      year,
      description,
      imdbScore,
      trailer_youTubeUrl,
      gameplay_youTubeUrl,
      genres,
    } = gameFormState;

    const genreIdList: string[] = [];
    genres.forEach((genre) => genreIdList.push(genre._id));

    const gameBody: GameBody = {
      title: title,
      cover_imgUrl: cover_imgUrl,
      year: Number(year),
      description: description,
      imdbScore: Number(imdbScore),
      trailer_youTubeUrl: trailer_youTubeUrl,
      gameplay_youTubeUrl: gameplay_youTubeUrl,
      genres: genreIdList,
    };

    id
      ? await GameService.update(id, gameBody)
      : await GameService.create(gameBody);

    setGameFormState(emptyGame);
    closeGameForm();
    getAllGames();
  };

  // 📌📌📌🚨 GameForm return

  return (
    <>
      <section className="admin-section admin-games-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>games</h2>

            <div className="admin-header-icon-wrapper">
              <div
                className="admin-header-icon clickable"
                onClick={() => closeGameForm()}
              >
                <i className="bi bi-x-lg"></i>
              </div>
            </div>
          </div>
        </div>

        {/* 📌 FORM */}

        <form
          className="game-form"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="game-form-left-column">
            <div className="game-form-header">
              <div
                className="game-form-cover-img"
                style={{ backgroundImage: `url(${coverImg})` }}
              >
                {coverImg.length === 0 && <i className="bi bi-controller"></i>}
              </div>
              <div className="game-form-header-inputs">
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={getTitleInput()}
                  autoFocus={true}
                  placeholder="game title"
                  onChange={(e) => handleChange(e, "title")}
                />

                <input
                  type="text"
                  name="cover_imgUrl"
                  required
                  defaultValue={getCoverImgInput()}
                  placeholder="cover image URL"
                  onChange={(e) => {
                    handleChange(e, "cover_imgUrl");
                    handleCoverImg(e);
                  }}
                />
              </div>
            </div>

            {/* 📌 genres */}

            <div className="game-form-genres">
              <h3 className="genre-form-title">GENRES:</h3>
              {genres.map((genre, index) => (
                <div
                  className="game-form-genre"
                  key={`game-form-genre-${index}`}
                >
                  {selectedGenres.includes(genre) ? (
                    <div
                      className="game-form-genre-checkbox"
                      onClick={() => handleGenreDeselect(genre)}
                    >
                      <i className="bi bi-check-square"></i>
                    </div>
                  ) : (
                    <div
                      className="game-form-genre-checkbox"
                      onClick={() => handleGenreSelect(genre)}
                    >
                      <i className="bi bi-square"></i>
                    </div>
                  )}

                  <div className="game-form-genre-name">{genre.name}</div>
                </div>
              ))}
            </div>

            <textarea
              name="description"
              required
              defaultValue={getDescriptionInput()}
              placeholder="description"
              onChange={(e) => handleChange(e, "description")}
            ></textarea>

            <fieldset>
              <input
                type="text"
                name="year"
                required
                defaultValue={getYearInput()}
                placeholder="year"
                onChange={(e) => handleChange(e, "year")}
              />

              <input
                type="text"
                name="imdbScore"
                required
                defaultValue={getImdbScoreInput()}
                placeholder="IMDB score"
                onChange={(e) => handleChange(e, "imdbScore")}
              />
            </fieldset>

            <input
              type="text"
              name="trailer_youTubeUrl"
              required
              defaultValue={getTrailerInput()}
              placeholder="trailer YouTube URL"
              onChange={(e) => {
                handleChange(e, "trailer_youTubeUrl");
                handleYouTubeUrl(e, "trailer");
              }}
            />

            <input
              type="text"
              name="gameplay_youTubeUrl"
              required
              defaultValue={getGameplayInput()}
              placeholder="gameplay YouTube URL"
              onChange={(e) => {
                handleChange(e, "gameplay_youTubeUrl");
                handleYouTubeUrl(e, "gameplay");
              }}
            />

            {/* 📌 buttons */}

            <div className="game-form-buttons">
              <div
                className="game-form-button clickable"
                onClick={() => closeGameForm()}
              >
                <i className="bi bi-x-circle"></i>
              </div>
              <div
                className="game-form-button clickable"
                onClick={() => submitGameForm()}
              >
                <i className="bi bi-check-circle"></i>
              </div>
            </div>
          </div>

          {/* 📌 videos */}

          <div className="game-form-right-column">
            <div className="game-form-video">
              {YTtrailer === "" ? (
                <i className="bi bi-camera-video"></i>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${YTtrailer}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="game-form-video">
              {YTgameplay === "" ? (
                <i className="bi bi-camera-video"></i>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${YTgameplay}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default GameForm;
