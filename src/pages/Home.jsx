import { Link } from "react-router-dom";
import Dice from "../assets/dicegame.png";
import numberGuess from "../assets/guessthenum.png";
import RockPaperScissors from '../assets/paper-rock-scissors.avif';
import Cointoss from "../assets/Cointoss.png"
import mathQuiz from "../assets/mathquiz.png"
import reactionTime from "../assets/reactiontime.webp"

function Home() {
  return (
    <section className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Mini Game Platform</h1>
          <p>
            Play simple browser games, improve your logic, and have fun while
            learning React.
          </p>
          <p className="author">Created by Dg</p>
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
            <img src={Dice} alt="Dice game" />
            <h3>Dice Game</h3>
            <p>Roll the dice and test your luck.</p>
            <Link to="/games/dice-game">Play</Link>
          </div>

          <div className="home-game-card">
            <img src={Cointoss} alt="CoinToss" />
            <h3>Coin Toss</h3>
            <p>Choose head or Tails.</p>
            <Link to="/games/cointoss">Play Now</Link>
          </div>
          <div className="home-game-card">
            <img src={mathQuiz} alt="mathQuiz" />
            <h3>Math Quiz</h3>
            <p>Test your math skills .</p>
            <Link to="/games/mathQuiz">Play Now</Link>
          </div>
          <div className="home-game-card">
            <img src={reactionTime} alt="reactiontime" />
            <h3>Reaction Time</h3>
            <p>Play against the computer and try to win.</p>
            <Link to="/games/reactionTime">Play Now</Link>
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
          <p>Practice components, props, state, and routing.</p>
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