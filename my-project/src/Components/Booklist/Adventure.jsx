// AdventurePage.js
import React from 'react';
import BookList from './BookList';
import img1 from 'E:/semester6/Projec_SE/my-project/src/assets/Twisted_lies.jpg'; 
import Navbar from '../Navbar/Navbar';


const AdventurePage = () => {
  // Define adventure book data
  const adventureBooks = [
    {
        id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474169725i/15881.jpg",
        name: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        aosDelay: "100",
        link: "https://www.goodreads.com/book/show/15881.Harry_Potter_and_the_Chamber_of_Secrets"
      },
      {
        id: 2,
        img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404811979i/24583.jpg",
        name: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/24583.The_Adventures_of_Tom_Sawyer"
      },
      {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630475503i/7190.jpg",
        name: "The Three Musketeers",
        author: "Alexandre Dumas",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/7190.The_Three_Musketeers"
      },
     
      {
        id: 4,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546096879i/2956.jpg",
        name: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn"
      },
     
      {
        id: 5,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
        name: "The Alchemist",
        author: "Paulo Coelho",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/18144590-the-alchemist"
      },
     
      {
        id: 6,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385297074i/50.jpg",
        name: "Hatchet",
        author: "Gary Paulsen",
        aosDelay: "200",
        link:"https://goodreads.com/book/show/50.Hatchet"
      },
      {
        id: 7,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg",
        name: "Life of Pi",
        author: "Life of Pi",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/4214.Life_of_Pi"
      },
      {
        id: 8,
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611834134i/7126.jpg',
        name: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo"
      },
      {
        id: 9,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg",
        name: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/61215351-the-fellowship-of-the-ring"
      },
      {
        id: 10,
        img:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682976488i/2932.jpg',
        name: "Robinson Crusoe",
        author: "Daniel Defoe",
        aosDelay: "200",
        link:'https://www.goodreads.com/book/show/2932.Robinson_Crusoe'
      },
      {
        id: 11,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1494979127i/33507.jpg",
        name: "Twenty Thousand Leagues Under the Sea",
        author: "Jules Verne",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/33507.Twenty_Thousand_Leagues_Under_the_Sea"
      },
      {
        id: 12,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327940656i/153747.jpg",
        name: "Moby-Dick or, The Whale",
        author: "Herman Melville",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/153747.Moby_Dick_or_The_Whale"
      },
      {
        id: 13,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329189714i/2165.jpg",
        name: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea"
      },
      {
        id: 14,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339533695i/10194157.jpg",
        name: "Shadow and Bone",
        author: "Leigh Bardugo",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/10194157-shadow-and-bone"
      },
      {
        id: 15,
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1337714526i/34268.jpg',
        name: "Peter Pan",
        author: "J.M. Barrie",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/34268.Peter_Pan"
      },
      {
        id: 17,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535965085i/41637836.jpg",
        name: "The Subtle Knife",
        author: "Philip Pullman",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/41637836-the-subtle-knife"
      },
    
      {
        id: 18,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483132546i/33643994.jpg",
        name: "Daughter of the Pirate King",
        author: "Tricia Levenseller",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/33643994-daughter-of-the-pirate-king"
      },
    
      {
        id: 19,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630487234i/24213.jpg",
        name: "Alice’s Adventures in Wonderland",
        author: "Lewis Carroll",
        aosDelay: "200",
        link:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630487234i/24213.jpg"
      },
  ];

  return (
    <BookList title="Adventure" books={adventureBooks} />
  );
};

export default AdventurePage;
