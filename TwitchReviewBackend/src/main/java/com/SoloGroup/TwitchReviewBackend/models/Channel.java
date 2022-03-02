package com.SoloGroup.TwitchReviewBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "channels")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "averageRating")
    private int averageRating;

    @JsonIgnoreProperties({"channel"})
    @OneToMany(mappedBy = "channel", fetch = FetchType.LAZY)
    private List<Review> reviews;


    public Channel(String name, int averageRating) {
        this.name = name;
        this.averageRating = averageRating;
        this.reviews = new ArrayList<Review>();
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

    public int getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(int averageRating) {
        this.averageRating = averageRating;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {this.reviews = reviews;}

    public void addReview(Review review) {reviews.add(review);}


}