package com.hoppylearn.repository.impl;

import com.hoppylearn.model.entity.Deck;
import com.hoppylearn.repository.DeckRepository;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

// In-memory implementation of DeckRepository, active when "memory" profile is set
@Repository
@Profile({ "memory", "default" })
public class InMemoryDeckRepository implements DeckRepository {

    // Thread-safe storage for decks
    private final Map<Long, Deck> storage = new ConcurrentHashMap<>();
    private final Map<String, Deck> names = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(1);

    @Override
    public Deck saveDeck(Deck deck) {
        if (deck == null) {
            throw new IllegalArgumentException("Deck cannot be null");
        }

        if (deck.getId() == null) {
            deck.setId(idGenerator.getAndIncrement());
        }

        storage.put(deck.getId(), deck);
        names.put(deck.getDeckName().trim(), deck);
        return deck;
    }

    @Override
    public Deck getDeck(Long id) {
        if (id == null) {
            return null;
        }
        return storage.get(id);
    }

    @Override
    public Deck getDeck(String name) {
        if (name == null || name.trim().isEmpty()) {
            return null;
        }
        return names.get(name.trim());
    }

    @Override
    public List<Deck> getAllDecks() {
        return new ArrayList<>(storage.values());
    }

    @Override
    public boolean deleteDeck(Long id) {
        if (id == null) {
            return false;
        }
        return storage.remove(id) != null;
    }

    @Override
    public boolean deckExists(Long id) {
        if (id == null) {
            return false;
        }
        return storage.containsKey(id);
    }

    @Override
    public boolean deckExists(String name) {
        if (name == null || name.trim().isEmpty()) {
            return false;
        }
        return names.containsKey(name.trim());
    }

    @Override
    public long count() {
        return storage.size();
    }

    // Delete all - for testing purposes
    public void clear() {
        storage.clear();
        idGenerator.set(1);
    }

    // Get current state - for testing purposes
    public Map<Long, Deck> getStorageSnapshot() {
        return new HashMap<>(storage);
    }
}
