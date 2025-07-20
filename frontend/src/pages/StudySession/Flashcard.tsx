import React, { useState } from "react";
import { Card } from "../../types";
import styles from "./Flashcard.module.css";

interface FlashcardProps {
  card: Card;
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className={styles.flashcard}
      onClick={() => setIsRevealed((prev) => !prev)}
    >
      <div className={styles.cardContent}>
        <p className={styles.frontText}>{card.front}</p>
        <div
          className={`${styles.answerSection} ${
            isRevealed ? styles.unfold : ""
          }`}
        >
          <hr className="divider" />
          <p className={styles.backText}>{card.back}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
