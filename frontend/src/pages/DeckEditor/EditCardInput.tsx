import React, { useContext } from "react";
import { EditDeckContext } from "../../contexts/EditDeckContextProvider";
import * as types from "../../types";
import styles from "./styles/EditCard.module.css";

interface EditCardInputProps {
  deck: types.Deck;
  resetDecks: (updatedDeck: types.Deck) => void;
}

const EditCardInput: React.FC<EditCardInputProps> = ({ deck, resetDecks }) => {
  const { inputCard, setCard } = useContext(EditDeckContext);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  function addCard() {
    if (inputCard.front.trim() !== "" && inputCard.back.trim() !== "") {
      const newCard = types.createCard(deck.id, inputCard);
      deck.cards.push(newCard);
      resetDecks(deck);
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
