import React, { useState, createContext, ReactNode } from "react";
import { CurrentDeck } from "../types";

interface CurrentDeckContextType {
  currentDeck: CurrentDeck;
  setCurrentDeck: React.Dispatch<React.SetStateAction<CurrentDeck>>;
}

export interface CurrentDeckContextProviderProps {
  children: ReactNode;
}

export const CurrentDeckContext = createContext<CurrentDeckContextType>({
  currentDeck: { id: 0, name: "" },
  setCurrentDeck: () => {},
});

// This context is for testing purposes while working on backend
export default function CurrentDeckContextProvider({
  children,
}: CurrentDeckContextProviderProps) {
  const [currentDeck, setCurrentDeck] = useState<CurrentDeck>({
    id: 0,
    name: "",
  });

  return (
    <CurrentDeckContext.Provider value={{ currentDeck, setCurrentDeck }}>
      {children}
    </CurrentDeckContext.Provider>
  );
}
