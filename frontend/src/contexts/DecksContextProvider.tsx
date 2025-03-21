import React, { useState, createContext, ReactNode } from "react";
import { Deck } from "../types";

interface DecksContextType {
  decks: Map<number, Deck>;
  setDecks: React.Dispatch<React.SetStateAction<Map<number, Deck>>>;
}

export interface DecksContextProviderProps {
  children: ReactNode;
}

export const DecksContext = createContext<DecksContextType>({
  decks: new Map(),
  setDecks: () => {}, // Placeholder function
});

// This context is for testing purposes while working on backend
export default function DecksContextProvider({
  children,
}: DecksContextProviderProps) {
  const [decks, setDecks] = useState<Map<number, Deck>>(
    new Map([
      [
        1,
        {
          id: 1,
          name: "Korean",
          cards: [
            { front: "Hello", back: "안녕", id: 101, deck: 1 },
            { front: "Carrot", back: "당근", id: 102, deck: 1 },
            { front: "Pretty", back: "예쁘다", id: 103, deck: 1 },
          ],
        },
      ],
      [
        2,
        {
          id: 2,
          name: "Spanish",
          cards: [
            { front: "Hello", back: "Hola", id: 201, deck: 2 },
            { front: "Carrot", back: "Zanahoria", id: 202, deck: 2 },
            { front: "Pretty", back: "Bonita", id: 203, deck: 2 },
          ],
        },
      ],
      [
        3,
        {
          id: 3,
          name: "French",
          cards: [
            { front: "Hello", back: "Bonjour", id: 301, deck: 3 },
            { front: "Carrot", back: "Carotte", id: 302, deck: 3 },
            { front: "Pretty", back: "Jolie", id: 303, deck: 3 },
          ],
        },
      ],
    ])
  );

  return (
    <DecksContext.Provider value={{ decks, setDecks }}>
      {children}
    </DecksContext.Provider>
  );
}
