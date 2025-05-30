package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ContactSubmission;
import com.example.demo.repository.ContactSubmissionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ContactSubmissionService {

    @Autowired
    private ContactSubmissionRepository repository;

    public List<ContactSubmission> getAllSubmissions() {
        return repository.findAll();
    }

    public Optional<ContactSubmission> getSubmissionById(Long id) {
        return repository.findById(id);
    }

    public ContactSubmission saveSubmission(ContactSubmission submission) {
        return repository.save(submission);
    }

    public void deleteSubmission(Long id) {
        repository.deleteById(id);
    }
}

