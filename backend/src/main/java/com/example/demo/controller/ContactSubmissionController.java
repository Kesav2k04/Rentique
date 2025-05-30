package com.example.demo.controller;

import com.example.demo.model.ContactSubmission;
import com.example.demo.service.ContactSubmissionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactSubmissionController {

    @Autowired
    private ContactSubmissionService service;

    @GetMapping
    public List<ContactSubmission> getAllSubmissions() {
        return service.getAllSubmissions();
    }

    @GetMapping("/{id}")
    public Optional<ContactSubmission> getSubmissionById(@PathVariable Long id) {
        return service.getSubmissionById(id);
    }

    @PostMapping
    public ContactSubmission createSubmission(@RequestBody ContactSubmission submission) {
        return service.saveSubmission(submission);
    }

    @PutMapping("/{id}")
    public ContactSubmission updateSubmission(@PathVariable Long id, @RequestBody ContactSubmission updatedSubmission) {
        Optional<ContactSubmission> optionalSubmission = service.getSubmissionById(id);
        if (optionalSubmission.isPresent()) {
            ContactSubmission existingSubmission = optionalSubmission.get();
            existingSubmission.setName(updatedSubmission.getName());
            existingSubmission.setEmail(updatedSubmission.getEmail());
            existingSubmission.setMessage(updatedSubmission.getMessage());
            return service.saveSubmission(existingSubmission);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deleteSubmission(@PathVariable Long id) {
        service.deleteSubmission(id);
    }
}
