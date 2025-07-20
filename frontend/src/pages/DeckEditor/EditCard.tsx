import React from "react";
import * as types from "../../types";
import trash from "../../assets/trashcan.svg";
import upArrow from "../../assets/up-arrow.svg";
import downArrow from "../../assets/down-arrow.svg";
import styles from "./styles/EditCard.module.css";

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
    <li className={styles.listCard}>
      <span className={styles.text}>
        {card.front} | {card.back}
      </span>
      <button className={styles.deleteButton} onClick={deleteCard}>
        <img src={trash} alt="Delete" className={styles.buttonIcon} />
      </button>
      <button className={styles.moveButton} onClick={moveCardUp}>
        <img src={upArrow} alt="Up" className={styles.buttonIcon} />
      </button>
      <button className={styles.moveButton} onClick={moveCardDown}>
        <img src={downArrow} alt="Down" className={styles.buttonIcon} />
      </button>
    </li>
  );
};

export default EditCard;
