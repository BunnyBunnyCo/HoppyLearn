import bunny from "../assets/smilebunny.png";
import HomeMenu from "../components/HomeMenu";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div className="Home">
      <Header navButtons={[]} title="Hoppy Learn" />
      <HomeMenu />
    </div>
  );
}

export default Dashboard;
