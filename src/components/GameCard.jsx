import { Link } from "react-router-dom";

function GameCard({ title, description, path }) {
  return (
    <div className="game-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <Link className="play-button" to={path}>
        Play
      </Link>
    </div>
  );
}

export default GameCard;