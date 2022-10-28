import "./Game.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import gameCardImg from "../../mocks/img/the-sims-4.png";

const Game = () => {
  return (
    <>
      <div className="generic-page-container">
        <div className="wrapper">
          <Header />

          <main className="game-card">
            <div
              className="game-card-img"
              style={{ backgroundImage: `url(${gameCardImg})` }}
            ></div>

            <div className="game-card-info">
              <div className="game-card-info-header">
                <h2 className="game-card-title">The Sims 4</h2>
                <div className="game-card-subtitle">
                  <div className="game-card-subtitle-wrapper">
                    <div className="game-card-year">2014</div>
                    <div className="game-card-genres">
                      simulation, fantasy, blablibla
                    </div>
                  </div>
                  <div className="game-card-rating">
                    <div className="game-card-rating-icon">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="game-card-rating-text">6.8/10</div>
                  </div>
                </div>
              </div>

              <div className="game-card-info-mid-container">
                <div className="game-card-description">
                  Unleash your imagination and create a unique world of Sims
                  that's an expression of you! Explore and customize every
                  detail from Sims to homes, and much more.
                </div>
              </div>

              <div className="game-card-info-bottom-container">
                <div className="game-card-option-icon clickable">
                  <i className="bi bi-pencil"></i>
                </div>
                <div className="game-card-option-icon clickable">
                  <i className="bi bi-trash3"></i>
                </div>
                <div className="game-card-option-icon clickable">
                  <i className="bi bi-heart"></i>
                </div>
              </div>
            </div>

            <div className="game-card-video-outer-container">
              <div className="game-card-video-inner-container">
                <div className="game-card-video-arrow clickable">
                  <i className="bi bi-chevron-double-left"></i>
                </div>
                <iframe
                  src="https://www.youtube.com/embed/GJENRAB4ykA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="game-card-video-arrow clickable">
                  <i className="bi bi-chevron-double-right"></i>
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Game;
