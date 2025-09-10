package com.carlos.bookstore.bookstore_api.controllers.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.bookstore.bookstore_api.dto.RegisterRequest;
import com.carlos.bookstore.bookstore_api.models.User;
import com.carlos.bookstore.bookstore_api.repositories.UserRepository;
import com.carlos.bookstore.bookstore_api.security.Role;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest request) {

        //validar que no exista username o email
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body("El nombre de usuario ya existe");
        }

        //crear usuario
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword())); // cifrado
        user.setRole(Role.USER); // rol por defecto

        //guardar usuario
        userRepository.save(user);

        return ResponseEntity.ok("Usuario registrado correctamente");
    }
}
