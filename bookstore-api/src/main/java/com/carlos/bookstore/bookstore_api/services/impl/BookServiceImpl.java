package com.carlos.bookstore.bookstore_api.services.impl;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carlos.bookstore.bookstore_api.models.Book;
import com.carlos.bookstore.bookstore_api.repositories.BookRepository;
import com.carlos.bookstore.bookstore_api.services.BookService;

//Implementacion de la interfaz y logica de negocio
@Service
public class BookServiceImpl implements BookService {

    //Inyeccion del repositorio para el acceso a la BD
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getAllBooks() {

        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(Long id) {

        return bookRepository.findById(id)
                .orElse(null); // devuelve null si no existe
    }

    @Override
    public Book saveBook(Book book) {

        //validaciones de campos
        if (book.getTitle() == null || book.getTitle().isBlank()) {
            throw new IllegalArgumentException("El titulo es boligatorio");
        }
        if (book.getAuthor() == null || book.getAuthor().isBlank()) {
            throw new IllegalArgumentException("El autor es boligatorio");
        }
        if (book.getPrice() == null || book.getPrice().compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("El precio debe ser positivo");
        }

        // comprobar existencia previa de un libro
        boolean exists = bookRepository
                .findByTitleAndAuthor(book.getTitle(), book.getAuthor())
                .isPresent();
        if (exists) {
            throw new IllegalArgumentException("Este libro ya existe");
        }
        return bookRepository.save(book);
    }

    @Override
    public void deleteBook(Long id) {

        bookRepository.deleteById(id);
    }
}
