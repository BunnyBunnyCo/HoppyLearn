import { Deck } from "../types";
import NavButton from "./NavButton";
import edit from "../assets/edit.jpg";
import book from "../assets/book.svg";

interface HomeDeckProps {
  deck: Deck;
}
const HomeDeck: React.FC<HomeDeckProps> = ({ deck }) => {
  return (
    <li key={deck.id} className="list-deck">
      <span className="text">{deck.name}</span>
      <div className="nav-button-container">
        <NavButton
          icon={book}
          text=""
          alt="Go Study"
          destination={`/study/${deck.id}`}
        />
        <NavButton
          icon={edit}
          text=""
          alt="Go Edit"
          destination={`/edit/${deck.id}`}
        />
      </div>
    </li>
  );
};

export default HomeDeck;
