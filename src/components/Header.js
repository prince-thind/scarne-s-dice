import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRedo } from "@fortawesome/free-solid-svg-icons";

export default function Header({ scores,setDiceNumber, turn, setScores, setWinner }) {
  return (
    <header>
      <h1 className="heading">Scarne's Dice</h1>
      <div className="scores">
        <div className=" score player1-score">
          <FontAwesomeIcon icon={faUser} />
        <div className="numeric-score">
          {scores.player1}
          </div>
        </div>
        <div>{formatUserName(turn)}</div>
        <div className="score player2-score">
        <div className="numeric-score">
          {scores.player2}
          </div>
             <FontAwesomeIcon icon={faUser} /></div>
      </div>
      <button className="reset" onClick={reset}>
      <FontAwesomeIcon icon={faRedo} />
       
      </button>
    </header>
  );

  function reset() {
    setScores({ player1: 0, player2: 0 });
    setWinner(null);
    setDiceNumber(0);
  }

  function formatUserName(turn){
    const capital=turn[0].toUpperCase();
    const rest=turn.slice(1)+"'s Turn";
    return capital+rest;
  }
}
