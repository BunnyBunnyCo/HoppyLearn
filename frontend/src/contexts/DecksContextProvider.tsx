import React, { useState, createContext, ReactNode } from "react";
import * as types from "../types";
import * as util from "../utils/localStoreCalls";

interface DecksContextType {
  decks: Map<number, types.Deck>;
  setDecks: React.Dispatch<React.SetStateAction<Map<number, types.Deck>>>;
  cards: Map<number, types.Card>;
  setCards: React.Dispatch<React.SetStateAction<Map<number, types.Card>>>;
}

export interface DecksContextProviderProps {
  children: ReactNode;
}

//used as a default value if provider is not used
export const DecksContext = createContext<DecksContextType>({
  decks: new Map(),
  setDecks: () => {},
  cards: new Map(),
  setCards: () => {},
});

// This context is for testing purposes while working on backend
export default function DecksContextProvider({
  children,
}: DecksContextProviderProps) {
  const [decks, setDecks] = useState<Map<number, types.Deck>>(() => {
    return util.getDecks();
  });
  const [cards, setCards] = useState<Map<number, types.Card>>(() => {
    return util.getCards();
  });

  return (
    <DecksContext.Provider value={{ decks, setDecks, cards, setCards }}>
      {children}
    </DecksContext.Provider>
  );
}
