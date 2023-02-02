export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;
  const winnerText = winner === false ? "Draw" : "Winner";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <p>{winner}</p>
        <button className="button" onClick={resetGame}>
          Restart game
        </button>
      </div>
    </section>
  );
};
