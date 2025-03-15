import { Link } from "react-router-dom";
import EditDeckMenu from "../components/EditDeckMenu";

function EditDeck() {
  return (
    <div>
      <Link to={`/`}>Dashboard</Link>
      <Link to={`/study/1}`}>Study Deck</Link>
      <EditDeckMenu />
    </div>
  );
}

export default EditDeck;
