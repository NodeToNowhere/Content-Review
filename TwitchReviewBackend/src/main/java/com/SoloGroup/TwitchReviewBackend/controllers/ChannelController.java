package com.SoloGroup.TwitchReviewBackend.controllers;

import com.SoloGroup.TwitchReviewBackend.models.Channel;
import com.SoloGroup.TwitchReviewBackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.SoloGroup.TwitchReviewBackend.repositories.ChannelRepository;

import java.util.List;

@RestController
public class ChannelController {

    @Autowired
    ChannelRepository channelRepository;


    @GetMapping("/channels")
    public ResponseEntity<List<Channel>> getAllUsers(){

        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }
//    public ResponseEntity<List<Channel>> getAllChannels(@RequestParam(name = "rating", required = false) Integer rating) {
//        if (rating != null) {
//            return new ResponseEntity<>(channelRepository.findAllByRating(rating), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
//    }

    @GetMapping(value = "/channels/{id}")
    public ResponseEntity<Channel> getChannel(@PathVariable Long id) {
        return new ResponseEntity(channelRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/channels")
    public ResponseEntity<Channel> postChannel(@RequestBody Channel channel) {
        channelRepository.save(channel);
        return new ResponseEntity<>(channel, HttpStatus.CREATED);
    }

    @PutMapping(value = "/channels/{id}")
    public ResponseEntity<Channel> putChannel(@RequestBody Channel channel, @PathVariable Long id) {
        Channel foundChannel = channelRepository.findById(id).get();
        foundChannel.setName(channel.getName());
        foundChannel.setRating(channel.getRating());
        foundChannel.setReviews(channel.getReviews());
        channelRepository.save(foundChannel);
        return new ResponseEntity<>(foundChannel, HttpStatus.OK);
    }

    @DeleteMapping(value = "/channels/{id}")
    public ResponseEntity<Long> deleteChannel(@PathVariable Long id) {
        channelRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
