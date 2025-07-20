import * as types from "../types";

export function getDecks(): Map<number, types.Deck> {
  const data = window.localStorage.getItem("BUNNY_DECKS");
  const decksArray: [number, types.Deck][] = JSON.parse(data || "[]");
  let decks = new Map<number, types.Deck>(decksArray);
  if (!decks || decks.size === 0) {
    decks = new Map<number, types.Deck>([
      [
        1,
        {
          id: 1,
          name: "Korean",
          cards: [101, 102, 103],
        },
      ],
      [
        2,
        {
          id: 2,
          name: "Spanish",
          cards: [201, 202, 203],
        },
      ],
      [
        3,
        {
          id: 3,
          name: "French",
          cards: [301, 302, 303],
        },
      ],
    ]);
    window.localStorage.setItem("BUNNY_DECKS", JSON.stringify(Array.from(decks.entries())));
  }
  return decks;
}

export function createDeck(inputDeck: types.InputDeck): Map<number, types.Deck> {
  const decks = getDecks();
  const deck = {
    name: inputDeck.name,
    id: Math.floor(Math.random() * (1000000000 - 3 + 1)) + 3, //TEMP FOR TESTING
    cards: [],
  };
  decks.set(deck.id, deck);
  window.localStorage.setItem("BUNNY_DECKS", JSON.stringify(Array.from(decks.entries())));
  return decks;
}

export function updateDeck(decks: Map<number, types.Deck>, updatedDeck: types.Deck): types.Deck {
  decks.set(updatedDeck.id, updatedDeck);
  window.localStorage.setItem("BUNNY_DECKS", JSON.stringify(Array.from(decks.entries())));
  return updatedDeck;
}

export function deleteDeck(decks: Map<number, types.Deck>, deckId: number): Map<number, types.Deck> {
  decks.delete(deckId);
  window.localStorage.setItem("BUNNY_DECKS", JSON.stringify(Array.from(decks.entries())));
  return decks;
}


export function getCards() {
  const data = window.localStorage.getItem("BUNNY_CARDS");
  const cardsArray: [number, types.Card][] = JSON.parse(data || "[]");
  let cards = new Map<number, types.Card>(cardsArray);
  if (!cards || cards.size === 0) {
    cards = new Map<number, types.Card>([
      [
        101,
        { front: "Hello", back: "안녕", id: 101, deck: 1 }
      ],
      [
        102,
        { front: "Carrot", back: "당근", id: 102, deck: 1 }
      ],
      [
        103,
        { front: "Pretty", back: "예쁘다", id: 103, deck: 1 },
      ],
      [
        201,
        { front: "Hello", back: "Hola", id: 201, deck: 2 },
      ],
      [
        202,
        { front: "Carrot", back: "Zanahoria", id: 202, deck: 2 },
      ],
      [
        203,
        { front: "Pretty", back: "Bonita", id: 203, deck: 2 },
      ],
      [
        301,
        { front: "Hello", back: "Bonjour", id: 301, deck: 3 },
      ],
      [
        302,
        { front: "Carrot", back: "Carotte", id: 302, deck: 3 },
      ],
      [
        303,
        { front: "Pretty", back: "Jolie", id: 303, deck: 3 },
      ],
    ]);
    window.localStorage.setItem("BUNNY_CARDS", JSON.stringify(Array.from(cards.entries())));
  }
  return cards;
}

export function createCard(deckId: number, cardData: types.InputCard): types.Card {
  const cards = getCards();
  const newCard: types.Card = {
    id: Math.floor(Math.random() * 1000000),
    deck: deckId,
    ...cardData,
  };
  cards.set(newCard.id, newCard);
  window.localStorage.setItem("BUNNY_CARDS", JSON.stringify(Array.from(cards.entries())));
  return newCard;
}

export function deleteCard(cardId: number): types.Card | undefined {
  const cards = getCards();
  const deletedCard = cards.get(cardId);
  cards.delete(cardId);
  window.localStorage.setItem("BUNNY_CARDS", JSON.stringify(Array.from(cards.entries())));
  return deletedCard;
}