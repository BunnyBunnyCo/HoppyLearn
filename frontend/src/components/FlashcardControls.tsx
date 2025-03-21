import React from "react";

interface FlashcardControlsProps {
  prevCard: () => void;
  nextCard: () => void;
}

const FlashcardControls: React.FC<FlashcardControlsProps> = ({
  prevCard,
  nextCard,
}) => {
  return (
    <div className="flashcard-controls">
      <button className="card-control-button" onClick={prevCard}>
        Prev Card
      </button>
      <button className="card-control-button" onClick={nextCard}>
        Next Card
      </button>
    </div>
  );
};

export default FlashcardControls;
