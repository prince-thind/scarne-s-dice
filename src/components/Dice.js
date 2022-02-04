import { useState } from "react";

export default function Dice() {
  const [number, setNumber] = useState(randomRoll());
  return (
    <button className="dice" onClick={playRound}>
      {number}
    </button>
  );
  function playRound() {
    const random = randomRoll();
    setNumber(random);
  }

  function randomRoll() {
    return Math.trunc(Math.random() * 6 + 1);
  }
}
