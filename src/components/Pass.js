export default function Pass({ setTurn }) {
  return <button onClick={passTurn}>Pass</button>;
  function passTurn() {
    setTurn((turn) => {
      if (turn === "player1") {
        return "player2";
      } else return "player1";
    });
  }
}
