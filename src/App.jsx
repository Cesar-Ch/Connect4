import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import ButtonsPlayer from "./components/ButtonsPlayer";
import { WinnerModal } from "./components/WinnerModal";
import Players from "./components/Players";

function App() {
  const players = {
    p1: "🔴",
    p2: "🟡",
  };

  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(players.p1);
  const [winner, setWinner] = useState(null);


  const checkWinner = (boardToCheck) => {
    for (let i = 0; i < 39; i++) {
      if (
        boardToCheck[i] &&
        boardToCheck[i] === boardToCheck[i + 1] &&
        boardToCheck[i] === boardToCheck[i + 2] &&
        boardToCheck[i] === boardToCheck[i + 3]
      ) {
        return boardToCheck[i];
      }
      if (
        boardToCheck[i] &&
        boardToCheck[i] === boardToCheck[i + 7] &&
        boardToCheck[i] === boardToCheck[i + 14] &&
        boardToCheck[i] === boardToCheck[i + 21]
      ) {
        return boardToCheck[i];
      }
      if (
        boardToCheck[i] &&
        boardToCheck[i] === boardToCheck[i + 8] &&
        boardToCheck[i] === boardToCheck[i + 16] &&
        boardToCheck[i] === boardToCheck[i + 24]
      ) {
        return boardToCheck[i];
      }
    }

    return null;
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === players.p1 ? players.p2 : players.p1;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(players.p1);
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>Connect4</h1>
      <ButtonsPlayer board={board} updateBoard={updateBoard} />
      <section className="game">
        {board.map((circle, index) => (
          <div className="circle">
            <p>{circle}</p>
          </div>
        ))}
      </section>

      <section className="turn">
        <Players isSelected={turn === players.p1}>{players.p1}</Players>
        <Players isSelected={turn === players.p2}>{players.p2}</Players>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </div>
  );
}

export default App;
