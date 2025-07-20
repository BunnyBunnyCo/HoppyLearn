import React, { useContext } from "react";
import * as types from "../../types";
import EditCard from "./EditCard";
import EditCardInput from "./EditCardInput";
import styles from "./styles/EditCardList.module.css";
import * as util from "../../utils/localStoreCalls";
import { CurrentDeckContext } from "../../contexts/CurrentDeckContextProvider";
import { DecksContext } from "../../contexts/DecksContextProvider";

interface EditCardListProps {
  resetDecks: (updatedDeck: types.Deck) => void;
  resetCards: (newCard: types.Card) => void;
  cards: Map<number, types.Card>;
  setCards: React.Dispatch<React.SetStateAction<Map<number, types.Card>>>;
}

const EditCardList: React.FC<EditCardListProps> = ({
  resetDecks,
  resetCards,
  cards,
}) => {
  const { currentDeck } = useContext(CurrentDeckContext);
  const { decks } = useContext(DecksContext);
  const deck = decks.get(currentDeck.id);
  if (!deck) {
    return null;
  }
  return (
    <ol className={styles.editCardList}>
      {deck.cards.map((cardID, index) => (
        <EditCard
          key={cardID}
          card={
            cards.get(cardID) ||
            util.createCard(deck.id, { front: "", back: "" })
          }
          deck={deck}
          index={index}
          resetDecks={resetDecks}
        />
      ))}
      <EditCardInput
        deck={deck}
        resetCards={resetCards}
        resetDecks={resetDecks}
      />
    </ol>
  );
};

export default EditCardList;
