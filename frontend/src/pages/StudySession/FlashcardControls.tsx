import React from "react";
import styles from "./FlashcardControls.module.css";

interface FlashcardControlsProps {
  prevCard: () => void;
  nextCard: () => void;
}

const FlashcardControls: React.FC<FlashcardControlsProps> = ({
  prevCard,
  nextCard,
}) => {
  return (
    <div className={styles.flashcardControls}>
      <button className={styles.cardControlButton} onClick={prevCard}>
        Prev Card
      </button>
      <button className={styles.cardControlButton} onClick={nextCard}>
        Next Card
      </button>
    </div>
  );
};

export default FlashcardControls;
