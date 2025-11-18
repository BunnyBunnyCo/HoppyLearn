package com.hoppylearn.controller;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.hoppylearn.controller.DeckController;
import com.hoppylearn.model.request.DeckRequest;
import com.hoppylearn.service.DeckService;

@WebMvcTest(DeckController.class)
public class DeckControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private DeckService deckService;

    @Test
    void whenDeckNameIsWhiteSpace_thenValidationFails() throws Exception {
        // Arrange
        DeckRequest request = new DeckRequest();
        request.setDeckName("  ");

        // Act & Assert
        mockMvc.perform(post("/v1/deck")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }
}