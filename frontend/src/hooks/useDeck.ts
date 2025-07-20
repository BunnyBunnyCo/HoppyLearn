import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DecksContext } from "../contexts/DecksContextProvider";
import { CurrentDeckContext } from "../contexts/CurrentDeckContextProvider";
import * as util from "../utils/helpers";

export function useDeck() {
  const { decks } = useContext(DecksContext);
  const { setCurrentDeck } = useContext(CurrentDeckContext);
  const { id } = useParams<{ id: string }>();

  const deckID: number = util.idToNum(id);
  const deck = decks.get(deckID);

  useEffect(() => {
    if (deck) {
      setCurrentDeck({ id: deckID, name: deck.name });
    }
  }, [deck, deckID, setCurrentDeck]);

  return deck;
}