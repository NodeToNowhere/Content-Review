package components;

import models.Channel;
import models.Review;
import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import repositories.ChannelRepository;
import repositories.ReviewRepository;
import repositories.UserRepository;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ChannelRepository channelRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ReviewRepository reviewRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        Channel channel1 = new Channel("Super Cool Dude", 4);
        channelRepository.save(channel1);

        User user1 = new User("StartUpGuy", "Hunter1", "StartUpDude@gmail.com");
        userRepository.save(user1);


        Review review1 = new Review("Pretty damn good, could use more cow bell", 2, user1, channel1);
        reviewRepository.save(review1);


    }



}
