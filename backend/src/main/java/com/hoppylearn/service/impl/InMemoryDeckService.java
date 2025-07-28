package com.hoppylearn.service.impl;

import com.hoppylearn.model.entity.Deck;
import com.hoppylearn.repository.DeckRepository;
import com.hoppylearn.service.DeckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Implementation of DeckService that handles business logic for Decks
@Service
public class InMemoryDeckService implements DeckService {

    private final DeckRepository deckRepository;

    @Autowired
    public InMemoryDeckService(DeckRepository deckRepository) {
        this.deckRepository = deckRepository;
    }

    @Override
    public Deck createDeck(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Deck name cannot be null or empty");
        }

        if (this.deckExists(name)) {
            throw new IllegalArgumentException("Deck name already exists");
        }

        Deck deck = new Deck(name.trim());
        return deckRepository.saveDeck(deck);
    }

    @Override
    public Deck getDeck(Long id) {
        if (id == null) {
            return null;
        }
        return deckRepository.getDeck(id);
    }

    @Override
    public Deck getDeck(String name) {
        if (name == null || name.trim().isEmpty()) {
            return null;
        }
        return deckRepository.getDeck(name.trim());
    }

    @Override
    public List<Deck> getAllDecks() {
        return deckRepository.getAllDecks();
    }

    @Override
    public boolean deleteDeck(Long id) {
        if (id == null) {
            return false;
        }
        return deckRepository.deleteDeck(id);
    }

    @Override
    public boolean deckExists(Long id) {
        if (id == null) {
            return false;
        }
        return deckRepository.deckExists(id);
    }

    @Override
    public boolean deckExists(String name) {
        return deckRepository.deckExists(name);
    }
}
