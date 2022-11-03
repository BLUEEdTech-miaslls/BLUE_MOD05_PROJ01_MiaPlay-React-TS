import "./GameCard.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../types/routes";

import { GameCardProps } from "./types";

import GameService from "../../../services/GameService";
import { Game, GameUpdateFavorite } from "../../../types/api/game";

const GameCard = ({ gameId }: GameCardProps) => {
  const emptyGame: Game = {
    _id: "",
    title: "",
    cover_imgUrl: "",
    year: 0,
    description: "",
    imdbScore: 0,
    trailer_youTubeUrl: "",
    gameplay_youTubeUrl: "",
    genres: [],
    favorite: false,
  };

  const navigate = useNavigate();

  const [game, setGame] = useState<Game>(emptyGame);
  const [videoIdList, setVideoIdList] = useState<string[]>([]);
  const [videoShown, setVideoShown] = useState<string>("");

  // 📌 getGame

  const getGameById = async (id: string) => {
    const response = await GameService.getById(id);

    if (!response._id) {
      navigate(RoutePath.NOTFOUND);
    } else {
      // TODO: formatVideoIdList(game)
      const youTubeTrailer = response.trailer_youTubeUrl.split("=")[1];
      const youTubeGameplay = response.gameplay_youTubeUrl.split("=")[1];

      setGame(response);
      setVideoIdList([youTubeTrailer, youTubeGameplay]);
      setVideoShown(youTubeTrailer);
    }
  };

  useEffect(() => {
    getGameById(gameId);
  }, []);

  // 📌 toggleFavorite

  const toggleFavorite = async (id: string, favorite: boolean) => {
    const body: GameUpdateFavorite = { favorite: favorite ? false : true };
    const response: Game = await GameService.update(id, body);

    response._id
      ? setGame({ ...game, favorite: response.favorite })
      : navigate(RoutePath.NOTFOUND);
  };

  // 📌 handleVideo

  const handleVideos = () => {
    videoShown === videoIdList[0]
      ? setVideoShown(videoIdList[1])
      : setVideoShown(videoIdList[0]);
  };

  // 📌📌📌🚨 GAME CARD return

  return (
    <>
      <main className="game-card">
        <div
          className="game-card-img"
          style={{ backgroundImage: `url(${game.cover_imgUrl})` }}
        ></div>

        <div className="game-card-info">
          <div className="game-card-info-header">
            <div className="game-card-title-wrapper">
              <h2 className="game-card-title">{game.title}</h2>
              <div
                className="game-card-favorite-icon clickable"
                onClick={() => toggleFavorite(gameId, game.favorite)}
              >
                {game.favorite ? (
                  <i className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-heart"></i>
                )}
              </div>
            </div>
            <div className="game-card-subtitle">
              <div className="game-card-subtitle-wrapper">
                <div className="game-card-year">{game.year}</div>
                <div className="game-card-genres">
                  {game.genres.map((genre) => genre.name).join(", ")}
                </div>
              </div>
              <div className="game-card-rating">
                <div className="game-card-rating-icon">
                  <i className="bi bi-star"></i>
                </div>
                <div className="game-card-rating-text">{game.imdbScore}/10</div>
              </div>
            </div>
          </div>

          <div className="game-card-info-mid-container">
            <div className="game-card-description">{game.description}</div>
          </div>
        </div>

        <div className="game-card-video-outer-container">
          <div className="game-card-video-inner-container">
            <div
              className="game-card-video-arrow clickable"
              onClick={() => handleVideos()}
            >
              <i className="bi bi-chevron-double-left"></i>
            </div>

            <iframe
              src={`https://www.youtube.com/embed/${videoShown}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div
              className="game-card-video-arrow clickable"
              onClick={() => handleVideos()}
            >
              <i className="bi bi-chevron-double-right"></i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GameCard;
