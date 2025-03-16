import { Link } from "react-router-dom";
import EditDeckMenu from "../components/EditDeckMenu";
import * as types from "../types";

function EditDeck({ decks, setDecks }: types.SharedProps) {
  return (
    <div>
      <Link to={`/`}>Dashboard</Link>
      <span> </span>
      <Link to={`/study/1}`}>Study</Link>
      <EditDeckMenu decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default EditDeck;
