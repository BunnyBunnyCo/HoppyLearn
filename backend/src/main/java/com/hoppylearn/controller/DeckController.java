package com.hoppylearn.controller;

import com.hoppylearn.exception.IllegalUserInputException;
import com.hoppylearn.exception.ResourceNotFoundException;
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

@RestController
@RequestMapping("/v1")
public class DeckController {

    private final DeckService deckService;

    @Autowired
    public DeckController(DeckService deckService) {
        this.deckService = deckService;
    }

    @PostMapping("/decks")
    public ResponseEntity<DeckResponse> handlePost(@RequestBody DeckRequest deckRequest) {
        Deck deck = deckService.createDeck(deckRequest.getDeckName());
        if (deck == null) {
            throw new IllegalUserInputException("Failed to create deck with name: " + deckRequest.getDeckName());
        }
        DeckResponse response = new DeckResponse(deck);
        URI location = URI.create("/v1/deck/" + deck.getId());
        return ResponseEntity.created(location).body(response);
    }

    // Returns a single deck by id or name, or a collection of decks
    @GetMapping("/decks")
    public ResponseEntity<?> handleGet(
            @RequestParam(required = false) Long id,
            @RequestParam(required = false) String name) {

        // Check for missing parameters
        if (id == null && name == null) {
            List<Deck> decks = deckService.getAllDecks();
            List<DeckResponse> responses = new ArrayList<>();
            for (Deck deck : decks) {
                DeckResponse response = new DeckResponse(deck);
                responses.add(response);
            }
            return ResponseEntity.ok(responses);
        }

        // Check for ambiguous parameters
        if (id != null && name != null) {
            throw new IllegalUserInputException("Cannot specify both id and name parameters");
        }

        Deck deck;
        if (id != null) {
            deck = deckService.getDeck(id);
            if (deck == null) {
                throw new ResourceNotFoundException("Deck not found with id: " + id);
            }
        } else {
            deck = deckService.getDeck(name);
            if (deck == null) {
                throw new ResourceNotFoundException("Deck not found with name: " + name);
            }
        }

        return ResponseEntity.ok(new DeckResponse(deck));
    }

    @DeleteMapping("/decks/{id}")
    public ResponseEntity<String> handleDelete(@PathVariable Long id) {
        boolean deleted = deckService.deleteDeck(id);
        if (!deleted) {
            throw new ResourceNotFoundException("Deck not found with id: " + id);
        }
        return ResponseEntity.ok("Deck deleted successfully");
    }
}
