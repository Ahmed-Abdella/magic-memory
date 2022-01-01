import "./SingleCard.css";

export default function singleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = (event) => {
    if (!disabled) {
      handleChoice(card, event);
    }
  };
  return (
    <div>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            src="/img/cover.png"
            onClick={handleClick}
            alt="card back"
          />
        </div>
      </div>
    </div>
  );
}
