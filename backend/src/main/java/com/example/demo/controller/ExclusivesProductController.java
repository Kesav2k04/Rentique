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

import com.example.demo.model.ExclusivesProduct;
import com.example.demo.service.ExclusivesProductService;

@RestController
@RequestMapping("/api/exclusivesproducts")
@CrossOrigin(origins = "http://localhost:5173")
public class ExclusivesProductController {

    @Autowired
    private ExclusivesProductService exclusivesProductService;

    @GetMapping("/exclusives")
    public ResponseEntity<List<ExclusivesProduct>> getAllProducts() {
        List<ExclusivesProduct> products = exclusivesProductService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/exclusives/{id}")
    public ResponseEntity<ExclusivesProduct> getProductById(@PathVariable Long id) {
        Optional<ExclusivesProduct> product = exclusivesProductService.getProductById(id);
        return product.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/exclusives")
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

            ExclusivesProduct product = new ExclusivesProduct();
            product.setName(name);
            product.setPrice(price);
            product.setCategory(category);
            product.setColor(color);
            product.setSize(size);
            product.setOccasion(occasion);
            product.setImage(imageBytes);

            exclusivesProductService.addProduct(product);
            return ResponseEntity.ok("Product added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding product: " + e.getMessage());
        }
    }

    @PutMapping("/exclusives/{id}")
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
        Optional<ExclusivesProduct> existingProduct = exclusivesProductService.getProductById(id);

        if (existingProduct.isPresent()) {
            try {
                byte[] imageBytes = imageFile.getBytes();

                ExclusivesProduct product = existingProduct.get();
                product.setName(name);
                product.setPrice(price);
                product.setCategory(category);
                product.setColor(color);
                product.setSize(size);
                product.setOccasion(occasion);
                product.setImage(imageBytes);

                exclusivesProductService.updateProduct(product);
                return ResponseEntity.ok("Product updated successfully");
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating product: " + e.getMessage());
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    @DeleteMapping("/exclusives/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        exclusivesProductService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/exclusives/image/{id}")
    public ResponseEntity<String> getProductImage(@PathVariable Long id) {
        Optional<ExclusivesProduct> product = exclusivesProductService.getProductById(id);

        if (product.isPresent()) {
            byte[] image = product.get().getImage(); // Assuming getImage() returns a byte[]
            String base64Image = Base64.getEncoder().encodeToString(image);
            return ResponseEntity.ok(base64Image);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Image not found");
        }
    }
}
