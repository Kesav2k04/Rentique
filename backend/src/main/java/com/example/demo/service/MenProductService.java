package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.MenProduct;
import com.example.demo.repository.MenProductRepository;

@Service
public class MenProductService {

    @Autowired
    private MenProductRepository menProductRepository;

    public List<MenProduct> getAllProducts() {
        return menProductRepository.findAll();
    }

    public Optional<MenProduct> getProductById(Long id) {
        return menProductRepository.findById(id);
    }

    public void addProduct(MenProduct product) {
        menProductRepository.save(product);
    }

    public void updateProduct(MenProduct product) {
        if (menProductRepository.existsById(product.getId())) {
            menProductRepository.save(product);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void deleteProduct(Long id) {
        if (menProductRepository.existsById(id)) {
            menProductRepository.deleteById(id);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
