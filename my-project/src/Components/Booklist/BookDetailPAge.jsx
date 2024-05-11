// BookDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetailPage = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>{book.name}</h2>
      <img src={book.img} alt={book.name} />
      <p>{book.discription}</p>
      {/* Display other details of the book */}
    </div>
  );
};

export default BookDetailPage;
