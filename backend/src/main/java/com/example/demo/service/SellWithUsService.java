package com.example.demo.service;

import com.example.demo.model.SellWithUs;
import com.example.demo.repository.SellWithUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SellWithUsService {

    private final SellWithUsRepository sellWithUsRepository;

    @Autowired
    public SellWithUsService(SellWithUsRepository sellWithUsRepository) {
        this.sellWithUsRepository = sellWithUsRepository;
    }

    public List<SellWithUs> getAllSellWithUsEntries() {
        return sellWithUsRepository.findAll();
    }

    public Optional<SellWithUs> getSellWithUsById(Long id) {
        return sellWithUsRepository.findById(id);
    }

    public SellWithUs saveSellWithUs(SellWithUs sellWithUs) {
        return sellWithUsRepository.save(sellWithUs);
    }

    public void deleteSellWithUs(Long id) {
        sellWithUsRepository.deleteById(id);
    }
}
