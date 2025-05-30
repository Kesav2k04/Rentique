package com.example.demo.repository;

import com.example.demo.model.SellWithUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellWithUsRepository extends JpaRepository<SellWithUs, Long> {
    // You can define custom query methods here if needed
}
