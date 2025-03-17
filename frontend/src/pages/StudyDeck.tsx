import { Link } from "react-router-dom";
import StudyDeckMenu from "../components/StudyDeckMenu";
import * as types from "../types";

function StudyDeck({ decks, setDecks }: types.SharedProps) {
  return <StudyDeckMenu decks={decks} setDecks={setDecks} />;
}

export default StudyDeck;
