import React from "react";
import * as types from "../types";

interface EditCardInputProps {
  inputCard: types.InputCard;
  setCard: React.Dispatch<React.SetStateAction<types.InputCard>>;
  deck: types.Deck;
  resetDecks: (updatedDeck: types.Deck) => void;
}

const EditCardInput: React.FC<EditCardInputProps> = ({
  inputCard,
  setCard,
  deck,
  resetDecks,
}) => {
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
      <button className="add-button" onClick={addCard}>
        +
      </button>
    </div>
  );
};

export default EditCardInput;
