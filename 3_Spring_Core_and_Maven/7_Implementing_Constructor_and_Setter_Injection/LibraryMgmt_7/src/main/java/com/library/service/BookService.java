package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private String librarianName;
    private BookRepository bookRepository;

    public BookService(String librarianName) {
        this.librarianName = librarianName;
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[" + librarianName + "] Adding book: " + title);
        bookRepository.save(title);
    }
}
