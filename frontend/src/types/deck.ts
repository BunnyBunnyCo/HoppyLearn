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

export interface Deck {
  id: number;
  name: string;
  cards: number[];
}

// This will be a call to backend in future
export function createDeck(inputDeck: InputDeck): Deck {
  return {
    name: inputDeck.name,
    id: Math.floor(Math.random() * (1000000000 - 3 + 1)) + 3, //TEMP FOR TESTING
    cards: [],
  };
}
