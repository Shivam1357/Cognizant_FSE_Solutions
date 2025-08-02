import React from 'react';
import { books } from './books';

export default function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.bname}</strong>: ₹{book.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
