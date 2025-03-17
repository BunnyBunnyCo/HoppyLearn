package com.hoppylearn.Controller;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

public class DeckControllerUnitTest {
    DeckController deckController;

    @BeforeEach
    void setup() {
        deckController = new DeckController();
    }

    @Test
    void whenDeckController_thenNoError() {
        assertDoesNotThrow(() -> {
            deckController.handlePostRequest("test");
        });
    }
}
