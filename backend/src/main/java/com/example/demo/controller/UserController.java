package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/findByEmail/{email}")
    public ResponseEntity<User> findByEmail(@PathVariable String email) {
        User foundUser = userService.findByEmail(email);
        if (foundUser != null) {
            return ResponseEntity.ok(foundUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        Optional<User> foundUser = userService.findById(id);
        if (foundUser.isPresent()) {
            return ResponseEntity.ok(foundUser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginDetails) {
        String email = loginDetails.get("email");
        String password = loginDetails.get("password");
        boolean isValidUser = userService.validateUser(email, password);
        if (isValidUser) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
