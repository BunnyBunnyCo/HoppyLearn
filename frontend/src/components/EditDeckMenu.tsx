import React, { useState, useEffect } from "react";
import * as types from "../types";
import { useParams } from "react-router-dom";

let currentDeck: types.Deck = {
  id: 0,
  name: "",
  cards: [],
};

const EditDeckMenu: React.FC<types.SharedProps> = ({ decks, setDecks }) => {
  const [inputCard, setCard] = useState<types.InputCard>(
    types.createInputCard()
  );

  const { id } = useParams<{ id: string }>();
  const deckID: number = idToNum(id);
  const deck = decks.get(deckID);
  useEffect(() => {
    if (!deck) return;
    currentDeck = deck;
  }, []);

  if (!deck) {
    return <h1>Deck {id} Not Found!</h1>;
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCard((prevCard: types.InputCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  function addCard() {
    if (inputCard.front.trim() !== "" && inputCard.back.trim() !== "") {
      const newCard = types.createCard(deckID, inputCard);
      currentDeck.cards.push(newCard);
      resetDecks();
      setCard(types.createInputCard());
    }
  }

  function deleteTask(index: number) {
    const updatedCards = currentDeck.cards.filter((_, i) => i !== index);
    currentDeck.cards = updatedCards;
    resetDecks();
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedCards = [...currentDeck.cards];
      [updatedCards[index], updatedCards[index - 1]] = [
        updatedCards[index - 1],
        updatedCards[index],
      ];
      currentDeck.cards = updatedCards;
      resetDecks();
    }
  }

  function moveTaskDown(index: number) {
    if (index < currentDeck.cards.length - 1) {
      const updatedCards = [...currentDeck.cards];
      [updatedCards[index], updatedCards[index + 1]] = [
        updatedCards[index + 1],
        updatedCards[index],
      ];
      currentDeck.cards = updatedCards;
      resetDecks();
    }
  }

  function resetDecks() {
    setDecks((prevDecks) => {
      const newDecks = new Map(prevDecks);
      newDecks.set(deckID, currentDeck);
      return newDecks;
    });
  }

  return (
    <div className="edit-deck">
      <h1>{decks.get(deckID)?.name}</h1>
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

      <ol>
        {decks.get(deckID)?.cards.map((card, index) => (
          <li key={index}>
            <span className="text">
              {card.front} | {card.back}
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

function idToNum(id: string | undefined): number {
  if (id === undefined) {
    return NaN;
  }
  return parseInt(id, 10);
}

export default EditDeckMenu;
