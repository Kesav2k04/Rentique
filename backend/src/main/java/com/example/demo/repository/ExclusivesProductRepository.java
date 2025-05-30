package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.ExclusivesProduct;

public interface ExclusivesProductRepository extends JpaRepository<ExclusivesProduct, Long> {
}
