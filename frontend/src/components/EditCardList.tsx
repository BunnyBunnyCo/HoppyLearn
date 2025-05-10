import React from "react";
import * as types from "../types";
import EditCard from "./EditCard";
import EditCardInput from "./EditCardInput";

interface EditCardListProps {
  deck: types.Deck;
  resetDecks: (updatedDeck: types.Deck) => void;
}

const EditCardList: React.FC<EditCardListProps> = ({ deck, resetDecks }) => {
  return (
    <ol>
      {deck.cards.map((card, index) => (
        <EditCard
          key={card.id}
          card={card}
          deck={deck}
          index={index}
          resetDecks={resetDecks}
        />
      ))}
      <EditCardInput deck={deck} resetDecks={resetDecks} />
    </ol>
  );
};

export default EditCardList;
