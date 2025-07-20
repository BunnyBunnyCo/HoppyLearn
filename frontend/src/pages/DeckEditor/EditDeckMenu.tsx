import React, { useContext } from "react";
import { DecksContext } from "../../contexts/DecksContextProvider";
import { CurrentDeckContext } from "../../contexts/CurrentDeckContextProvider";
import * as types from "../../types";
import EditCardList from "./EditCardList";
import { EditDeckContextProvider } from "../../contexts/EditDeckContextProvider";

const EditDeckMenu: React.FC = () => {
  const { decks, setDecks } = useContext(DecksContext);
  const { currentDeck } = useContext(CurrentDeckContext);

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
    <EditDeckContextProvider>
      <EditCardList deck={deck} resetDecks={resetDecks} />
    </EditDeckContextProvider>
  );
};

export default EditDeckMenu;
