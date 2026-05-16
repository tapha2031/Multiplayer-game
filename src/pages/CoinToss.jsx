import { useState } from "react";

function CoinToss() {
    const [userChoice,setUserChoice] = useState("-");
    const [coinResult, setCoinResult]= useState("-");
    const [message,setMessage]=useState("Choose heads or tails");
    const [score,setScore] = useState(0);

    function playGame(choice) {
      const options = ["Heads", "Tails"];
      const randomIndex = Math.floor(Math.random() * options.length);
      const coin = options[randomIndex];

      setUserChoice(choice);
      setCoinResult(coin);

      if (choice === coin) {
        setMessage("You guessed correctly!");
        setScore(prev => prev + 1);
      } else {
        setMessage("Wrong answer!");
      }
    }

  return (
    <section className="game-container">
      <h1>Coin Toss Game</h1>
      <p>Choose heads or tails.</p>

      <div className="button-group">
        <button onClick={()=>playGame("Heads")}>Heads</button>
        <button onClick={()=>playGame("Tails")}>Tails</button>
      </div>
    
      <p>Your choice: {userChoice}</p>
      <p>Coin result: {coinResult}</p>
      <p>Message: {message}</p>
      <p>Score: {score}</p>

      <button onClick={()=>{
        setUserChoice("-");
        setCoinResult("-");
        setMessage("Choose heads or tails");
        setScore(0);
      }}> Reset </button>

    </section>
  );
}

export default CoinToss;