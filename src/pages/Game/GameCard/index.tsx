import "./GameCard.css";

import { useState, useEffect } from "react";

import { GameCardProps } from "./types";

const GameCard = ({ game, toggleFavorite }: GameCardProps) => {
  // 📌 handleVideo

  useEffect(() => {
    const youTubeTrailer = game.trailer_youTubeUrl.split("=")[1];
    const youTubeGameplay = game.gameplay_youTubeUrl.split("=")[1];

    setVideoIdList([youTubeTrailer, youTubeGameplay]);
    setVideoShown(youTubeTrailer);
  }, []);

  const [videoIdList, setVideoIdList] = useState<string[]>([]);
  const [videoShown, setVideoShown] = useState<string | undefined>();

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
          style={{ backgroundImage: `url(${game?.cover_imgUrl})` }}
        ></div>

        <div className="game-card-info">
          <div className="game-card-info-header">
            <div className="game-card-title-wrapper">
              <h2 className="game-card-title">{game?.title}</h2>
              <div
                className="game-card-favorite-icon clickable"
                onClick={() => toggleFavorite(game._id, game.favorite)}
              >
                {game?.favorite ? (
                  <i className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-heart"></i>
                )}
              </div>
            </div>
            <div className="game-card-subtitle">
              <div className="game-card-subtitle-wrapper">
                <div className="game-card-year">{game?.year}</div>
                <div className="game-card-genres">
                  {game?.genres.map((genre) => genre.name).join(", ")}
                </div>
              </div>
              <div className="game-card-rating">
                <div className="game-card-rating-icon">
                  <i className="bi bi-star"></i>
                </div>
                <div className="game-card-rating-text">
                  {game?.imdbScore}/10
                </div>
              </div>
            </div>
          </div>

          <div className="game-card-info-mid-container">
            <div className="game-card-description">{game?.description}</div>
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
