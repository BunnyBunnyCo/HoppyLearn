import { Link } from "react-router-dom";

function StudyDeck() {
  return (
    <div>
      <h1>!!Implement this!!</h1>
      <Link to={`/`}>Dashboard</Link>
      <Link to={`/edit/1}`}>Edit</Link>
    </div>
  );
}

export default StudyDeck;
