import { useState } from "react";
import "./GameBoard.scss";

const GameBoard = ({ generatedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const [lessthan, setLessthan] = useState(null);
  const [gameOn, setGameOn] = useState(null);
  const [message, setMessage] = useState(null);
  const [playAgain, setPlayAgain] = useState(null);

  const guessTheNumber = () => {
    if (Number(enteredNumber) === generatedNumber) {
      alert("Congo Dear 🏆");
      setMessage({
        color: "green",
        msg: `Congratulations!! My Number was ${generatedNumber}`,
      });

      setPlayAgain(true);
    } else {
      if (guessedNumbers.length < 4) {
        setGuessedNumbers([...guessedNumbers, enteredNumber]);
        setMessage({
          color: "black",
          msg: `Try Again!!`,
        });

        setGameOn(true);

        if (enteredNumber > generatedNumber) {
          setLessthan(true);
        } else setLessthan(false);
      } else {
        setGuessedNumbers([]);
        setMessage({
          color: "#dd5353",
          msg: `OOPS!! No turns left!! My Number was ${generatedNumber}`,
        });
        setGameOn(false);
        setPlayAgain(true);
      }
    }

    setEnteredNumber(0);
  };

  return (
    <section className="gameBoard ">
      <div className="input__area container">
        <input
          value={enteredNumber}
          onChange={(e) => setEnteredNumber(e.target.value)}
          type="number"
          min={0}
          max={100}
        />
        <button onClick={guessTheNumber}>Guess</button>
      </div>

      <div className="turns__left">
        <p>Turns left: {5 - guessedNumbers.length}</p>
      </div>

      <div className="input__hints">
        <div
          className="hint"
          style={{ color: `${gameOn ? "green" : "#bcbcbc"}` }}
        >
          <i className="bx bx-badge-check"></i>
          <p>Good try</p>
        </div>
        <div
          className="hint"
          style={{ color: `${lessthan && gameOn ? "green" : "#bcbcbc"}` }}
        >
          <i className="bx bx-badge-check"></i>
          <p>Less than entered number</p>
        </div>
      </div>

      {message && (
        <div className="result" style={{ background: `${message.color}` }}>
          <p>{message.msg}</p>
        </div>
      )}

      {playAgain && (
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <a href="/">Play again</a>
        </div>
      )}
    </section>
  );
};

export default GameBoard;
