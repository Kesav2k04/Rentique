package com.example.demo.controller;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.WomenProduct;
import com.example.demo.service.WomenProductService;

@RestController
@RequestMapping("/api/womenproducts")
@CrossOrigin(origins = "http://localhost:5173")
public class WomenProductController {

    @Autowired
    private WomenProductService womenProductService;

    @GetMapping("/women")
    public ResponseEntity<List<WomenProduct>> getAllProducts() {
        List<WomenProduct> products = womenProductService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/women/{id}")
    public ResponseEntity<WomenProduct> getProductById(@PathVariable Long id) {
        Optional<WomenProduct> product = womenProductService.getProductById(id);
        return product.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/women")
    public ResponseEntity<String> addProduct(
        @RequestParam("name") String name,
        @RequestParam("price") Double price,
        @RequestParam("category") String category,
        @RequestParam("color") String color,
        @RequestParam("size") String size,
        @RequestParam("occasion") String occasion,
        @RequestParam("image") MultipartFile imageFile
    ) {
        try {
            byte[] imageBytes = imageFile.getBytes();

            WomenProduct product = new WomenProduct();
            product.setName(name);
            product.setPrice(price);
            product.setCategory(category);
            product.setColor(color);
            product.setSize(size);
            product.setOccasion(occasion);
            product.setImage(imageBytes);

            womenProductService.addProduct(product);
            return ResponseEntity.ok("Product added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding product: " + e.getMessage());
        }
    }

    @PutMapping("/women/{id}")
    public ResponseEntity<String> updateProduct(
        @PathVariable Long id,
        @RequestParam("name") String name,
        @RequestParam("price") Double price,
        @RequestParam("category") String category,
        @RequestParam("color") String color,
        @RequestParam("size") String size,
        @RequestParam("occasion") String occasion,
        @RequestParam("image") MultipartFile imageFile
    ) {
        Optional<WomenProduct> existingProduct = womenProductService.getProductById(id);

        if (existingProduct.isPresent()) {
            try {
                byte[] imageBytes = imageFile.getBytes();

                WomenProduct product = existingProduct.get();
                product.setName(name);
                product.setPrice(price);
                product.setCategory(category);
                product.setColor(color);
                product.setSize(size);
                product.setOccasion(occasion);
                product.setImage(imageBytes);

                womenProductService.updateProduct(product);
                return ResponseEntity.ok("Product updated successfully");
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating product: " + e.getMessage());
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    @DeleteMapping("/women/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        womenProductService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/women/image/{id}")
    public ResponseEntity<String> getProductImage(@PathVariable Long id) {
        Optional<WomenProduct> product = womenProductService.getProductById(id);

        if (product.isPresent()) {
            byte[] image = product.get().getImage();
            String base64Image = Base64.getEncoder().encodeToString(image);
            return ResponseEntity.ok(base64Image);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Image not found");
        }
    }
}
