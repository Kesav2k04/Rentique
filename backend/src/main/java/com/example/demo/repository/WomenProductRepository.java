package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.WomenProduct;

public interface WomenProductRepository extends JpaRepository<WomenProduct, Long> {
}
