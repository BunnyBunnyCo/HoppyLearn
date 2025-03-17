import { Link } from "react-router-dom";
import StudyDeckMenu from "../components/StudyDeckMenu";
import * as types from "../types";

function StudyDeck({ decks, setDecks }: types.SharedProps) {
  return (
    <div>
      <Link to={`/`}>Dashboard</Link>
      <Link to={`/edit/1}`}>Edit</Link>
      <StudyDeckMenu decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default StudyDeck;
