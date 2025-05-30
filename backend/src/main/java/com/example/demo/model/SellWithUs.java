package com.example.demo.model;

import java.math.BigDecimal;
import java.time.Year;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "sellwithus")
public class SellWithUs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(name = "contact_number", nullable = false, length = 15)
    private String contactNumber;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "city", nullable = false, length = 100)
    private String city;

    @Column(name = "designer", nullable = false, length = 100)
    private String designer;

    @Column(name = "product_description", nullable = false, columnDefinition = "TEXT")
    private String productDescription;

    @Enumerated(EnumType.STRING)
    @Column(name = "outfit_size", nullable = false)
    private OutfitSize outfitSize;

    @Column(name = "margin", length = 100)
    private String margin;

    @Column(name = "height", nullable = false, length = 10)
    private String height;

    @Lob
    @Column(name = "front_pictures",columnDefinition = "LONGBLOB", nullable = false)
    private byte[] frontPictures;

    @Lob
    @Column(name = "label_picture", columnDefinition = "LONGBLOB",nullable = false)
    private byte[] labelPicture;

    @Enumerated(EnumType.STRING)
    @Column(name = "proof_of_purchase", nullable = false)
    private ProofOfPurchase proofOfPurchase;

    @Lob
    @Column(name = "proof_of_purchase_file",columnDefinition = "LONGBLOB", nullable = false)
    private byte[] proofOfPurchaseFile;

    @Enumerated(EnumType.STRING)
    @Column(name = "product_condition", nullable = false)
    private ProductCondition productCondition;

    @Enumerated(EnumType.STRING)
    @Column(name = "worn", nullable = false)
    private Worn worn;

    @Enumerated(EnumType.STRING)
    @Column(name = "packaging", nullable = false)
    private Packaging packaging;

    @Column(name = "original_price", nullable = false)
    private BigDecimal originalPrice;

    @Column(name = "purchase_year", nullable = false)
    private Year purchaseYear;

    @Column(name = "offer_price", nullable = false)
    private BigDecimal offerPrice;

    @Enumerated(EnumType.STRING)
    @Column(name = "rent_option", nullable = false)
    private RentOption rentOption;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDesigner() {
        return designer;
    }

    public void setDesigner(String designer) {
        this.designer = designer;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public OutfitSize getOutfitSize() {
        return outfitSize;
    }

    public void setOutfitSize(OutfitSize outfitSize) {
        this.outfitSize = outfitSize;
    }

    public String getMargin() {
        return margin;
    }

    public void setMargin(String margin) {
        this.margin = margin;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public byte[] getFrontPictures() {
        return frontPictures;
    }

    public void setFrontPictures(byte[] frontPictures) {
        this.frontPictures = frontPictures;
    }

    public byte[] getLabelPicture() {
        return labelPicture;
    }

    public void setLabelPicture(byte[] labelPicture) {
        this.labelPicture = labelPicture;
    }

    public ProofOfPurchase getProofOfPurchase() {
        return proofOfPurchase;
    }

    public void setProofOfPurchase(ProofOfPurchase proofOfPurchase) {
        this.proofOfPurchase = proofOfPurchase;
    }

    public byte[] getProofOfPurchaseFile() {
        return proofOfPurchaseFile;
    }

    public void setProofOfPurchaseFile(byte[] proofOfPurchaseFile) {
        this.proofOfPurchaseFile = proofOfPurchaseFile;
    }

    public ProductCondition getProductCondition() {
        return productCondition;
    }

    public void setProductCondition(ProductCondition productCondition) {
        this.productCondition = productCondition;
    }

    public Worn getWorn() {
        return worn;
    }

    public void setWorn(Worn worn) {
        this.worn = worn;
    }

    public Packaging getPackaging() {
        return packaging;
    }

    public void setPackaging(Packaging packaging) {
        this.packaging = packaging;
    }

    public BigDecimal getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(BigDecimal originalPrice) {
        this.originalPrice = originalPrice;
    }

    public Year getPurchaseYear() {
        return purchaseYear;
    }

    public void setPurchaseYear(Year purchaseYear) {
        this.purchaseYear = purchaseYear;
    }

    public BigDecimal getOfferPrice() {
        return offerPrice;
    }

    public void setOfferPrice(BigDecimal offerPrice) {
        this.offerPrice = offerPrice;
    }

    public RentOption getRentOption() {
        return rentOption;
    }

    public void setRentOption(RentOption rentOption) {
        this.rentOption = rentOption;
    }

    public enum OutfitSize {
        XS, S, M, L, XL
    }

    public enum ProofOfPurchase {
        Invoice, Email
    }

    public enum ProductCondition {
        Yes, No
    }

    public enum Worn {
        Yes, No
    }

    public enum Packaging {
        Yes, No
    }

    public enum RentOption {
        Yes, No
    }
}







//import java.math.BigDecimal;
//import java.sql.Timestamp;
//
//import org.hibernate.annotations.CreationTimestamp;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.EnumType;
//import jakarta.persistence.Enumerated;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Lob;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "SellWithUs")
//public class SellWithUs {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @Column(name = "full_name", nullable = false, length = 100)
//    private String fullName;
//
//    @Column(name = "contact_number", nullable = false, length = 15)
//    private String contactNumber;
//
//    @Column(name = "email", nullable = false, length = 100)
//    private String email;
//
//    @Column(name = "city", nullable = false, length = 100)
//    private String city;
//
//    @Column(name = "designer", nullable = false, length = 100)
//    private String designer;
//
//    @Column(name = "product_description", nullable = false, columnDefinition = "TEXT")
//    private String productDescription;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "outfit_size", nullable = false)
//    private OutfitSize outfitSize;
//
//    @Column(name = "margin", length = 100)
//    private String margin;
//
//    @Column(name = "height", nullable = false, length = 10)
//    private String height;
//
//    @Lob
//    @Column(name = "front_pictures", nullable = false)
//    private byte[] frontPictures;
//
//    @Lob
//    @Column(name = "label_picture", nullable = false)
//    private byte[] labelPicture;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "proof_of_purchase", nullable = false)
//    private ProofOfPurchase proofOfPurchase;
//
//    @Lob
//    @Column(name = "proof_of_purchase_file", nullable = false)
//    private byte[] proofOfPurchaseFile;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "product_condition", nullable = false)
//    private ProductCondition productCondition;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "times_worn", nullable = false)
//    private TimesWorn timesWorn;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "packaging", nullable = false)
//    private Packaging packaging;
//
//    @Lob
//    @Column(name = "packaging_file", nullable = false)
//    private byte[] packagingFile;
//
//    @Column(name = "original_price", nullable = false)
//    private BigDecimal originalPrice;
//
//    @Column(name = "purchase_year", nullable = false)
//    private Integer purchaseYear;
//
//    @Column(name = "offer_price", nullable = false)
//    private BigDecimal offerPrice;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "concierge_service", nullable = false)
//    private ConciergeService conciergeService;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "rent_option", nullable = false)
//    private RentOption rentOption;
//
//    @Column(name = "submission_date", nullable = false, updatable = false)
//    @CreationTimestamp
//    private Timestamp submissionDate;
//
//    // Getters and Setters
//
//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public String getFullName() {
//        return fullName;
//    }
//
//    public void setFullName(String fullName) {
//        this.fullName = fullName;
//    }
//
//    public String getContactNumber() {
//        return contactNumber;
//    }
//
//    public void setContactNumber(String contactNumber) {
//        this.contactNumber = contactNumber;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getCity() {
//        return city;
//    }
//
//    public void setCity(String city) {
//        this.city = city;
//    }
//
//    public String getDesigner() {
//        return designer;
//    }
//
//    public void setDesigner(String designer) {
//        this.designer = designer;
//    }
//
//    public String getProductDescription() {
//        return productDescription;
//    }
//
//    public void setProductDescription(String productDescription) {
//        this.productDescription = productDescription;
//    }
//
//    public OutfitSize getOutfitSize() {
//        return outfitSize;
//    }
//
//    public void setOutfitSize(OutfitSize outfitSize) {
//        this.outfitSize = outfitSize;
//    }
//
//    public String getMargin() {
//        return margin;
//    }
//
//    public void setMargin(String margin) {
//        this.margin = margin;
//    }
//
//    public String getHeight() {
//        return height;
//    }
//
//    public void setHeight(String height) {
//        this.height = height;
//    }
//
//    public byte[] getFrontPictures() {
//        return frontPictures;
//    }
//
//    public void setFrontPictures(byte[] frontPictures) {
//        this.frontPictures = frontPictures;
//    }
//
//    public byte[] getLabelPicture() {
//        return labelPicture;
//    }
//
//    public void setLabelPicture(byte[] labelPicture) {
//        this.labelPicture = labelPicture;
//    }
//
//    public ProofOfPurchase getProofOfPurchase() {
//        return proofOfPurchase;
//    }
//
//    public void setProofOfPurchase(ProofOfPurchase proofOfPurchase) {
//        this.proofOfPurchase = proofOfPurchase;
//    }
//
//    public byte[] getProofOfPurchaseFile() {
//        return proofOfPurchaseFile;
//    }
//
//    public void setProofOfPurchaseFile(byte[] proofOfPurchaseFile) {
//        this.proofOfPurchaseFile = proofOfPurchaseFile;
//    }
//
//    public ProductCondition getProductCondition() {
//        return productCondition;
//    }
//
//    public void setProductCondition(ProductCondition productCondition) {
//        this.productCondition = productCondition;
//    }
//
//    public TimesWorn getTimesWorn() {
//        return timesWorn;
//    }
//
//    public void setTimesWorn(TimesWorn timesWorn) {
//        this.timesWorn = timesWorn;
//    }
//
//    public Packaging getPackaging() {
//        return packaging;
//    }
//
//    public void setPackaging(Packaging packaging) {
//        this.packaging = packaging;
//    }
//
//    public byte[] getPackagingFile() {
//        return packagingFile;
//    }
//
//    public void setPackagingFile(byte[] packagingFile) {
//        this.packagingFile = packagingFile;
//    }
//
//    public BigDecimal getOriginalPrice() {
//        return originalPrice;
//    }
//
//    public void setOriginalPrice(BigDecimal originalPrice) {
//        this.originalPrice = originalPrice;
//    }
//
//    public Integer getPurchaseYear() {
//        return purchaseYear;
//    }
//
//    public void setPurchaseYear(Integer purchaseYear) {
//        this.purchaseYear = purchaseYear;
//    }
//
//    public BigDecimal getOfferPrice() {
//        return offerPrice;
//    }
//
//    public void setOfferPrice(BigDecimal offerPrice) {
//        this.offerPrice = offerPrice;
//    }
//
//    public ConciergeService getConciergeService() {
//        return conciergeService;
//    }
//
//    public void setConciergeService(ConciergeService conciergeService) {
//        this.conciergeService = conciergeService;
//    }
//
//    public RentOption getRentOption() {
//        return rentOption;
//    }
//
//    public void setRentOption(RentOption rentOption) {
//        this.rentOption = rentOption;
//    }
//
//    public Timestamp getSubmissionDate() {
//        return submissionDate;
//    }
//
//    public void setSubmissionDate(Timestamp submissionDate) {
//        this.submissionDate = submissionDate;
//    }
//
//    // Enums
//    public enum OutfitSize {
//        XS, S, M, L, XL, XXL_XXXL
//    }
//
//    public enum ProofOfPurchase {
//        Invoice, Email, Transaction, Other
//    }
//
//    public enum ProductCondition {
//        New_with_tags, New_without_tags, Very_good, Good, Fair
//    }
//
//    public enum TimesWorn {
//    	ONCE, TWICE, THRICE, FOUR_TIMES, MORE
//    }
//
//    public enum Packaging {
//    	 ORIGINAL, REPLACEMENT
//    }
//
//    public enum ConciergeService {
//        Yes, No
//    }
//
//    public enum RentOption {
//        Yes, No
//    }
//}



//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.EnumType;
//import jakarta.persistence.Enumerated;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Lob;
//import jakarta.persistence.Table;
//
//import java.util.Arrays;
//
//@Entity
//@Table(name = "SellWithUs")
//public class SellWithUs {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private int id;
//
//    @Column(name = "full_name", nullable = false)
//    private String fullName;
//
//    @Column(name = "contact_number", nullable = false)
//    private String contactNumber;
//
//    @Column(name = "email", nullable = false)
//    private String email;
//
//    @Column(name = "city", nullable = false)
//    private String city;
//
//    @Column(name = "designer", nullable = false)
//    private String designer;
//
//    @Column(name = "product_description", nullable = false)
//    private String productDescription;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "outfit_size", nullable = false)
//    private OutfitSize outfitSize;
//
//    @Column(name = "margin")
//    private String margin;
//
//    @Column(name = "height", nullable = false)
//    private String height;
//
//    @Lob
//    @Column(name = "front_pictures", nullable = false)
//    private byte[] frontPictures;
//
//    @Lob
//    @Column(name = "label_picture", nullable = false)
//    private byte[] labelPicture;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "proof_of_purchase", nullable = false)
//    private ProofOfPurchase proofOfPurchase;
//
//    @Lob
//    @Column(name = "proof_of_purchase_file", nullable = false)
//    private byte[] proofOfPurchaseFile;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "product_condition", nullable = false)
//    private ProductCondition productCondition;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "times_worn", nullable = false)
//    private TimesWorn timesWorn;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "packaging", nullable = false)
//    private Packaging packaging;
//
//    @Lob
//    @Column(name = "packaging_file", nullable = false)
//    private byte[] packagingFile;
//
//    @Column(name = "original_price", nullable = false)
//    private double originalPrice;
//
//    @Column(name = "purchase_year", nullable = false)
//    private int purchaseYear;
//
//    @Column(name = "offer_price", nullable = false)
//    private double offerPrice;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "concierge_service", nullable = false)
//    private YesNoOption conciergeService;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "rent_option", nullable = false)
//    private YesNoOption rentOption;
//
//    @Column(name = "submission_date", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
//    private java.sql.Timestamp submissionDate;
//
//    // Getters and Setters
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getFullName() {
//        return fullName;
//    }
//
//    public void setFullName(String fullName) {
//        this.fullName = fullName;
//    }
//
//    public String getContactNumber() {
//        return contactNumber;
//    }
//
//    public void setContactNumber(String contactNumber) {
//        this.contactNumber = contactNumber;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getCity() {
//        return city;
//    }
//
//    public void setCity(String city) {
//        this.city = city;
//    }
//
//    public String getDesigner() {
//        return designer;
//    }
//
//    public void setDesigner(String designer) {
//        this.designer = designer;
//    }
//
//    public String getProductDescription() {
//        return productDescription;
//    }
//
//    public void setProductDescription(String productDescription) {
//        this.productDescription = productDescription;
//    }
//
//    public OutfitSize getOutfitSize() {
//        return outfitSize;
//    }
//
//    public void setOutfitSize(OutfitSize outfitSize) {
//        this.outfitSize = outfitSize;
//    }
//
//    public String getMargin() {
//        return margin;
//    }
//
//    public void setMargin(String margin) {
//        this.margin = margin;
//    }
//
//    public String getHeight() {
//        return height;
//    }
//
//    public void setHeight(String height) {
//        this.height = height;
//    }
//
//    public byte[] getFrontPictures() {
//        return frontPictures;
//    }
//
//    public void setFrontPictures(byte[] frontPictures) {
//        this.frontPictures = frontPictures;
//    }
//
//    public byte[] getLabelPicture() {
//        return labelPicture;
//    }
//
//    public void setLabelPicture(byte[] labelPicture) {
//        this.labelPicture = labelPicture;
//    }
//
//    public ProofOfPurchase getProofOfPurchase() {
//        return proofOfPurchase;
//    }
//
//    public void setProofOfPurchase(ProofOfPurchase proofOfPurchase) {
//        this.proofOfPurchase = proofOfPurchase;
//    }
//
//    public byte[] getProofOfPurchaseFile() {
//        return proofOfPurchaseFile;
//    }
//
//    public void setProofOfPurchaseFile(byte[] proofOfPurchaseFile) {
//        this.proofOfPurchaseFile = proofOfPurchaseFile;
//    }
//
//    public ProductCondition getProductCondition() {
//        return productCondition;
//    }
//
//    public void setProductCondition(ProductCondition productCondition) {
//        this.productCondition = productCondition;
//    }
//
//    public TimesWorn getTimesWorn() {
//        return timesWorn;
//    }
//
//    public void setTimesWorn(TimesWorn timesWorn) {
//        this.timesWorn = timesWorn;
//    }
//
//    public Packaging getPackaging() {
//        return packaging;
//    }
//
//    public void setPackaging(Packaging packaging) {
//        this.packaging = packaging;
//    }
//
//    public byte[] getPackagingFile() {
//        return packagingFile;
//    }
//
//    public void setPackagingFile(byte[] packagingFile) {
//        this.packagingFile = packagingFile;
//    }
//
//    public double getOriginalPrice() {
//        return originalPrice;
//    }
//
//    public void setOriginalPrice(double originalPrice) {
//        this.originalPrice = originalPrice;
//    }
//
//    public int getPurchaseYear() {
//        return purchaseYear;
//    }
//
//    public void setPurchaseYear(int purchaseYear) {
//        this.purchaseYear = purchaseYear;
//    }
//
//    public double getOfferPrice() {
//        return offerPrice;
//    }
//
//    public void setOfferPrice(double offerPrice) {
//        this.offerPrice = offerPrice;
//    }
//
//    public YesNoOption getConciergeService() {
//        return conciergeService;
//    }
//
//    public void setConciergeService(YesNoOption conciergeService) {
//        this.conciergeService = conciergeService;
//    }
//
//    public YesNoOption getRentOption() {
//        return rentOption;
//    }
//
//    public void setRentOption(YesNoOption rentOption) {
//        this.rentOption = rentOption;
//    }
//
//    public java.sql.Timestamp getSubmissionDate() {
//        return submissionDate;
//    }
//
//    public void setSubmissionDate(java.sql.Timestamp submissionDate) {
//        this.submissionDate = submissionDate;
//    }
//}
