package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.GroomsmenProduct;

public interface GroomsmenProductRepository extends JpaRepository<GroomsmenProduct, Long> {
}
