package com.hoppylearn.controller;
import com.hoppylearn.model.request.DeckRequest;
import com.hoppylearn.model.response.DeckResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/v1")
public class DeckController {

    @PostMapping("/deck")
    public ResponseEntity<DeckResponse> handlePostRequest(@RequestBody DeckRequest deckRequest) {
        DeckResponse mockResponse = new DeckResponse();
        mockResponse.setDeckName(deckRequest.getDeckName());
        mockResponse.setId(1);
        URI location = URI.create("/deck/" + mockResponse.getId());

        return ResponseEntity.created(location).body(mockResponse);
    }
}
