package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "menproducts")
public class MenProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Double price;
    private String category;
    private String color;
    private String size;
    private String occasion;

    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB",nullable = false)
    private byte[] image;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }
    public String getOccasion() { return occasion; }
    public void setOccasion(String occasion) { this.occasion = occasion; }
    public byte[] getImage() { return image; }
    public void setImage(byte[] image) { this.image = image; }
}
