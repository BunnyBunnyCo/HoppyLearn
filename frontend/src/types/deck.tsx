import { Card } from "./card";

export interface InputDeck {
  name: string;
}
export function createInputDeck(): InputDeck {
  return {
    name: "",
  };
}

export interface Deck {
  id: number;
  name: string;
  cards: Card[];
}
export function createDeck(inputDeck: InputDeck): Deck {
  return {
    name: inputDeck.name,
    id: 4, //TEMP FOR TESTING
    cards: [],
  };
}
