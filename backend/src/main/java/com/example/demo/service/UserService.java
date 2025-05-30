package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User updateUser(User user) {
        if (user.getId() != null && userRepository.existsById(user.getId())) {
            return userRepository.save(user);
        }
        return null; // Or throw an exception
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean validateUser(String email, String password) {
        User foundUser = userRepository.findByEmail(email);
        return foundUser != null && foundUser.getPassword().equals(password);
    }
}
