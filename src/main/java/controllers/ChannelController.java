package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import repositories.ChannelRepository;
import repositories.UserRepository;

import java.util.List;

@RestController
public class ChannelController {

    @Autowired
    ChannelRepository channelRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/Channels")
    public ResponseEntity<List<Channel>> getAllChannels(){
        return new ResponseEntity<>(channelRepository.findAll(), HttpStatus.OK);
    }

}
