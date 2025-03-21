import React from "react";
import { Card } from "../types";

interface FlashcardProps {
  card: Card;
  isRevealed: boolean;
  setIsRevealed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Flashcard: React.FC<FlashcardProps> = ({
  card,
  isRevealed,
  setIsRevealed,
}) => {
  return (
    <div className="flashcard" onClick={() => setIsRevealed(!isRevealed)}>
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
