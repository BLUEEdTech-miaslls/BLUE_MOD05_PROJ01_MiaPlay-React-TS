import "./GameList.css";

import GameListItem from "./GameListItem";

const GameList = () => {
  return (
    <>
      <section className="game-list-container">
        <div className="game-list-header">
          <div className="genre">
            <h2>genre</h2>
          </div>
        </div>
        <ul className="game-list-items">
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
        </ul>
      </section>
    </>
  );
};

export default GameList;
