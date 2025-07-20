import { useDeck } from "../../hooks/useDeck";
import StudyDeckMenu from "./StudyDeckMenu";
import Header from "../../components/Header";
import home from "../../assets/home.svg";
import edit from "../../assets/edit.jpg";
import NavButton from "../../components/NavButton";
import styles from "./styles/StudySession.module.css";

function StudySession() {
  const deck = useDeck();

  const navButtons = [
    <NavButton icon={home} text="Home" alt="Go Home" destination="/" />,
  ];

  if (!deck) {
    return (
      <div className={styles.studyDeck}>
        <Header navButtons={navButtons} title="Study" />
        <h1>Deck Not Found!</h1>
      </div>
    );
  }

  navButtons.push(
    <NavButton
      icon={edit}
      text="Edit"
      alt="Go Edit"
      destination={`/edit/${deck.id}`}
    />
  );

  return (
    <div className={styles.studyDeck}>
      <Header navButtons={navButtons} title="Study" />
      <hr className="divider" />
      <StudyDeckMenu />
    </div>
  );
}

export default StudySession;
