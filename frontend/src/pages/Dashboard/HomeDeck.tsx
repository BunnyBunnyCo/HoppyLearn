import React from "react";
import { Deck } from "../../types";
import NavButton from "../../components/NavButton";
import edit from "../../assets/edit.jpg";
import book from "../../assets/book.svg";
import styles from "./HomeDeck.module.css";

interface HomeDeckProps {
  deck: Deck;
}

const HomeDeck: React.FC<HomeDeckProps> = ({ deck }) => {
  return (
    <li key={deck.id} className={styles.listDeck}>
      <span className={styles.text}>{deck.name}</span>
      <div className={styles.navButtonContainer}>
        <NavButton
          icon={book}
          text=""
          alt="Go Study"
          destination={`/study/${deck.id}`}
        />
        <NavButton
          icon={edit}
          text=""
          alt="Go Edit"
          destination={`/edit/${deck.id}`}
        />
      </div>
    </li>
  );
};

export default HomeDeck;
