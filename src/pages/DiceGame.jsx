import { useState } from "react";

function DiceGame() {
  const [diceResult, setDiceResult] = useState("-");
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("Get a bigger number than the dice");

  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceResult(randomNumber);
    setMessage("Dice rolled! Now enter your guess.");
  }

  function playGame() {
  if (userGuess === "") {
    setMessage("Enter your guess first.");
    return;
  }
  const guessNumber = Number(userGuess);

  if (guessNumber < 1 || guessNumber > 6) {
    setMessage("Please enter a number between 1 and 6.");
    return;
  }

  const randomNumber = Math.floor(Math.random() * 6) + 1;
  

  setDiceResult(randomNumber);

 if (guessNumber === randomNumber) {
  setMessage("Correct! You guessed the dice.");
  setScore(score + 1);
} else {
  setMessage("Wrong guess. Try again.");
}
}
  

  function resetGame() {
    setDiceResult("-");
    setUserGuess("");
    setMessage("Get a bigger number than the dice");
  }

  return (
    <section className="game-container">
      <h1>Dice Roll Game</h1>

      <p>Click the button to roll the dice.</p>
      <p>Enter a number from 1 to 6. If your number is the same as dice, you win.</p>

      <h2>Dice result: {diceResult}</h2>

      <div className="userDice">
        <input
          type="number"
          placeholder="Enter your guess from 1 to 6"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />

        <p>{message}</p>
      </div>

      <div className="button-group">
  <button onClick={playGame}>Play</button>
  <button onClick={resetGame}>Reset</button>
</div>
    </section>
  );
}

export default DiceGame;