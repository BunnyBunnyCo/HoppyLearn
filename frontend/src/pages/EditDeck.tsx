import { Link } from "react-router-dom";
import EditDeckMenu from "../components/EditDeckMenu";
import * as types from "../types";

function EditDeck({ decks, setDecks }: types.SharedProps) {
  return <EditDeckMenu decks={decks} setDecks={setDecks} />;
}

export default EditDeck;
