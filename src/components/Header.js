export default function Header({ scores, turn, setScores, setWinner }) {
  return (
    <header>
      <h1 className="heading">Scarne's Dice</h1>
      <div>
        <div className="score player1-score">{scores.player1}</div>
        <div>{turn}'s turn</div>
        <div className="score player2-score">{scores.player2}</div>
      </div>
      <button
        onClick={() => {
          setScores({ player1: 0, player2: 0 });
          setWinner(null);
        }}
      >
        {" "}
        reset{" "}
      </button>
    </header>
  );
}
