package com.hoppylearn.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Card {
    private Long id;
    private String front;
    private String back;
    private Long deckId;

    public Card(String front, String back, Long deckId) {
        this.front = front;
        this.back = back;
        this.deckId = deckId;
    }
}
