package com.carlos.bookstore.bookstore_api.services;

import java.util.Optional;

import com.carlos.bookstore.bookstore_api.models.User;

public interface UserService {
    Optional<User> findByUsername(String username);
    User saveUser(User user);
}
