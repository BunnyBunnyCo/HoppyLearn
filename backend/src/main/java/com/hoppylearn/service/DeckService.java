package com.hoppylearn.service;

import com.hoppylearn.model.entity.Deck;
import java.util.List;
import java.util.Optional;

/**
 * Service interface for business logic related to Decks
 */
public interface DeckService {
    
    /**
     * Create a new deck
     * @param deckName The name of the deck
     * @return The created deck
     */
    Deck createDeck(String deckName);
    
    /**
     * Create a new deck with description
     * @param deckName The name of the deck
     * @param description The description of the deck
     * @return The created deck
     */
    Deck createDeck(String deckName, String description);
    
    /**
     * Get a deck by ID
     * @param id The deck ID
     * @return Optional containing the deck if found
     */
    Optional<Deck> getDeckById(Long id);
    
    /**
     * Get all decks
     * @return List of all decks
     */
    List<Deck> getAllDecks();
    
    /**
     * Update a deck
     * @param id The deck ID
     * @param deckName New deck name
     * @return Optional containing updated deck if found
     */
    Optional<Deck> updateDeck(Long id, String deckName);
    
    /**
     * Delete a deck
     * @param id The deck ID
     * @return true if deleted, false if not found
     */
    boolean deleteDeck(Long id);
    
    /**
     * Check if deck exists
     * @param id The deck ID
     * @return true if exists, false otherwise
     */
    boolean deckExists(Long id);
}
