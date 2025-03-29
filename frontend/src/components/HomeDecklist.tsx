import { useContext, RefObject } from "react";
import { DecksContext } from "../contexts/DecksContextProvider";
import HomeDeck from "./HomeDeck";
import HomeDeckInput from "./HomeDeckInput";

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
    <ol className="decklist">
      {Array.from(decks.entries()).map(([_, deck]) => (
        <HomeDeck deck={deck} />
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
