package com.SoloGroup.TwitchReviewBackend.controllers;

import com.SoloGroup.TwitchReviewBackend.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.SoloGroup.TwitchReviewBackend.repositories.ReviewRepository;

import java.util.List;

@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){

        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }
//    public ResponseEntity<List<Review>> GetAllReviews(@RequestParam(name = "upvotes", required = false) Integer upvotes) {
//        if (upvotes != null){
//            return new ResponseEntity<>(reviewRepository.findAllByUpvotes(upvotes), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
//    }

    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity<Review> getReview(@PathVariable Long id) {
        return new ResponseEntity(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/reviews")
    public ResponseEntity<Review> postReview(@RequestBody Review review) {
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @PutMapping(value = "/reviews/{id}")
    public ResponseEntity<Review> putReview(@RequestBody Review review, @PathVariable Long id) {
        Review reviewToUpdate = reviewRepository.findById(id).get();
        reviewToUpdate.setComment(review.getComment());
        reviewToUpdate.setUpvotes(review.getUpvotes());
        reviewToUpdate.setUser(review.getUser());
        reviewToUpdate.setChannel(review.getChannel());
        reviewRepository.save(reviewToUpdate);
        return new ResponseEntity<>(reviewToUpdate, HttpStatus.OK);
    }

    @DeleteMapping(value = "/reviews/{id}")
    public ResponseEntity<Long> deleteReview(@PathVariable Long id) {
        reviewRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
