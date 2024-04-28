// BookDescriptionPage.js
import React, { useState } from 'react';

const BookDescriptionPage = ({ book }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.description}</p>
      <form>
        <label>
          Rating:
          <input type="number" value={rating} onChange={handleRatingChange} />
        </label>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default BookDescriptionPage;
