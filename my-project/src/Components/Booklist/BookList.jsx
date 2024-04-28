import React, { useState } from 'react';
import './BookList.css';
import Navbar from '../Navbar/Navbar';

const BookList = ({ title, books }) => { // Accepting 'books' prop
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const openDescriptionModal = (book) => {
    setSelectedBook(book);
  };

  const closeDescriptionModal = () => {
    setSelectedBook(null);
  };
  return (
    <>
      <div className='section bg-gray-200 w-full'>
          <Navbar />
          <div className='body'>
          <div className='heading'>
            <div className='text-center mb-20'>
              <h1 className='text-6xl align-middle font-bold font-serif text-blue-800 content-center py-3'>{title}</h1>
            </div>
          </div>
          <div className="search text-center mb-10" >
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 border-blue-400 rounded px-10 py-2"
            />
          </div>
          <div className='book-item grid grid-cols-1 sm:grid-cols-3 mg:grid-cols-3 gap-10 md:gap-3 place-items-center'>
            {books.filter(book =>
              book.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((book, index) => (
              <div
                key={index}
                onClick={() => openDescriptionModal(book)}
                className={`background rounded-2xl shadow-xl duration-200 max-w-[300px] group relative w-full`}
                data-aos="fade-up"
                data-aos-delay={book.aosDelay}
              >
                <div>
                  <img
                    src={book.img}
                    alt=""
                    className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-5 duration-300 w-full'
                  />
                </div>
                <div className='text-center'>
                  <h1 className='text-xl font-bold group-hover:text-blue-600 duration-300'>{book.name}</h1>
                  <p className='text-gray-500 group-hover:text-blue-600 duration-300 text-sm line-clamp-2'>{book.author}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedBook && (
            <BookDescription
              book={selectedBook}
              onClose={closeDescriptionModal}
            />
          )}
          </div>
        </div>
    </>
  );
};

export default BookList;
