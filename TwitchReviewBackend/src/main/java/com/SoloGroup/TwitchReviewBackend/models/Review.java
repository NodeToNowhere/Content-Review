package com.SoloGroup.TwitchReviewBackend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "comment")
    private String comment;

    @Column(name = "upvotes")
    private int upvotes;

    @ManyToOne
    @JsonIgnoreProperties({"review"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties({"review", "reviews"})
    private Channel channel;

    public Review(String comment, int upvotes, User user, Channel channel) {
        this.comment = comment;
        this.upvotes = upvotes;
        this.user = user;
        this.channel = channel;
    }

    public Review() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getUpvotes() {
        return upvotes;
    }

    public void setUpvotes(int upvotes) {
        this.upvotes = upvotes;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Channel getChannel() {
        return channel;
    }

    public void setChannel(Channel course) {
        this.channel = course;
    }


}