import React, { useState, useEffect } from "react";
import * as types from "../types";
import * as util from "../util/helpers";
import { useParams, Link } from "react-router-dom";

const StudyDeckMenu: React.FC<types.SharedProps> = ({ decks, setDecks }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const { id } = useParams<{ id: string }>();
  const deckID: number = util.idToNum(id);
  const deck = decks.get(deckID);

  if (!deck) {
    return <h1>Deck {id} Not Found!</h1>;
  }

  if (deck.cards.length == 0) {
    return (
      <div>
        <h1>Your {deck.name} deck has no Cards!</h1>
        <Link to={`/edit/${deck.id}`}>
          <h1 className="text">Add Cards!</h1>
        </Link>
      </div>
    );
  }

  function nextCard() {
    if (deck === undefined || deck.cards === undefined) {
      return;
    }
    if (currentIndex < deck?.cards.length - 1) {
      setIsRevealed(false);
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  }

  function prevCard() {
    if (currentIndex > 0) {
      setIsRevealed(false);
      const newIndex = currentIndex - 1;

      setCurrentIndex(newIndex);
    }
  }

  return (
    <div className="study-deck">
      <h1>{deck.name}</h1>
      <div className="flashcard" onClick={() => setIsRevealed(!isRevealed)}>
        <div className="card-content">
          <p className="front-text">{deck.cards[currentIndex].front}</p>
          <div className={`answer-section ${isRevealed ? "unfold" : ""}`}>
            <hr className="divider" />
            <p className="back-text">{deck.cards[currentIndex].back}</p>
          </div>
        </div>
      </div>
      <div className="flashcard-controls">
        <button className="card-control-button" onClick={prevCard}>
          Prev Card
        </button>
        <button className="card-control-button" onClick={nextCard}>
          Next Card
        </button>
      </div>
    </div>
  );
};

export default StudyDeckMenu;
