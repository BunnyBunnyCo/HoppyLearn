import React, { useContext } from "react";
import { EditDeckContext } from "../../contexts/EditDeckContextProvider";
import * as types from "../../types";
import * as util from "../../utils/localStoreCalls";
import styles from "./styles/EditCard.module.css";
import { CurrentDeckContext } from "../../contexts/CurrentDeckContextProvider";
import { DecksContext } from "../../contexts/DecksContextProvider";

interface EditCardInputProps {
  deck: types.Deck;
  resetDecks: (updatedDeck: types.Deck) => void;
  resetCards: (newCard: types.Card) => void;
}

const EditCardInput: React.FC<EditCardInputProps> = ({
  resetCards,
  resetDecks,
}) => {
  const { inputCard, setCard } = useContext(EditDeckContext);
  const { decks } = useContext(DecksContext);
  const { currentDeck } = useContext(CurrentDeckContext);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  function addCard() {
    const deck = decks.get(currentDeck.id);
    if (!deck) {
      return;
    }
    if (inputCard.front.trim() !== "" && inputCard.back.trim() !== "") {
      const newCard = util.createCard(deck.id, inputCard);
      deck.cards.push(newCard.id);
      resetDecks(deck);
      resetCards(newCard);
      setCard(types.createInputCard());
    }
  }

  return (
    <li className={styles.listCard}>
      <div className="inputLine">
        <input
          name="front"
          type="text"
          placeholder="Front"
          value={inputCard.front}
          onChange={handleInputChange}
        />
        <input
          name="back"
          type="text"
          placeholder="Back"
          value={inputCard.back}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={addCard}>
          +
        </button>
      </div>
    </li>
  );
};

export default EditCardInput;
