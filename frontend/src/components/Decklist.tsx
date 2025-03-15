import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as types from "../types";

const Decklist: React.FC = () => {
  const [decks, setDecks] = useState<types.Deck[]>([
    { id: 1, name: "Korean", cards: [] },
    { id: 2, name: "Spanish", cards: [] },
    { id: 3, name: "French", cards: [] },
  ]);
  const [inputDeck, setDeck] = useState<types.InputDeck>(types.createInputDeck);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDeck((prevCard: types.InputCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  function addDeck() {
    if (inputDeck.name.trim() !== "") {
      const newDeck = types.createDeck(inputDeck);
      setDecks((prevDecks) => [...prevDecks, newDeck]);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={inputDeck.name}
        placeholder="New Deck?"
        onChange={handleInputChange}
      ></input>
      <button className="add-button" onClick={addDeck}>
        {" "}
        +{" "}
      </button>
      <ol>
        {decks.map((deck, index) => (
          <li key={index}>
            <span className="text">{deck.name}</span>
            <button className="edit-button">
              <Link to={`/edit/${deck.id}`}>Edit</Link>
            </button>
            <button className="study-button">
              <Link to={`/study/${deck.id}`}>Study</Link>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Decklist;
