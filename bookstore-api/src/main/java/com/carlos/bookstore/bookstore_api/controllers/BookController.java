package com.carlos.bookstore.bookstore_api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.bookstore.bookstore_api.models.Book;
import com.carlos.bookstore.bookstore_api.services.BookService;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins="http://localhost:5173") // permitir conexion con el front
public class BookController {

    private final BookService bookService;

    //Inyección mediante constructor
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    //End point para obeter una lista con todos los libros
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    //Endpoint para obtener libro por id
    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    // Endpoint para crear un libro nuevo ADMIN
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.saveBook(book);
    }


    //End point para actualizar libro ADMIN
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book){
        book.setId(id);
        return bookService.saveBook(book);
    }

    //End point para eliminar libro
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id){
        bookService.deleteBook(id);
    }
}
