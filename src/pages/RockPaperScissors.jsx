import { useState } from "react";

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState("-");
  const [computerChoice, setComputerChoice] = useState("-");
  const [result, setResult] = useState("Make your move!");
  const [score, setScore] = useState(0);
  const [ComputerScore , setComputerScore] =useState(0);


  function playGame(choice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computer);

    if(choice === computer){
        setResult("Draw!");
    }
    else if(
        (choice === "Rock" && computer === "Scissors")||
        (choice === "Paper" && computer === "Rock")||
        (choice === "Scissors" && computer === "Paper")
    ){
        setResult("You win!!");
        setScore(score+1);
    }
    else {
        setResult("You lose!!!");
        setComputerScore(ComputerScore+1);
    }
    
  }
  function resetGame(){
        setUserChoice("-");
        setComputerChoice("-");
        setComputerScore(0);
        setScore(0);
        setResult("Make yout first move!");
    }

  return (
    <section className="game-container">
      <h1>Rock Paper Scissors</h1>
      <p>Choose one option then game will start</p>

      <div className="button-group">
        <button onClick={() => playGame("Rock")}>Rock</button>
        <button onClick={() => playGame("Paper")}>Paper</button>
        <button onClick={() => playGame("Scissors")}>Scissors</button>
      </div>

      <p>Your choice: {userChoice}</p>
      <p>Computer choice: {computerChoice}</p>
      <p>Result: {result}</p>
      <p>Score: {score}</p>
      <p>Computer Score: {ComputerScore}</p>

      <button onClick={resetGame} >Reset</button>
    </section>
  );
}

export default RockPaperScissors;