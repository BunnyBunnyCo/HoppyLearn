package com.hoppylearn.controller;
import com.hoppylearn.model.request.DeckRequest;
import com.hoppylearn.model.response.DeckResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DeckControllerUnitTest {
    DeckController deckController;

    @BeforeEach
    void setup() {
        deckController = new DeckController();
    }

    @Test
    void whenDeckController_thenCreated() {
        // Arrange
        DeckRequest request = new DeckRequest();
        request.setDeckName("Korean");

        // Act
        ResponseEntity<DeckResponse> response =  deckController.handlePostRequest(request);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, response.getBody().getId());
        assertEquals("Korean", response.getBody().getDeckName());
    }
}
