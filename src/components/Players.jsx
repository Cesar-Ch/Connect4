const Players = ({ children, isSelected }) => {
  const classPlayer = `player ${isSelected ? "is-selected " : ""}`;

  return (
    <div>
      <div className={classPlayer}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Players;
