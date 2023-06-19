import GameBoard from "./Components/GameBoard";

const App = () => {
  const secretNumber = Math.floor(Math.random() * 100);

  return (
    <>
      <header className="container">
        <div className="welcome_msg">
          <h1>Welcome 👋</h1>
        </div>
      </header>

      <div className="instructions container">
        <h2>Guess the hidden number 🏆🤞</h2>
        <div className="points">
          <p> - The computer will select a secret number in between 1 to 100</p>
          <p>
            - The computer will give you a hint whether it was less than or
            higher than entered number
          </p>
          <p>
            - You have total 5 tries, See how many turns it takes you to win!
          </p>
        </div>
      </div>

      <GameBoard generatedNumber={secretNumber} />
    </>
  );
};

export default App;
