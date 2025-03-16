import * as types from ".";

export interface SharedProps {
  decks: Map<number, types.Deck>;
  setDecks: React.Dispatch<React.SetStateAction<Map<number, types.Deck>>>;
}
