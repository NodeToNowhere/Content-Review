package com.SoloGroup.TwitchReviewBackend.controllers;

import com.SoloGroup.TwitchReviewBackend.models.Channel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.SoloGroup.TwitchReviewBackend.repositories.ChannelRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3030")
@RestController
public class ChannelController {

    @Autowired
    ChannelRepository channelRepository;


    @GetMapping(value = "/channels")
    public ResponseEntity getUser(
            @RequestParam(required = false, name = "name") String name,
            @RequestParam(required = false, name = "id") Long id
    ){
        if(id != null) {
            return new ResponseEntity(channelRepository.findById(id), HttpStatus.OK);
        }
        if(name != null) {
            return new ResponseEntity(channelRepository.findByName(name), HttpStatus.OK);
        }
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

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
        foundChannel.setAverageRating(channel.getAverageRating());
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
