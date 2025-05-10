import { useContext } from "react";
import { DecksContext } from "../contexts/DecksContextProvider";
import HomeDeck from "./HomeDeck";
import HomeDeckInput from "./HomeDeckInput";

interface HomeDecklistProps {
  showInput: boolean;
  onSubmit: () => void;
}
const HomeDecklist: React.FC<HomeDecklistProps> = ({ showInput, onSubmit }) => {
  const { decks } = useContext(DecksContext);
  return (
    <ol>
      {Array.from(decks.entries()).map(([_, deck]) => (
        <HomeDeck deck={deck} />
      ))}
      {showInput && <HomeDeckInput onSubmit={onSubmit} focus={showInput} />}
    </ol>
  );
};

export default HomeDecklist;
