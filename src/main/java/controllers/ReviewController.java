package controllers;

import models.Review;
import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repositories.ReviewRepository;

import java.util.List;

public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> GetAllReviews() {
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity<User> getReview(@PathVariable Long id) {
        return new ResponseEntity(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/reviews")
    public ResponseEntity<Review> postBooking(@RequestBody Review review) {
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
