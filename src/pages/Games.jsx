import GameCard from "../components/GameCard";

function Games() {
  return (
    <section>
      <h1>Games</h1>
      <p>Choose a game to start playing.</p>

      <div className="games-grid">
        <GameCard
          title="Guess the Number"
          description="Try to guess the secret number between 1 and 20."
          path="/games/guess-number"
        />

        <GameCard
          title="Rock Paper Scissors"
          description="Play rock, paper, scissors against the computer."
          path="/games/rock-paper-scissors"
        />
        <GameCard
        title="Dice Roll Game"
        description="Roll the dice and test your luck."
        path="/games/dice-game"
        />
        <GameCard
        title="Math Quiz"
        description="Calculate and find the sum."
        path="/games/mathquiz"
        />
        <GameCard
        title="Reaction Time"
        description="How fast are you?."
        path="/games/reactiontime"
        />
      </div>
    </section>
  );
}

export default Games;