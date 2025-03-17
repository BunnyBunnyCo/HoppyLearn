import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as types from "../types";

const Decklist: React.FC<types.SharedProps> = ({ decks, setDecks }) => {
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
      setDecks((prevDecks) => {
        const newDecks = new Map(prevDecks);
        newDecks.set(newDeck.id, newDeck);
        return newDecks;
      });
      setDeck(types.createInputDeck());
    }
  }

  return (
    <div>
      <ol>
        {Array.from(decks.entries()).map(([id, deck]) => (
          <Link to={`/edit/${deck.id}`}>
            <li key={id}>
              <span className="text">{deck.name}</span>
            </li>
          </Link>
        ))}
      </ol>
      <div className="inputLine">
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
      </div>
    </div>
  );
};

export default Decklist;
