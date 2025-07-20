import EditDeckMenu from "./EditDeckMenu";
import NavButton from "../../components/NavButton";
import { useDeck } from "../../hooks/useDeck";
import Header from "../../components/Header";
import home from "../../assets/home.svg";
import book from "../../assets/book.svg";
import styles from "./styles/DeckEditor.module.css";

function DeckEditor() {
  const deck = useDeck();

  const navButtons = [
    <NavButton icon={home} text="Home" alt="Go Home" destination="/" />,
  ];

  if (!deck) {
    return (
      <div className={styles.editDeck}>
        <Header navButtons={navButtons} title="Edit" />
        <h1>Deck Not Found!</h1>
      </div>
    );
  }

  navButtons.push(
    <NavButton
      icon={book}
      text="Study"
      alt="Go Study"
      destination={`/study/${deck.id}`}
    />
  );
  return (
    <div className={styles.editDeck}>
      <Header navButtons={navButtons} title="Edit" />
      <hr className="divider" />
      <EditDeckMenu />
    </div>
  );
}

export default DeckEditor;
