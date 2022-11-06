import "./GameForm.css";

import { GameFormProps } from "./types";

const GameForm = ({ setShowGameForm, genres }: GameFormProps) => {
  return (
    <>
      <section className="admin-section admin-games-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>games</h2>

            <div className="admin-header-icon-wrapper">
              <div
                className="admin-header-icon clickable"
                onClick={() => setShowGameForm(false)}
              >
                <i className="bi bi-x-lg"></i>
              </div>
            </div>
          </div>
        </div>

        <form className="game-form">
          <div className="game-form-left-column">
            <div className="game-form-header">
              <div className="game-form-cover-img">
                <i className="bi bi-controller"></i>
              </div>
              <div className="game-form-header-inputs">
                <input
                  type="text"
                  name="title"
                  placeholder="game title"
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="cover_imgUrl"
                  placeholder="cover image URL"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="game-form-genres">
              <h3 className="genre-form-title">GENRES:</h3>
              {genres.map((genre, index) => (
                <div
                  className="game-form-genre"
                  key={`game-form-genre-${index}`}
                >
                  <div className="game-form-genre-checkbox">
                    <i className="bi bi-square"></i>
                  </div>
                  <div className="game-form-genre-name">{genre.name}</div>
                </div>
              ))}
            </div>

            <textarea name="description" placeholder="description"></textarea>

            <fieldset>
              <input
                type="text"
                name="year"
                placeholder="year"
                autoComplete="off"
              />

              <input
                type="text"
                name="imdbScore"
                placeholder="IMDB score"
                autoComplete="off"
              />
            </fieldset>

            <input
              type="text"
              name="trailer_youTubeUrl"
              placeholder="trailer YouTube URL"
              autoComplete="off"
            />

            <input
              type="text"
              name="gameplay"
              placeholder="gameplay YouTube URL"
              autoComplete="off"
            />

            <div className="game-form-buttons">
              <div className="game-form-button clickable">
                <i className="bi bi-x-circle"></i>
              </div>
              <div className="game-form-button clickable">
                <i className="bi bi-check-circle"></i>
              </div>
            </div>
          </div>

          <div className="game-form-right-column">
            <div className="game-form-video">
              <i className="bi bi-camera-video"></i>
              {/* <iframe
                src={`https://www.youtube.com/embed/iHDXpiNj6QI`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>

            <div className="game-form-video">
              <i className="bi bi-camera-video"></i>

              {/* <iframe
                src={`https://www.youtube.com/embed/iHDXpiNj6QI`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default GameForm;
