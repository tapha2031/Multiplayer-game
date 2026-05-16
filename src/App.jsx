import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GuessNumber from "./pages/GuessNumber";
import RockPaperScissors from "./pages/RockPaperScissors";
import DiceGame from "./pages/DiceGame";
import CoinToss from "./pages/CoinToss";
import MathQuiz from "./pages/MathQuiz";
import Reactiontime from "./pages/ReactionTime";


function App() {
  return (
    <>
    <Navbar />

    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/games/guess-number" element={<GuessNumber/>} />
        <Route path="/games/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/games/dice-game" element={<DiceGame/>} />
        <Route path="/games/cointoss" element={<CoinToss/>} />
        <Route path="/games/mathQuiz" element={<MathQuiz/>} />
        <Route path="/games/reactionTime" element={<Reactiontime/>} />
      
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </main>
    </>
  );
}

export default App;