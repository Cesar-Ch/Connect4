import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
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
        if (
          i < 4 ||
          (i > 6 && i < 11) ||
          (i > 13 && i < 18) ||
          (i > 20 && i < 25) ||
          (i > 27 && i < 32) ||
          i > 34
        ) {
          return boardToCheck[i];
        }
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
        if (i < 4 || (i > 6 && i < 11) || i > 13) {
          return boardToCheck[i];
        }
      }
      if (
        boardToCheck[i] &&
        boardToCheck[i] === boardToCheck[i + 6] &&
        boardToCheck[i] === boardToCheck[i + 12] &&
        boardToCheck[i] === boardToCheck[i + 18]
      ) {
        if (
          (i > 2 && i < 7) ||
          (i > 9 && i < 14) ||
          (i > 16 && i < 21) ||
          i > 23
        ) {
          return boardToCheck[i];
        }
      }
    }

    return null;
  };

  const checkIndex = (index, board) => {
    console.log(board)
    let newBoard = [...board];
    if (board[index + 35] === null) {
      newBoard[index + 35] = turn;
      setBoard(newBoard);
    } else if (board[index + 28] === null) {
      newBoard[index + 28] = turn;
      setBoard(newBoard);
    } else if (board[index + 21] === null) {
      newBoard[index + 21] = turn;
      setBoard(newBoard);
    } else if (board[index + 14] === null) {
      newBoard[index + 14] = turn;
      setBoard(newBoard);
    } else if (board[index + 7] === null) {
      newBoard[index + 7] = turn;
      setBoard(newBoard);
    } else if (board[index]) {
      newBoard[index] = turn;
      setBoard(newBoard);
    }
    console.log(newBoard)
    return newBoard;
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = checkIndex(index, board);
    if (board.toString() !== newBoard.toString()) {
      const newTurn = turn === players.p1 ? players.p2 : players.p1;
      setTurn(newTurn);
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        confetti();
        setWinner(newWinner);
      } else if (checkEndGame(newBoard)) {
        console.log("Here");
        setWinner(false);
      }
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
      <section className="game">
        {board.map((circle, index) => (
          <div
            className="circle"
            key={index}
            onClick={() => {
              updateBoard(index);
            }}
          >
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
