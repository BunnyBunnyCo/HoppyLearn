import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DecksContext } from "../contexts/DecksContextProvider";
import { CurrentDeckContext } from "../contexts/CurrentDeckContextProvider";
import Flashcard from "./Flashcard";
import FlashcardControls from "./FlashcardControls";

const StudyDeckMenu: React.FC = () => {
  const { decks } = useContext(DecksContext);
  const { currentDeck } = useContext(CurrentDeckContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const deck = decks.get(currentDeck.id);
  if (!deck) {
    return <h1>Deck Not Found!</h1>;
  }

  if (deck.cards.length === 0)
    return (
      <div>
        <h1>Your {deck.name} deck has no Cards!</h1>
        <Link to={`/edit/${deck.id}`}>
          <button className="card-control-button">
            <h1 className="text">Add Cards!</h1>
          </button>
        </Link>
      </div>
    );

  const nextCard = () => {
    if (currentIndex < deck.cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <Flashcard
        key={deck.cards[currentIndex].id}
        card={deck.cards[currentIndex]}
      />
      <FlashcardControls prevCard={prevCard} nextCard={nextCard} />
    </>
  );
};

export default StudyDeckMenu;
