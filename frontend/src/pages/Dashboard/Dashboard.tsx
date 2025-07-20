import React from "react";
import HomeMenu from "./HomeMenu";
import Header from "../../components/Header";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.home}>
      <Header navButtons={[]} title="Hoppy Learn" />
      <hr className="divider" />
      <HomeMenu />
    </div>
  );
}

export default Dashboard;
