import * as types from "./";

export type SharedProps = {
  decks: types.Deck[];
  setDecks: React.Dispatch<React.SetStateAction<types.Deck[]>>;
};
