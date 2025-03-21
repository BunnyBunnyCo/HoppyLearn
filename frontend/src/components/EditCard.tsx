import React from "react";
import * as types from "../types";
import trash from "../assets/trashcan.svg";
import upArrow from "../assets/up-arrow.svg";
import downArrow from "../assets/down-arrow.svg";

interface EditCardProps {
  card: types.Card;
  deck: types.Deck;
  index: number;
  resetDecks: (updatedDeck: types.Deck) => void;
}

const EditCard: React.FC<EditCardProps> = ({
  card,
  deck,
  index,
  resetDecks,
}) => {
  function deleteCard() {
    deck.cards = deck.cards.filter((_, i) => i !== index);
    resetDecks(deck);
  }

  function moveCardUp() {
    if (index > 0) {
      [deck.cards[index], deck.cards[index - 1]] = [
        deck.cards[index - 1],
        deck.cards[index],
      ];
      resetDecks(deck);
    }
  }

  function moveCardDown() {
    if (index < deck.cards.length - 1) {
      [deck.cards[index], deck.cards[index + 1]] = [
        deck.cards[index + 1],
        deck.cards[index],
      ];
      resetDecks(deck);
    }
  }

  return (
    <li className="list-card">
      <span className="text">
        {card.front} | {card.back}
      </span>
      <button className="delete-button" onClick={deleteCard}>
        <img src={trash} alt="Delete" className="button-icon" />
      </button>
      <button className="move-button" onClick={moveCardUp}>
        <img src={upArrow} alt="Up" className="button-icon" />
      </button>
      <button className="move-button" onClick={moveCardDown}>
        <img src={downArrow} alt="Down" className="button-icon" />
      </button>
    </li>
  );
};

export default EditCard;
