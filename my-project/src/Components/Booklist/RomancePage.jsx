
// AdventurePage.js
import React from 'react';
import BookList from './BookList';
import img1 from 'E:/semester6/Projec_SE/my-project/src/assets/Twisted_lies.jpg'; // Import additional images as needed
import Navbar from '../Navbar/Navbar';


const AdventurePage = () => {
  // Define adventure book data
  const adventureBooks = [
    {
        id: 1,
        img: img1,
        name: "Book 1",
        author: "Author 1",
        aosDelay: "100",
      },
      {
        id: 2,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 3,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
     
      {
        id: 4,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
     
      {
        id: 5,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
     
      {
        id: 6,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 7,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 8,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 9,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 10,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 11,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 12,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 13,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 14,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 15,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
      {
        id: 17,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
    
      {
        id: 18,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
    
      {
        id: 19,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
  ];

  return (
    <BookList title="Romance" books={adventureBooks} />
  );
};

export default AdventurePage;
