package com.carlos.bookstore.bookstore_api.services;

import java.util.List;

import com.carlos.bookstore.bookstore_api.models.Book;

// interfaz para declaracion de metodos y promesa de uso
public interface BookService {
    List<Book> getAllBooks();
    Book getBookById(Long id);
    
    Book saveBook(Book book);
    void deleteBook(Long Book);

}
