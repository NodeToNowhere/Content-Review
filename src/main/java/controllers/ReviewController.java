package controllers;

import models.Review;
import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import repositories.ReviewRepository;

import java.util.List;

public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> GetAllReviews(){
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value="/reviews/{id}")
    public ResponseEntity<User> getReview(@PathVariable Long id) {
        return new ResponseEntity(reviewRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping("/reviews")
    public ResponseEntity<Review> postBooking(@RequestBody Review review){
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }


}
