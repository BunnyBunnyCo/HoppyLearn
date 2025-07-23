package com.hoppylearn.repository;

import com.hoppylearn.model.entity.Deck;
import java.util.List;
import java.util.Optional;

// Interface for different implementations of storage
public interface DeckRepository {

    /**
     * Save a deck (create or update)
     * 
     * @param deck The deck to save
     * @return The saved deck with generated ID
     */
    Deck save(Deck deck);

    /**
     * Find a deck by its ID
     * 
     * @param id The deck ID
     * @return Optional containing the deck if found, empty otherwise
     */
    Optional<Deck> findById(Long id);

    /**
     * Get all decks
     * 
     * @return List of all decks
     */
    List<Deck> findAll();

    /**
     * Delete a deck by ID
     * 
     * @param id The deck ID to delete
     * @return true if deck was deleted, false if not found
     */
    boolean deleteById(Long id);

    /**
     * Check if a deck exists by ID
     * 
     * @param id The deck ID
     * @return true if deck exists, false otherwise
     */
    boolean existsById(Long id);

    /**
     * Count total number of decks
     * 
     * @return Number of decks
     */
    long count();
}
