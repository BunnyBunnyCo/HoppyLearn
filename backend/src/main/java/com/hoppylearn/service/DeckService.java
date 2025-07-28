package com.hoppylearn.service;

import com.hoppylearn.model.entity.Deck;
import java.util.List;

/**
 * Service interface for business logic related to Decks
 */
public interface DeckService {

    /**
     * Create a new deck
     * 
     * @param name The name of the deck
     * @return The created deck
     */
    Deck createDeck(String name);

    /**
     * Get a deck by ID
     * 
     * @param id The deck ID
     * @return Optional containing the deck if found
     */
    Deck getDeck(Long id);

    /**
     * Get a deck by name
     * 
     * @param name The name of the deck
     * @return Optional containing the deck if found
     */
    Deck getDeck(String name);

    /**
     * Get all decks
     * 
     * @return List of all decks
     */
    List<Deck> getAllDecks();

    /**
     * Delete a deck
     * 
     * @param id The deck ID
     * @return true if deleted, false if not found
     */
    boolean deleteDeck(Long id);

    /**
     * Check if deck exists
     * 
     * @param id The deck ID
     * @return true if exists, false otherwise
     */
    boolean deckExists(Long id);

    /**
     * Check if deck exists by name
     * 
     * @param name The name of the deck
     * @return true if exists, false otherwise
     */
    boolean deckExists(String name);
}
