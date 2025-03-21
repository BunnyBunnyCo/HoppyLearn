import { Link } from "react-router-dom";
import { useContext } from "react";
import { DecksContext } from "../contexts/DecksContextProvider";

const HomeDecklist: React.FC = () => {
  const { decks } = useContext(DecksContext);
  return (
    <ol>
      {Array.from(decks.entries()).map(([_, deck]) => (
        <Link to={`/edit/${deck.id}`}>
          <li key={deck.id}>
            <span className="text">{deck.name}</span>
          </li>
        </Link>
      ))}
    </ol>
  );
};

export default HomeDecklist;
