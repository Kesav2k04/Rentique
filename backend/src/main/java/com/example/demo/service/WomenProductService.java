package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.WomenProduct;
import com.example.demo.repository.WomenProductRepository;

@Service
public class WomenProductService {

    @Autowired
    private WomenProductRepository womenProductRepository;

    public List<WomenProduct> getAllProducts() {
        return womenProductRepository.findAll();
    }

    public Optional<WomenProduct> getProductById(Long id) {
        return womenProductRepository.findById(id);
    }

    public void addProduct(WomenProduct product) {
        womenProductRepository.save(product);
    }

    public void updateProduct(WomenProduct product) {
        if (womenProductRepository.existsById(product.getId())) {
            womenProductRepository.save(product);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void deleteProduct(Long id) {
        if (womenProductRepository.existsById(id)) {
            womenProductRepository.deleteById(id);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
