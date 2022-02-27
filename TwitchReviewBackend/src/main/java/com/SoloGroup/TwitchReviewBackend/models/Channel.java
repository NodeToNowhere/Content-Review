package com.SoloGroup.TwitchReviewBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "channel")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "rating")
    private int rating;


    @JsonIgnoreProperties({"channel"})
    @OneToMany(mappedBy = "channel", fetch = FetchType.LAZY)
    private List<com.SoloGroup.TwitchReviewBackend.models.Review> reviews;

    public Channel(String name, int rating) {
        this.name = name;
        this.rating = rating;
        this.reviews = new ArrayList<com.SoloGroup.TwitchReviewBackend.models.Review>();
    }

    public Channel() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public List<com.SoloGroup.TwitchReviewBackend.models.Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<com.SoloGroup.TwitchReviewBackend.models.Review> reviews) {
        this.reviews = reviews;
    }

    public void addReview(com.SoloGroup.TwitchReviewBackend.models.Review review) {
        reviews.add(review);
    }
}
