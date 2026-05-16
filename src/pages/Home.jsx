import { Link } from "react-router-dom";
import Dice from "../assets/dicegame.png";
import numberGuess from "../assets/guessthenum.png";
import RockPaperScissors from "../assets/paper-rock-scissors.avif";
import Cointoss from "../assets/cointoss.png";
import mathQuiz from "../assets/mathquiz.png";
import reactionTime from "../assets/reactiontime.webp";

function Home() {
  const appName = import.meta.env.VITE_APP_NAME || "Mini Game Platform";
const authorName = import.meta.env.VITE_AUTHOR_NAME || "Mouhamadou Moustapha Diagne";

  return (
    <section className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to {appName}</h1>

          <p>
            Play simple browser games, improve your logic, and have fun while
            learning React.
          </p>

          <p className="author">Created by {authorName}</p>

          <Link to="/games" className="hero-button">
            Explore Games
          </Link>
        </div>

        <div className="hero-image">
          <img src={Dice} alt="Dice game illustration" />
        </div>
      </div>

      <div className="home-games-section">
        <h2>Popular Games</h2>

        <div className="home-games-grid">
          <div className="home-game-card">
            <img src={numberGuess} alt="Guess the number game" />
            <h3>Guess the Number</h3>
            <p>Try to guess the secret number between 1 and 20.</p>
            <Link to="/games/guess-number">Play Now</Link>
          </div>

          <div className="home-game-card">
            <img src={RockPaperScissors} alt="Rock Paper Scissors game" />
            <h3>Rock Paper Scissors</h3>
            <p>Play against the computer and try to win.</p>
            <Link to="/games/rock-paper-scissors">Play Now</Link>
          </div>

          <div className="home-game-card">
            <img src={Dice} alt="Dice game" />
            <h3>Dice Game</h3>
            <p>Guess the dice number between 1 and 6.</p>
            <Link to="/games/dice-game">Play Now</Link>
          </div>

          <div className="home-game-card">
            <img src={Cointoss} alt="Coin Toss game" />
            <h3>Coin Toss</h3>
            <p>Choose Heads or Tails and test your luck.</p>
            <Link to="/games/coin-toss">Play Now</Link>
          </div>

          <div className="home-game-card">
            <img src={mathQuiz} alt="Math Quiz game" />
            <h3>Math Quiz</h3>
            <p>Solve simple math questions and increase your score.</p>
            <Link to="/games/math-quiz">Play Now</Link>
          </div>

          <div className="home-game-card">
            <img src={reactionTime} alt="Reaction Time game" />
            <h3>Reaction Time</h3>
            <p>Test how fast you can react when the signal appears.</p>
            <Link to="/games/reaction-time">Play Now</Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h2>Simple Games</h2>
          <p>Beginner-friendly games built with React.</p>
        </div>

        <div className="feature-card">
          <h2>React Practice</h2>
          <p>Practice components, props, state, routing, and events.</p>
        </div>

        <div className="feature-card">
          <h2>Expandable</h2>
          <p>More games can be added easily as the platform grows.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;