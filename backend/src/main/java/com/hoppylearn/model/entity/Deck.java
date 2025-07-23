package com.hoppylearn.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Deck {
    private Long id;
    private String deckName;
    private List<Long> cardIds;

    // Custom constructor for common use case
    public Deck(String deckName) {
        this.deckName = deckName;
    }
}
