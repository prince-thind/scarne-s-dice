import { useEffect, useState } from "react";
import Dice from "./components/Dice";
import Header from "./components/Header";
import Pass from "./components/Pass";

function App() {
  const [turn, setTurn] = useState("player1");
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
  });
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (scores.player1 >= 100) {
      setWinner("player1");
    } else if (scores.player2 >= 100) {
      setWinner("player2");
    }
  }, [scores]);

  return (
    <div className="App">
      <Header
        scores={scores}
        setScores={setScores}
        turn={turn}
        setWinner={setWinner}
      />
      <main>
        <MainContent />
      </main>
    </div>
  );
  
  function MainContent() {
    if (winner) {
      return <div>{winner} has Won!</div>;
    }
    return (
      <div>
        <Dice setScores={setScores} turn={turn} setTurn={setTurn} />
        <Pass setTurn={setTurn} />
      </div>
    );
  }
}

export default App;
