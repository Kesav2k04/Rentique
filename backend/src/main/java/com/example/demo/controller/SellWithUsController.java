package com.example.demo.controller;

import com.example.demo.model.SellWithUs;
import com.example.demo.service.SellWithUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.Year;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/sellwithus")
@CrossOrigin(origins = "http://localhost:5173") // Allows cross-origin requests from localhost:5173
public class SellWithUsController {

    private final SellWithUsService sellWithUsService;

    @Autowired
    public SellWithUsController(SellWithUsService sellWithUsService) {
        this.sellWithUsService = sellWithUsService;
    }

    @GetMapping
    public ResponseEntity<List<SellWithUs>> getAllSellWithUsEntries() {
        List<SellWithUs> entries = sellWithUsService.getAllSellWithUsEntries();
        return new ResponseEntity<>(entries, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SellWithUs> getSellWithUsById(@PathVariable Long id) {
        Optional<SellWithUs> entry = sellWithUsService.getSellWithUsById(id);
        return entry.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<SellWithUs> createSellWithUs(
            @RequestParam("fullName") String fullName,
            @RequestParam("contactNumber") String contactNumber,
            @RequestParam("email") String email,
            @RequestParam("city") String city,
            @RequestParam("designer") String designer,
            @RequestParam("productDescription") String productDescription,
            @RequestParam("outfitSize") SellWithUs.OutfitSize outfitSize,
            @RequestParam("margin") String margin,
            @RequestParam("height") String height,
            @RequestParam("frontPictures") MultipartFile[] frontPictures,
            @RequestParam("labelPicture") MultipartFile labelPicture,
            @RequestParam("proofOfPurchase") SellWithUs.ProofOfPurchase proofOfPurchase,
            @RequestParam("proofOfPurchaseFile") MultipartFile proofOfPurchaseFile,
            @RequestParam("productCondition") SellWithUs.ProductCondition productCondition,
            @RequestParam("worn") SellWithUs.Worn worn,
            @RequestParam("packaging") SellWithUs.Packaging packaging,
            @RequestParam("originalPrice") BigDecimal originalPrice,
            @RequestParam("purchaseYear") Year purchaseYear,
            @RequestParam("offerPrice") BigDecimal offerPrice,
            @RequestParam("rentOption") SellWithUs.RentOption rentOption) {
        
        try {
            SellWithUs sellWithUs = new SellWithUs();
            sellWithUs.setFullName(fullName);
            sellWithUs.setContactNumber(contactNumber);
            sellWithUs.setEmail(email);
            sellWithUs.setCity(city);
            sellWithUs.setDesigner(designer);
            sellWithUs.setProductDescription(productDescription);
            sellWithUs.setOutfitSize(outfitSize);
            sellWithUs.setMargin(margin);
            sellWithUs.setHeight(height);
            sellWithUs.setFrontPictures(convertFilesToBytes(frontPictures));
            sellWithUs.setLabelPicture(convertFileToBytes(labelPicture));
            sellWithUs.setProofOfPurchase(proofOfPurchase);
            sellWithUs.setProofOfPurchaseFile(convertFileToBytes(proofOfPurchaseFile));
            sellWithUs.setProductCondition(productCondition);
            sellWithUs.setWorn(worn);
            sellWithUs.setPackaging(packaging);
            sellWithUs.setOriginalPrice(originalPrice);
            sellWithUs.setPurchaseYear(purchaseYear);
            sellWithUs.setOfferPrice(offerPrice);
            sellWithUs.setRentOption(rentOption);

            SellWithUs newEntry = sellWithUsService.saveSellWithUs(sellWithUs);
            return new ResponseEntity<>(newEntry, HttpStatus.CREATED);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<SellWithUs> updateSellWithUs(@PathVariable Long id, @RequestBody SellWithUs sellWithUs) {
        if (!sellWithUsService.getSellWithUsById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        sellWithUs.setId(id);
        SellWithUs updatedEntry = sellWithUsService.saveSellWithUs(sellWithUs);
        return new ResponseEntity<>(updatedEntry, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSellWithUs(@PathVariable Long id) {
        if (!sellWithUsService.getSellWithUsById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        sellWithUsService.deleteSellWithUs(id);
        return ResponseEntity.noContent().build();
    }

    private byte[] convertFileToBytes(MultipartFile file) throws IOException {
        return file != null ? file.getBytes() : null;
    }

    private byte[] convertFilesToBytes(MultipartFile[] files) throws IOException {
        if (files == null) {
            return null;
        }
        byte[] allFilesBytes = new byte[0];
        for (MultipartFile file : files) {
            byte[] fileBytes = file.getBytes();
            allFilesBytes = concatenate(allFilesBytes, fileBytes);
        }
        return allFilesBytes;
    }

    private byte[] concatenate(byte[] first, byte[] second) {
        byte[] result = new byte[first.length + second.length];
        System.arraycopy(first, 0, result, 0, first.length);
        System.arraycopy(second, 0, result, first.length, second.length);
        return result;
    }
}


//package com.example.demo.controller;
//
//import com.example.demo.model.SellWithUs;
//import com.example.demo.service.SellWithUsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/sellwithus")
//@CrossOrigin(origins = "http://localhost:5173") // Allows cross-origin requests from localhost:5173
//public class SellWithUsController {
//
//    private final SellWithUsService sellWithUsService;
//
//    @Autowired
//    public SellWithUsController(SellWithUsService sellWithUsService) {
//        this.sellWithUsService = sellWithUsService;
//    }
//
//    @GetMapping
//    public ResponseEntity<List<SellWithUs>> getAllSellWithUsEntries() {
//        List<SellWithUs> entries = sellWithUsService.getAllSellWithUsEntries();
//        return new ResponseEntity<>(entries, HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<SellWithUs> getSellWithUsById(@PathVariable Long id) {
//        Optional<SellWithUs> entry = sellWithUsService.getSellWithUsById(id);
//        return entry.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @PostMapping("/create")
//    public ResponseEntity<SellWithUs> createSellWithUs(@RequestBody SellWithUs sellWithUs) {
//        SellWithUs newEntry = sellWithUsService.saveSellWithUs(sellWithUs);
//        return new ResponseEntity<>(newEntry, HttpStatus.CREATED);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<SellWithUs> updateSellWithUs(@PathVariable Long id, @RequestBody SellWithUs sellWithUs) {
//        if (!sellWithUsService.getSellWithUsById(id).isPresent()) {
//            return ResponseEntity.notFound().build();
//        }
//        sellWithUs.setId(id);
//        SellWithUs updatedEntry = sellWithUsService.saveSellWithUs(sellWithUs);
//        return new ResponseEntity<>(updatedEntry, HttpStatus.OK);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteSellWithUs(@PathVariable Long id) {
//        if (!sellWithUsService.getSellWithUsById(id).isPresent()) {
//            return ResponseEntity.notFound().build();
//        }
//        sellWithUsService.deleteSellWithUs(id);
//        return ResponseEntity.noContent().build();
//    }
//}



//import com.example.demo.model.OutfitSize;
//import com.example.demo.model.Packaging;
//import com.example.demo.model.ProductCondition;
//import com.example.demo.model.ProofOfPurchase;
//import com.example.demo.model.SellWithUs;
//import com.example.demo.model.TimesWorn;
//import com.example.demo.model.YesNoOption;
//import com.example.demo.service.SellWithUsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/SellWithUs")
//@CrossOrigin(origins = "http://localhost:5173")
//public class SellWithUsController {
//
//    private final SellWithUsService sellWithUsService;
//
//    @Autowired
//    public SellWithUsController(SellWithUsService sellWithUsService) {
//        this.sellWithUsService = sellWithUsService;
//    }
//
//    @PostMapping("/create")
//    public ResponseEntity<SellWithUs> createSellWithUs(
//            @RequestParam("fullName") String fullName,
//            @RequestParam("contactNumber") String contactNumber,
//            @RequestParam("email") String email,
//            @RequestParam("city") String city,
//            @RequestParam("designer") String designer,
//            @RequestParam("description") String description,
//            @RequestParam("size") String size,
//            @RequestParam("margin") String margin,
//            @RequestParam("height") String height,
//            @RequestParam("frontPictures") List<MultipartFile> frontPictures,
//            @RequestParam("labelPicture") MultipartFile labelPicture,
//            @RequestParam("proof") String proof,  // Changed to String
//            @RequestParam("condition") String condition,
//            @RequestParam("timesWorn") String timesWorn,
//            @RequestParam("packaging") String packaging,
//            @RequestParam("originalPrice") double originalPrice, // Changed to double
//            @RequestParam("purchaseYear") int purchaseYear, // Changed to int
//            @RequestParam("offerPrice") double offerPrice, // Changed to double
//            @RequestParam("concierge") String concierge,
//            @RequestParam("rent") String rent) {
//
//        SellWithUs sellWithUs = new SellWithUs();
//        sellWithUs.setFullName(fullName);
//        sellWithUs.setContactNumber(contactNumber);
//        sellWithUs.setEmail(email);
//        sellWithUs.setCity(city);
//        sellWithUs.setDesigner(designer);
//        sellWithUs.setProductDescription(description); // Corrected field name
//        sellWithUs.setOutfitSize(OutfitSize.valueOf(size.toUpperCase())); // Convert to enum
//        sellWithUs.setMargin(margin);
//        sellWithUs.setHeight(height);
//
//        try {
//            sellWithUs.setFrontPictures(convertFilesToBytes(frontPictures));
//            sellWithUs.setLabelPicture(convertFileToBytes(labelPicture));
//        } catch (IOException e) {
//            return ResponseEntity.status(500).body(null); // Handle file conversion errors
//        }
//
//        sellWithUs.setProofOfPurchase(ProofOfPurchase.valueOf(proof.toUpperCase())); // Convert to enum
//        sellWithUs.setProductCondition(ProductCondition.valueOf(condition.toUpperCase())); // Convert to enum
//        sellWithUs.setTimesWorn(TimesWorn.valueOf(timesWorn.toUpperCase())); // Convert to enum
//        sellWithUs.setPackaging(Packaging.valueOf(packaging.toUpperCase())); // Convert to enum
//        sellWithUs.setOriginalPrice(originalPrice);
//        sellWithUs.setPurchaseYear(purchaseYear);
//        sellWithUs.setOfferPrice(offerPrice);
//        sellWithUs.setConciergeService(YesNoOption.valueOf(concierge.toUpperCase())); // Convert to enum
//        sellWithUs.setRentOption(YesNoOption.valueOf(rent.toUpperCase())); // Convert to enum
//
//        SellWithUs savedSellWithUs = sellWithUsService.saveSellWithUs(sellWithUs);
//        return ResponseEntity.ok(savedSellWithUs);
//    }
//
//    @GetMapping("/findById/{id}")
//    public ResponseEntity<SellWithUs> findById(@PathVariable Integer id) {
//        Optional<SellWithUs> foundSellWithUs = sellWithUsService.findById(id);
//        return foundSellWithUs.map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<Void> deleteSellWithUs(@PathVariable Integer id) {
//        sellWithUsService.deleteSellWithUs(id);
//        return ResponseEntity.noContent().build();
//    }
//
//    // Helper methods to convert MultipartFile to byte[]
//    private byte[] convertFileToBytes(MultipartFile file) throws IOException {
//        return file.getBytes();
//    }
//
//    private byte[] convertFilesToBytes(List<MultipartFile> files) throws IOException {
//        // Handle multiple files if needed
//        // Example: Combine all file bytes into one byte array (optional)
//        return files.stream().flatMap(file -> {
//            try {
//                return java.util.stream.Stream.of(file.getBytes());
//            } catch (IOException e) {
//                throw new RuntimeException(e);
//            }
//        }).reduce(new byte[0], (a, b) -> {
//            byte[] combined = new byte[a.length + b.length];
//            System.arraycopy(a, 0, combined, 0, a.length);
//            System.arraycopy(b, 0, combined, a.length, b.length);
//            return combined;
//        });
//    }
//}
