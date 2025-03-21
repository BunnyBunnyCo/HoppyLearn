import React, { useState, useEffect } from "react";
import { Card } from "../types";

interface FlashcardProps {
  card: Card;
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flashcard" onClick={() => setIsRevealed((prev) => !prev)}>
      <div className="card-content">
        <p className="front-text">{card.front}</p>
        <div className={`answer-section ${isRevealed ? "unfold" : ""}`}>
          <hr className="divider" />
          <p className="back-text">{card.back}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
