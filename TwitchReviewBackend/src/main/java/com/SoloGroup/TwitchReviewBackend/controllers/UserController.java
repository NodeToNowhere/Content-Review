package com.SoloGroup.TwitchReviewBackend.controllers;


import com.SoloGroup.TwitchReviewBackend.models.Channel;
import com.SoloGroup.TwitchReviewBackend.models.User;
import com.SoloGroup.TwitchReviewBackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3030")
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity getUser(
            @RequestParam(required = false, name = "username") String username,
            @RequestParam(required = false, name = "id") Long id
    ){
        if(id != null) {
            return new ResponseEntity(userRepository.findById(id), HttpStatus.OK);
        }
        if(username != null) {
            return new ResponseEntity(userRepository.findByUsername(username), HttpStatus.OK);
        }
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);

    }
    @GetMapping(value = "/users/{id}")
    public ResponseEntity<User> getChannel(@PathVariable Long id) {
        return new ResponseEntity(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping(value = "/users/{id}")
    public ResponseEntity<User> putUser(@RequestBody User user, @PathVariable Long id) {
        User foundUser = userRepository.findById(id).get();
        foundUser.setUsername(user.getUsername());
        foundUser.setReviews(user.getReviews());
        userRepository.save(foundUser);
        return new ResponseEntity<>(foundUser, HttpStatus.OK);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
