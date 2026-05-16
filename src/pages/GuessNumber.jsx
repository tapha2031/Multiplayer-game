import { useState } from "react";
function GuessNumber() {const [secretNumber, setSecretNumber] = useState(
  Math.floor(Math.random() * 20) + 1
);

const [guess, setGuess] = useState("");
const [message, setMessage] = useState("Make your first guess!");
const [attempts, setAttempts] = useState(0);

  function ResetGame(){
    setSecretNumber(Math.floor(Math.random()*20)+1);
    setGuess("");
    setMessage("Make your first guess");
    setAttempts(0);
  }
  function checkGuess() {
  
  
  if (guess === "") {
  setMessage("Please enter a number first.");
  return;
}
  const userGuess = Number(guess);

  if (userGuess < 1 || userGuess > 20) {
  setMessage("Please enter a number between 1 and 20.");
  return;
}
  if (userGuess < secretNumber) {
    setMessage("Too low!");
  } else if (userGuess > secretNumber) {
    setMessage("Too high!");
  } else {
    setMessage("Correct! You found the number.");
  }

  setAttempts(attempts + 1);
}
  return (
    <section>
      <h1>Guess the Number</h1>
      <p>I am thinking of a number between 1 and 20.</p>

      <input type="number" placeholder="Enter your guess"  
      value={guess} onChange={(e)=> setGuess(e.target.value)}/>

      <div className="button-group">
      <button onClick={checkGuess}> Check </button>
      <button onClick={ResetGame}>Reset</button>
      </div>

      <p>{message}</p>
      <p> Attempts : {attempts}</p>
    </section>
  );
}

export default GuessNumber;