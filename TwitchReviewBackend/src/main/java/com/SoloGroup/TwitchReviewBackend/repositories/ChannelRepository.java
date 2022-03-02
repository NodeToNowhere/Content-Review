package com.SoloGroup.TwitchReviewBackend.repositories;

import com.SoloGroup.TwitchReviewBackend.models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChannelRepository extends JpaRepository<Channel, Long> {
 List<Channel> findByName(String name);
}
