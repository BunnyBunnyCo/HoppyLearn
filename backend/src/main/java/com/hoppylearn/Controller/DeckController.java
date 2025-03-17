package com.hoppylearn.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1")
public class DeckController {

    @PostMapping("/deck")
    public String handlePostRequest(@RequestBody String requestData) {
        return "Received: " + requestData;
    }
}
