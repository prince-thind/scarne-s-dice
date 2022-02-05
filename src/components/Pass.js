export default function Pass({ setTurn, setDiceNumber }) {
  return <button onClick={passTurn}>Pass</button>;

  function passTurn() {
    setTurn((turn) => {
      if (turn === "player1") {
        return "player2";
      }
      return "player1";
    });
    setDiceNumber(0);
  }
}
