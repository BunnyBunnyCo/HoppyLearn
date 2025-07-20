import React, { useContext, useState } from "react";
import { DecksContext } from "../../contexts/DecksContextProvider";
import { CurrentDeckContext } from "../../contexts/CurrentDeckContextProvider";
import * as types from "../../types";
import EditCardList from "./EditCardList";
import { EditDeckContextProvider } from "../../contexts/EditDeckContextProvider";
import * as util from "../../utils/localStoreCalls";

const EditDeckMenu: React.FC = () => {
  const { decks, setDecks } = useContext(DecksContext);
  const { currentDeck } = useContext(CurrentDeckContext);
  const [cards, setCards] = useState(util.getCards());

  if (!decks.get(currentDeck.id)) {
    return <h1>Deck Not Found!</h1>;
  }

  function resetDecks(updatedDeck: types.Deck) {
    const deck = decks.get(currentDeck.id);
    if (!deck) {
      return;
    }
    setDecks((prevDecks) => {
      const newDeck = util.updateDeck(prevDecks, updatedDeck);
      const newDecks = new Map(prevDecks);
      newDecks.set(newDeck.id, newDeck);
      return newDecks;
    });
  }

  function resetCards(newCard: types.Card) {
    setCards((prevCards) => {
      const newCards = new Map(prevCards);
      newCards.set(newCard.id, newCard);
      return newCards;
    });
  }

  return (
    <EditDeckContextProvider>
      <EditCardList
        resetDecks={resetDecks}
        resetCards={resetCards}
        cards={cards}
        setCards={setCards}
      />
    </EditDeckContextProvider>
  );
};

export default EditDeckMenu;
