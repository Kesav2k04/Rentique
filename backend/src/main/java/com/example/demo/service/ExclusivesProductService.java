package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ExclusivesProduct;
import com.example.demo.repository.ExclusivesProductRepository;

@Service
public class ExclusivesProductService {

    @Autowired
    private ExclusivesProductRepository exclusivesProductRepository;

    public List<ExclusivesProduct> getAllProducts() {
        return exclusivesProductRepository.findAll();
    }

    public Optional<ExclusivesProduct> getProductById(Long id) {
        return exclusivesProductRepository.findById(id);
    }

    public void addProduct(ExclusivesProduct product) {
        exclusivesProductRepository.save(product);
    }

    public void updateProduct(ExclusivesProduct product) {
        if (exclusivesProductRepository.existsById(product.getId())) {
            exclusivesProductRepository.save(product);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void deleteProduct(Long id) {
        if (exclusivesProductRepository.existsById(id)) {
            exclusivesProductRepository.deleteById(id);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
