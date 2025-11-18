package com.hoppylearn.controller;

import com.hoppylearn.model.entity.Deck;
import com.hoppylearn.model.request.DeckRequest;
import com.hoppylearn.model.response.DeckResponse;
import com.hoppylearn.service.DeckService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1")
public class DeckController {

    private final DeckService deckService;

    @Autowired
    public DeckController(DeckService deckService) {
        this.deckService = deckService;
    }

    @PostMapping("/deck")
    public ResponseEntity<DeckResponse> handlePost(@Valid @RequestBody DeckRequest deckRequest) {
        try {
            Deck deck = deckService.createDeck(deckRequest.getDeckName());
            if (deck == null) {
                return ResponseEntity.badRequest().build();
            }
            DeckResponse response = new DeckResponse(deck);
            URI location = URI.create("/v1/deck/" + deck.getId());
            return ResponseEntity.created(location).body(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/deck")
    public ResponseEntity<DeckResponse> handleGet(
            @RequestParam(required = false) Long id,
            @RequestParam(required = false) String name) {
        Deck deck = null;
        // Check for ambiguous parameters
        if (id != null && name != null) {
            return ResponseEntity.badRequest().build();
        }
        // Lookup by ID
        if (id != null) {
            deck = deckService.getDeck(id);
        } else {
            deck = deckService.getDeck(name);
        }
        if (deck == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(new DeckResponse(deck));
    }

    @GetMapping("/decks")
    public ResponseEntity<List<DeckResponse>> handleGetAll() {
        List<Deck> decks = deckService.getAllDecks();
        List<DeckResponse> responses = new ArrayList<>();
        for (Deck deck : decks) {
            DeckResponse response = new DeckResponse(deck);
            responses.add(response);
        }
        return ResponseEntity.ok(responses);
    }

    @DeleteMapping("/deck/{id}")
    public ResponseEntity<String> handleDelete(@PathVariable Long id) {
        boolean deleted = deckService.deleteDeck(id);
        if (deleted) {
            return ResponseEntity.ok("Deck deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
