package com.SoloGroup.TwitchReviewBackend.components;

import com.SoloGroup.TwitchReviewBackend.models.Channel;
import com.SoloGroup.TwitchReviewBackend.models.Review;
import com.SoloGroup.TwitchReviewBackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.SoloGroup.TwitchReviewBackend.repositories.ChannelRepository;
import com.SoloGroup.TwitchReviewBackend.repositories.ReviewRepository;
import com.SoloGroup.TwitchReviewBackend.repositories.UserRepository;

@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    ChannelRepository channelRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ReviewRepository reviewRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        Channel channel1 = new Channel("Super Cool Dude", 4);
        channelRepository.save(channel1);

        Channel channel2 = new Channel("Cool Dude", 3);
        channelRepository.save(channel2);

        Channel channel3 = new Channel("Dude", 2);
        channelRepository.save(channel3);


        User user1 = new User("StartUpGuy");
        userRepository.save(user1);
        User user2 = new User("StartUpGirl");
        userRepository.save(user2);
        User user3 = new User("StartUp");
        userRepository.save(user3);


        Review review1 = new Review("Pretty damn good, could use more cow bell", 2, user1, channel1);
        reviewRepository.save(review1);

        Review review2 = new Review("Pretty bad, could use less cow bell", 4, user2, channel2);
        reviewRepository.save(review2);

        Review review3 = new Review("Pretty, could bell", 6, user3, channel3);
        reviewRepository.save(review3);

        Review review4 = new Review("Pretty damn good, could use more cow bell", 2, user1, channel1);
        reviewRepository.save(review4);

        Review review5 = new Review("Pretty bad, could use less cow bell", 4, user2, channel2);
        reviewRepository.save(review5);

        Review review6 = new Review("Pretty, could bell", 6, user3, channel3);
        reviewRepository.save(review6);

    }


}
