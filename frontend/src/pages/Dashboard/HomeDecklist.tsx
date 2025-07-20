import React, { useContext, RefObject } from "react";
import { DecksContext } from "../../contexts/DecksContextProvider";
import HomeDeck from "./HomeDeck";
import HomeDeckInput from "./HomeDeckInput";
import styles from "./Dashboard.module.css";

interface HomeDecklistProps {
  showInput: boolean;
  onSubmit: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

const HomeDecklist: React.FC<HomeDecklistProps> = ({
  showInput,
  onSubmit,
  inputRef,
}) => {
  const { decks } = useContext(DecksContext);
  return (
    <ol className={styles.decklist}>
      {Array.from(decks.entries()).map(([_, deck]) => (
        <HomeDeck key={deck.id} deck={deck} />
      ))}
      {showInput && (
        <HomeDeckInput
          onSubmit={onSubmit}
          focus={showInput}
          inputRef={inputRef}
        />
      )}
    </ol>
  );
};

export default HomeDecklist;
