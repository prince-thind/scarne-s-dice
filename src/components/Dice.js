import { useState } from "react";

export default function Dice({ setTurn, turn, setScores }) {
  const [number, setNumber] = useState(randomRoll());
  return (
    <button className="dice" onClick={playRound}>
      {number}
    </button>
  );

  function playRound() {
    const random = randomRoll();
    setNumber(random);

    if (random === 10) {
      setScores((scores) => {
        const copy = { ...scores };
        copy[turn] = 0;
        return copy;
      });
      setTurn((turn) => {
        if (turn === "player1") {
          return "player2";
        } else return "player1";
      });
    } else {
      setScores((scores) => {
        const copy = { ...scores };
        copy[turn] = scores[turn]+random;
        return copy;
      });
    }
  }

  function randomRoll() {
    return Math.trunc(Math.random() * 6 + 1);
  }
}
