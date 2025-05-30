package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.MenProduct;

public interface MenProductRepository extends JpaRepository<MenProduct, Long> {
}
