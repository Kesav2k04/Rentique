package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.GroomsmenProduct;
import com.example.demo.repository.GroomsmenProductRepository;

@Service
public class GroomsmenProductService {

    @Autowired
    private GroomsmenProductRepository groomsmenProductRepository;

    public List<GroomsmenProduct> getAllProducts() {
        return groomsmenProductRepository.findAll();
    }

    public Optional<GroomsmenProduct> getProductById(Long id) {
        return groomsmenProductRepository.findById(id);
    }

    public void addProduct(GroomsmenProduct product) {
        groomsmenProductRepository.save(product);
    }

    public void updateProduct(GroomsmenProduct product) {
        if (groomsmenProductRepository.existsById(product.getId())) {
            groomsmenProductRepository.save(product);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void deleteProduct(Long id) {
        if (groomsmenProductRepository.existsById(id)) {
            groomsmenProductRepository.deleteById(id);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
