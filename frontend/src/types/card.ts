export interface InputCard {
  front: string;
  back: string;
}
export function createInputCard(): InputCard {
  return {
    front: "",
    back: "",
  };
}

export interface Card {
  id: number;
  deck: number;
  front: string;
  back: string;
}

// This will be a call to backend in future
export function createCard(deckID: number, inputCard: InputCard): Card {
  return {
    id: Math.floor(Math.random() * (1000000000 - 3 + 1)) + 3, //TEMP FOR TESTING
    deck: deckID,
    front: inputCard.front,
    back: inputCard.back,
  }

}