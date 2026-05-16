import {useState} from "react";


function Reactiontime(){
    const [message, setMessage] = useState("Click Start to begin.");
const [startTime, setStartTime] = useState(null);
const [reactionTime, setReactionTime] = useState(null);
const [bestTime, setBestTime] = useState(null);
const [isReady, setIsReady] = useState(false);
const [isWaiting, setIsWaiting] = useState(false);

    function startGame() {
  setMessage("Wait...");
  setReactionTime(null);
  setIsWaiting(true);
  setIsReady(false);

  const delay = Math.floor(Math.random() * 3000) + 1000;

  setTimeout(() => {
    setMessage("CLICK NOW!");
    setStartTime(Date.now());
    setIsReady(true);
    setIsWaiting(false);
  }, delay);
}
function handleClick() {
  if (isWaiting && !isReady) {
    setMessage("Too early! Click Start to try again.");
    setIsWaiting(false);
    setIsReady(false);
    return;
  }

  if (isReady) {
    const endTime = Date.now();
    const time = endTime - startTime;

    setReactionTime(time);
    setMessage(`Your reaction time is ${time} ms`);
    setIsReady(false);

    if (bestTime === null || time < bestTime) {
      setBestTime(time);
    }
  }
}
function resetGame() {
  setMessage("Click Start to begin.");
  setStartTime(null);
  setReactionTime(null);
  setBestTime(null);
  setIsReady(false);
  setIsWaiting(false);
}
    return(
    <div>
       <section className="game-container">
  <h1>Reaction Time Game</h1>

  <p>Wait for the signal, then click as fast as possible.</p>

  <div className="reaction-box" onClick={handleClick}>
    <h2>{message}</h2>
  </div>

  <div className="button-group">
    <button onClick={startGame}>Start</button>
    <button onClick={resetGame}>Reset</button>
  </div>

  <p>
    Reaction Time: {reactionTime === null ? "-" : `${reactionTime} ms`}
  </p>

  <p>
    Best Time: {bestTime === null ? "-" : `${bestTime} ms`}
  </p>
</section>
    </div>
);
}
export default Reactiontime;