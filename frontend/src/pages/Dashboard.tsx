import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Link to={`/edit/1`}>Edit</Link>
      <Link to={`/study/1}`}>Study</Link>
    </div>
  );
}

export default Dashboard;
