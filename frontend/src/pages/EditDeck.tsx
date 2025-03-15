import { Link } from "react-router-dom";
import EditDeckMenu from "../components/EditDeckMenu";

function EditDeck() {
  return (
    <div>
      <Link to={`/`}>Dashboard</Link>
      <span> </span>
      <Link to={`/study/1}`}>Study</Link>
      <EditDeckMenu />
    </div>
  );
}

export default EditDeck;
