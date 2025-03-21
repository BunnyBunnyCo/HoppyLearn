import React, { useState, useContext } from "react";
import * as types from "../types";
import { DecksContext } from "../contexts/DecksContextProvider";
import HomeDecklist from "./HomeDecklist";
import HomeDeckInput from "./HomeDeckInput";

const HomeMenu: React.FC = () => {
  const { decks, setDecks } = useContext(DecksContext);
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
    <div className="decklist">
      <HomeDecklist />
      <HomeDeckInput />
    </div>
  );
};

export default HomeMenu;
