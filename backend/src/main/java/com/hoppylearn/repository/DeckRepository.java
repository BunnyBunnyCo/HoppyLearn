package com.hoppylearn.repository;

import com.hoppylearn.model.entity.Deck;
import java.util.List;

// Interface for different implementations of storage
public interface DeckRepository {

    /**
     * Save a deck (create or update)
     * 
     * @param deck The deck to save
     * @return The saved deck with generated ID
     */
    Deck saveDeck(Deck deck);

    /**
     * Find a deck by its ID
     * 
     * @param id The deck ID
     * @return Optional containing the deck if found, empty otherwise
     */
    Deck getDeck(Long id);

    /**
     * Find a deck by its ID
     * 
     * @param id The deck ID
     * @return Optional containing the deck if found, empty otherwise
     */
    Deck getDeck(String name);

    /**
     * Get all decks
     * 
     * @return List of all decks
     */
    List<Deck> getAllDecks();

    /**
     * Delete a deck by ID
     * 
     * @param id The deck ID to delete
     * @return true if deck was deleted, false if not found
     */
    boolean deleteDeck(Long id);

    /**
     * Check if a deck exists by ID
     * 
     * @param id The deck ID
     * @return true if deck exists, false otherwise
     */
    boolean deckExists(Long id);

    /**
     * Check if a deck exists by name
     * 
     * @param name The name of the deck
     * @return true if deck with the given name exists, false otherwise
     */
    boolean deckExists(String name);

    /**
     * Count total number of decks
     * 
     * @return Number of decks
     */
    long count();
}
