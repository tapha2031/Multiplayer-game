import { useState } from "react";

function MathQuiz() {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("Answer the question.");
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [score, setScore] = useState(0);

  function checkAnswer() {
    if (answeredCorrectly) {
      setMessage("You already answered this question. Click New Question.");
      return;
    }

    if (answer === "") {
      setMessage("Please enter an answer first.");
      return;
    }

    const correctAnswer = num1 + num2;
    const userAnswer = Number(answer);

    if (userAnswer === correctAnswer) {
      setMessage("Correct!");
      setScore(score + 1);
      setAnsweredCorrectly(true);
    } else {
      setMessage("Wrong answer. Try again.");
    }
  }

  function newQuestion() {
    const randomNum1 = Math.floor(Math.random() * 10) + 1;
    const randomNum2 = Math.floor(Math.random() * 10) + 1;

    setNum1(randomNum1);
    setNum2(randomNum2);
    setAnswer("");
    setMessage("Answer the new question.");
    setAnsweredCorrectly(false);
  }

  function resetGame() {
    setNum1(5);
    setNum2(3);
    setAnswer("");
    setMessage("Answer the question.");
    setScore(0);
    setAnsweredCorrectly(false);
  }

  return (
    <section className="game-container">
      <h1>Math Quiz Game</h1>

      <p>Solve the math question and check your answer.</p>

      <h2>
        What is {num1} + {num2}?
      </h2>

      <input
        type="number"
        placeholder="Enter your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <div className="button-group">
        <button onClick={checkAnswer}>Check Answer</button>
        <button onClick={newQuestion}>New Question</button>
        <button onClick={resetGame}>Reset</button>
      </div>

      <p>Message: {message}</p>
      <p>Score: {score}</p>
    </section>
  );
}

export default MathQuiz;