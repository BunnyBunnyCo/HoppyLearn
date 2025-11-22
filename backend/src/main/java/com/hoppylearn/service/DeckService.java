package com.hoppylearn.service;

import com.hoppylearn.model.entity.Deck;
import com.hoppylearn.model.paramaters.DeckSearchParams;

import java.util.List;

public interface DeckService {

    Deck createDeck(String name);

    Deck getDeck(String id);

    List<Deck> getDecks(DeckSearchParams searchParams);

    boolean deleteDeck(String id);

    boolean deckExistsById(String id);

    boolean deckExistsByName(String name);
}
