package com.hoppylearn.exception;

import org.springframework.http.ResponseEntity;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.slf4j.Logger;

@ControllerAdvice()
public class ApiExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(ApiExceptionHandler.class);

    // most generic fallback exception handler
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleApiRequestException(Exception e) {
        return handleException(
                e,
                "an unexpected error occurred",
                HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // generic handler for known exceptions
    @ExceptionHandler(ApiRequestException.class)
    public ResponseEntity<Object> handleApiRequestException(ApiRequestException e) {
        return handleException(
                e,
                "an unexpected error occurred",
                HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handleResourceNotFoundException(ResourceNotFoundException e) {
        return handleException(
                e,
                "resource not found",
                HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IllegalUserInputException.class)
    public ResponseEntity<Object> handleIllegalUserInputException(IllegalUserInputException e) {
        return handleException(
                e,
                "invalid request parameters",
                HttpStatus.BAD_REQUEST);
    }

    private ResponseEntity<Object> handleException(Exception e, String error, HttpStatus httpStatus) {
        ErrorResponse errorResponse = new ErrorResponse(
                e.getMessage(),
                error,
                httpStatus);
        logger.warn("[{}] {} - {}", errorResponse.getTrackingId(), e.getClass().getSimpleName(), e);
        return new ResponseEntity<>(errorResponse, httpStatus);
    }

}
