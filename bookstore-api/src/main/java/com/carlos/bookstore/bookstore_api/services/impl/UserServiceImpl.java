package com.carlos.bookstore.bookstore_api.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carlos.bookstore.bookstore_api.models.User;
import com.carlos.bookstore.bookstore_api.repositories.UserRepository;
import com.carlos.bookstore.bookstore_api.services.UserService;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }


}
