import { Card } from "./card";

export interface InputDeck {
  name: string;
}
export function createInputDeck(): InputDeck {
  return {
    name: "",
  };
}

export interface CurrentDeck {
  id: number;
  name: string;
}
// probably just for testing (to make easier to access data)
export interface Deck {
  id: number;
  name: string;
  cards: Card[];
}

// This will be a call to backend in future
export function createDeck(inputDeck: InputDeck): Deck {
  return {
    name: inputDeck.name,
    id: Math.floor(Math.random() * (1000000000 - 3 + 1)) + 3, //TEMP FOR TESTING
    cards: [],
  };
}
