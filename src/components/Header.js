export default function Header({scores,turn}) {
  return (
    <header>
      <h1 className="heading">Scarne's Dice</h1>
      <div>
        <div className="score player1-score">{scores.player1}</div>
        <div>{turn}'s turn</div>
        <div className="score player2-score">{scores.player2}</div>
      </div>
    </header>
  );
}
