import { useState } from "react";
import Dice from "./components/Dice";
import Header from "./components/Header";
import Pass from "./components/Pass";

function App() {
  const [turn, setTurn] = useState("player1");
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
  });

  return (
    <div className="App">
      <Header scores={scores} turn={turn} />
      <main>
        <Dice setScores={setScores} turn={turn} setTurn={setTurn} />
        <Pass setTurn={setTurn} />
      </main>
    </div>
  );
}

export default App;
