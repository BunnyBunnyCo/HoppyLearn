import React, { useContext, useState } from "react";
import { DecksContext } from "../contexts/DecksContextProvider";
import { CurrentDeckContext } from "../contexts/CurrentDeckContextProvider";
import * as types from "../types";
import EditCardList from "./EditCardList";
import EditCardInput from "./EditCardInput";

const EditDeckMenu: React.FC = () => {
  const { decks, setDecks } = useContext(DecksContext);
  const { currentDeck } = useContext(CurrentDeckContext);
  const [inputCard, setCard] = useState<types.InputCard>(
    types.createInputCard()
  );

  const deck = decks.get(currentDeck.id);
  if (!deck) {
    return <h1>Deck Not Found!</h1>;
  }

  function resetDecks(updatedDeck: types.Deck) {
    setDecks((prevDecks) => {
      const newDecks = new Map(prevDecks);
      newDecks.set(updatedDeck.id, updatedDeck);
      return newDecks;
    });
  }

  return (
    <>
      <EditCardInput
        inputCard={inputCard}
        setCard={setCard}
        deck={deck}
        resetDecks={resetDecks}
      />
      <EditCardList deck={deck} resetDecks={resetDecks} />
    </>
  );
};

export default EditDeckMenu;
