import React from 'react';
import BookList from './BookList';
import img1 from 'E:/semester6/Projec_SE/my-project/src/assets/Twisted_lies.jpg'; 
import Navbar from '../Navbar/Navbar';

const HorrorPage = () => {
  // Define horror book data
  const horrorBooks = [
    {
      id: 1,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689815190i/192761618.jpg",
      name: "You Know What You Did",
      author: "K.T. Nguyen",
      aosDelay: "100",
      link: "https://www.goodreads.com/book/show/18423.Dracula"
    },
    {
      id: 2,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699240422i/830177.jpg",
      name: "First Light",
      author: "Liz Kerin",
      aosDelay: "200",
      link: "https://www.goodreads.com/book/show/127280198-first-light"
    },
    {
      id: 3,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691165242i/125489423.jpg",
      name: "The Kill Factor",
      author: "Ben Oliver",
      aosDelay: "200",
      link: "https://www.goodreads.com/book/show/125489423-the-kill-factor"
    },
    {
      id: 4,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327868529i/18254.jpg",
      name: "Oliver Twist",
      author: "Charles Dickens",
      aosDelay: "200",
      link: "https://www.goodreads.com/book/show/18254.The_Shinings"
    },
    {
      id: 5,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711304242i/209326562.jpg",
      name: "Living in Cemeteries",
      author: "Stephen King",
      aosDelay: "200",
      link: "https://www.goodreads.com/book/show/121282.It"
    },
    {
      id: 6,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689880335i/56197501.jpg",
      name: "One of Us Knows",
      author: "Alyssa Cole",
      aosDelay: "200",
      link: "https://www.goodreads.com/book/show/56197501-one-of-us-knows"
    },
    {
      id: 7,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327935404i/10692.jpg",
      name: "Interview with the Vampire",
      author: "Anne Rice",
      aosDelay: "200",
      link: "https://www.goodreads.com/book/show/10692.Interview_with_the_Vampire"
    },
    {
      id: 8,
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384972290i/17245.jpg",
      name: "Misery",
      author: "Stephen King",
      aosDelay: "200",
      link: "https://www.goodreads.com/book/show/17245.Misery"
    },
  //   {
  //   id: 9,
  //   img: img1,
  //   name: "Book 2",
  //   author: "Author 2",
  //   aosDelay: "200",
  // },
  // {
  //   id: 10,
  //   img: img1,
  //   name: "Book 2",
  //   author: "Author 2",
  //   aosDelay: "200",
  // },
  // {
  //   id: 11,
  //   img: img1,
  //   name: "Book 2",
  //   author: "Author 2",
  //   aosDelay: "200",
  // },
  // {
  //   id: 12,
  //   img: img1,
  //   name: "Book 2",
  //   author: "Author 2",
  //   aosDelay: "200",
  // },
  // {
  //   id: 13,
  //   img: img1,
  //   name: "Book 2",
  //   author: "Author 2",
  //   aosDelay: "200",
  // },
  // {
  //   id: 14,
  //   img: img1,
  //   name: "Book 2",
  //   author: "Author 2",
  //   aosDelay: "200",
  // },
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

  // {
  //   id: 19,
  //   img: img1,
  //   name: "Book 2",
  //   author: "Author 2",
  //   aosDelay: "200",
  // },
];
  

  return (
    <BookList title="Horror" books={horrorBooks} />
  );
};

export default HorrorPage;
