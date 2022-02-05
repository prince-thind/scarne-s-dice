export default function Dice({
  setTurn,
  turn,
  setScores,
  diceNumber,
  setDiceNumber,
}) {
  return (
    <button className="dice button" onClick={playRound}>
      {diceNumber}
    </button>
  );

  function playRound() {
    const random = randomRoll();
    setDiceNumber(random);

    if (random === 1) {
      resetMove();
    } else if (random > 1) {
      incrementScore(random);
    }
  }

  function incrementScore(number) {
    setScores((scores) => {
      const copy = { ...scores };
      copy[turn] = scores[turn] + number;
      return copy;
    });
  }

  function resetMove() {
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
  }

  function randomRoll() {
    return Math.trunc(Math.random() * 6 + 1);
  }
}
