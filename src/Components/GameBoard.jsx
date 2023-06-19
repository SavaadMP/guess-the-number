import "./GameBoard.scss";

const GameBoard = () => {
  return (
    <section className="gameBoard ">
      <div className="input__area container">
        <input type="number" min={0} max={100} />
        <button>Guess</button>
      </div>

      <div className="turns__left">
        <p>Turns left: 3</p>
      </div>

      <div className="input__hints">
        <div className="hint">
          <i class="bx bx-badge-check"></i>
          <p>Good try</p>
        </div>
        <div className="hint">
          <i class="bx bx-badge-check"></i>
          <p>Less than entered number</p>
        </div>
        <div className="hint">
          <i class="bx bx-badge-check"></i>
          <p>Very Close</p>
        </div>
      </div>

      <div className="result">
        <p>Oops!! No turns left. My number was 32</p>
      </div>
    </section>
  );
};

export default GameBoard;
