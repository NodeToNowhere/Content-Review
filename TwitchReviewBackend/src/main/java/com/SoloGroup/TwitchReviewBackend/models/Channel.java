package com.SoloGroup.TwitchReviewBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;


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
    @JsonManagedReference // annotation is part of bidirectional relationship
    private List<Review> reviews;


    public Channel(String name, int rating) {
        this.name = name;
        this.rating = rating;
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {this.reviews = reviews;}

    public void addReview(Review review) {reviews.add(review);}
}
