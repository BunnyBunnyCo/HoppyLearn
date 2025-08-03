package com.hoppylearn.exception;

public class IllegalUserInputException extends RuntimeException {
    public IllegalUserInputException(String message) {
        super(message);
    }

    public IllegalUserInputException(String message, Throwable cause) {
        super(message, cause);
    }

}
