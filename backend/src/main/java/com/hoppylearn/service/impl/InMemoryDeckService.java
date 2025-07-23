package com.hoppylearn.service.impl;

import com.hoppylearn.model.entity.Deck;
import com.hoppylearn.repository.DeckRepository;
import com.hoppylearn.service.DeckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementation of DeckService that handles business logic for Decks
 */
@Service
public class InMemoryDeckService implements DeckService {

    private final DeckRepository deckRepository;

    @Autowired
    public InMemoryDeckService(DeckRepository deckRepository) {
        this.deckRepository = deckRepository;
    }

    @Override
    public Deck createDeck(String deckName) {
        if (deckName == null || deckName.trim().isEmpty()) {
            throw new IllegalArgumentException("Deck name cannot be null or empty");
        }

        if (this.deckExists(deckName)) {
            throw new IllegalArgumentException("Deck name already exists");
        }

        Deck deck = new Deck(deckName.trim());
        return deckRepository.save(deck);
    }

    @Override
    public Optional<Deck> getDeckById(Long id) {
        if (id == null) {
            return Optional.empty();
        }
        return deckRepository.findById(id);
    }

    @Override
    public List<Deck> getAllDecks() {
        return deckRepository.findAll();
    }

    @Override
    public boolean deleteDeck(Long id) {
        if (id == null) {
            return false;
        }
        return deckRepository.deleteById(id);
    }

    @Override
    public boolean deckExists(Long id) {
        if (id == null) {
            return false;
        }
        return deckRepository.existsById(id);
    }

    @Override
    public boolean deckExists(String deckName) {
        return deckRepository.existsByName(deckName);
    }
}
