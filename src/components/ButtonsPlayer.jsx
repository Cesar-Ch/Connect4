const ButtonsPlayer = ({ board, updateBoard }) => {
  const ButtonPlayer = (index) => {
    if (board[index - 28]) {
      updateBoard(index - 35);
    } else if (board[index - 21]) {
      updateBoard(index - 28);
    } else if (board[index - 14]) {
      updateBoard(index - 21);
    } else if (board[index - 7]) {
      updateBoard(index - 14);
    } else if (board[index]) {
      updateBoard(index - 7);
    } else {
      updateBoard(index);
    }
  };
  return (
    <div className="Buttons">
      <button
        className="buttonAddPoints"
        onClick={() => {
          ButtonPlayer(35);
        }}
      >
        Click
      </button>
      <button
        className="buttonAddPoints"
        onClick={() => {
          ButtonPlayer(36);
        }}
      >
        Click
      </button>
      <button
        className="buttonAddPoints"
        onClick={() => {
          ButtonPlayer(37);
        }}
      >
        Click
      </button>
      <button
        className="buttonAddPoints"
        onClick={() => {
          ButtonPlayer(38);
        }}
      >
        Click
      </button>
      <button
        className="buttonAddPoints"
        onClick={() => {
          ButtonPlayer(39);
        }}
      >
        Click
      </button>
      <button
        className="buttonAddPoints"
        onClick={() => {
          ButtonPlayer(40);
        }}
      >
        Click
      </button>
      <button
        className="buttonAddPoints"
        onClick={() => {
          ButtonPlayer(41);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default ButtonsPlayer;
