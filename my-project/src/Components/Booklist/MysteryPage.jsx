// AdventurePage.js
import React from 'react';
import BookList from './BookList';
import img1 from 'E:/semester6/Projec_SE/my-project/src/assets/Twisted_lies.jpg'; // Import additional images as needed
import Navbar from '../Navbar/Navbar';


const MysteryPage = () => {
  // Define adventure book data
  const MysyteryBooks = [
    {
        id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1486131451i/853510.jpg",
        name: "Murder on the Orient Express",
        author: "Agatha Christie",
        aosDelay: "100",
        link:"https://www.goodreads.com/book/show/853510.Murder_on_the_Orient_Express"
      },
      {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
        name: "The Silent Patient",
        author: "Alex Michaelides",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/40097951-the-silent-patient"
      },
      {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891.jpg",
        name: "Sharp Objects",
        author: "Gillian Flynn",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/18045891-sharp-objects"
      },
     
      {
        id: 4,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1355929358i/8921.jpg",
        name: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/8921.The_Hound_of_the_Baskervilles?ref=rae_1"
      },
     
      {
        id: 5,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1402749479i/16143347.jpg",
        name: "We Were Liars",
        author: "E. Lockhart",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/16143347-we-were-liars"
      },
     
      {
        id: 6,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1356850909i/902.jpg",
        name: "The Westing Game",
        author: "Ellen Raskin",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/902.The_Westing_Game"
      },
      {
        id: 7,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628791882i/1232.jpg",
        name: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/1232.The_Shadow_of_the_Wind#?ref=nav_comm"
      },
      {
        id: 8,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528225499i/40389527.jpg",
        name: "The Woman in the Window",
        author: "A.J. Finn",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/40389527-the-woman-in-the-window"
      },
      {
        id: 9,
        img: img1,
        name: "Granite Harbor",
        author: "Peter Nichols",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/150260819-granite-harbor"
      },
      {
        id: 10,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1621347398i/57693172.jpg",
        name: "A Flicker in the Dark",
        author: "Stacy Willingham",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/57693172-a-flicker-in-the-dark?from_choice=false&from_home_module=false"
      },
      {
        id: 11,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg",
        name: "The Maid",
        author: "Nita Prose",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/55196813-the-maid"
      },
      {
        id: 12,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg",
        name: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/58733693-remarkably-bright-creatures?ref=rae_2"
      },
      {
        id: 13,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686092508i/62334530.jpg",
        name: "None of This Is True",
        author: "Lisa Jewell",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/62334530-none-of-this-is-true?ref=rae_4"
      },
      {
        id: 14,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668181003i/62703226.jpg",
        name: "The Only One Left",
        author: "Riley Sager ",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/62703226-the-only-one-left?ref=rae_1"
      },
      // {
      //   id: 15,
      //   img: img1,
      //   name: "Book 2",
      //   author: "Author 2",
      //   aosDelay: "200",
      // },
      // {
      //   id: 17,
      //   img: img1,
      //   name: "Book 2",
      //   author: "Author 2",
      //   aosDelay: "200",
      // },
    
      // {
      //   id: 18,
      //   img: img1,
      //   name: "Book 2",
      //   author: "Author 2",
      //   aosDelay: "200",
      // },
    
      {
        id: 19,
        img: img1,
        name: "Book 2",
        author: "Author 2",
        aosDelay: "200",
      },
  ];

  return (
    <BookList title="Mystery" books={MysyteryBooks} />
  );
};

export default MysteryPage;
