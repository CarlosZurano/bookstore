package com.carlos.bookstore.bookstore_api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carlos.bookstore.bookstore_api.models.Book;

// Acceso a la BD
public interface BookRepository extends JpaRepository<Book, Long>{

    Optional<Book> findByTitleAndAuthor(String title, String author);
    

}
