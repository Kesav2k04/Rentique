package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BridesmaidProduct;
import com.example.demo.repository.BridesmaidProductRepository;

@Service
public class BridesmaidProductService {

    @Autowired
    private BridesmaidProductRepository bridesmaidProductRepository;

    public List<BridesmaidProduct> getAllProducts() {
        return bridesmaidProductRepository.findAll();
    }

    public Optional<BridesmaidProduct> getProductById(Long id) {
        return bridesmaidProductRepository.findById(id);
    }

    public void addProduct(BridesmaidProduct product) {
        bridesmaidProductRepository.save(product);
    }

    public void updateProduct(BridesmaidProduct product) {
        if (bridesmaidProductRepository.existsById(product.getId())) {
            bridesmaidProductRepository.save(product);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void deleteProduct(Long id) {
        if (bridesmaidProductRepository.existsById(id)) {
            bridesmaidProductRepository.deleteById(id);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
