// AdventurePage.js
import React from 'react';
import BookList from './BookList';
import img1 from 'E:/semester6/Projec_SE/my-project/src/assets/Twisted_lies.jpg'; // Import additional images as needed
import Navbar from '../Navbar/Navbar';


const FictionPage = () => {  // Define adventure book data
    const fictionBooks = [
    {
        id: 1,
        img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415036119i/22522808.jpg",
        name: "Trigger Warning",
        author: "Neil Gaiman",
        aosDelay: "100",
        link:"https://www.goodreads.com/book/show/22522808-trigger-warning?from_search=true&from_srp=true&qid=544k9wUK2Z&rank=1"
      },
      {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682792067i/16790.jpg",
        name: "Smoke and Mirrors",
        author: "Neil Gaiman",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/16790.Smoke_and_Mirrors?from_search=true&from_srp=true&qid=544k9wUK2Z&rank=2"
      },
      {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689939924i/186872482.jpg",
        name: "To Gaze Upon Wicked Gods",
        author: "Molly X. Chang",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/186872482-to-gaze-upon-wicked-gods"
      },
     
      {
        id: 4,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660589764i/60417459.jpg",
        name: "Better Than Fiction",
        author: "Alexa Martin",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/60417459-better-than-fiction?from_search=true&from_srp=true&qid=544k9wUK2Z&rank=6"
      },
     
      {
        id: 5,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328851164i/989313.jpg",
        name: "Heart of Darkness",
        author: "Joseph Conrad",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/989313.Heart_of_Darkness_and_Selected_Short_Fiction?from_search=true&from_srp=true&qid=544k9wUK2Z&rank=11"
      },
     
      {
        id: 6,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589827409i/53439886.jpg",
        name: "How the King of Elfhame",
        author: "Holly Black",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/53439886-how-the-king-of-elfhame-learned-to-hate-stories"
      },
      {
        id: 7,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1705868168i/17961.jpg",
        name: "Collected Fictions",
        author: "Jorge Luis Borges",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/17961.Collected_Fictions?from_search=true&from_srp=true&qid=544k9wUK2Z&rank=5"
      },
      {
        id: 8,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562726234i/13496.jpg",
        name: "A Game of Thrones",
        author: "George R.R. Martin",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?ref=nav_sb_noss_l_10"
      },
      {
        id: 9,
        img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1714503138i/50520939.jpg",
        name: "The Atlas Six",
        author: "Olivie Blake",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/50520939-the-atlas-six"
      },
      {
        id: 10,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361098973i/345627.jpg",
        name: "Vampire Academy",
        author: "Richelle Mead",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/345627.Vampire_Academy"
      },
      {
        id: 11,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1425711705i/13830.jpg",
        name: "The Woman Who Rides Like a Man",
        author: "Tamora Pierce ",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/13830.The_Woman_Who_Rides_Like_a_Man"
      },
      {
        id: 12,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5.jpg",
        name: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/5.Harry_Potter_and_the_Prisoner_of_Azkaban"
      },
      {
        id: 13,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651710803i/23437156.jpg",
        name: "Six of Crows",
        author: "Leigh Bardugo",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/23437156-six-of-crows"
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
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653185078i/43352954.jpg",
        name: "This is How You Lose the Time War",
        author: "Max Gladstone",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/43352954-this-is-how-you-lose-the-time-war"
      },
      {
        id: 17,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654581271i/61242426.jpg",
        name: "Legends & Lattes",
        author: "Travis Baldree",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/61242426-legends-lattes?ref=rae_3"
      },
    
      {
        id: 18,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654571019i/30558257.jpg",
        name: "Unsouled",
        author: "Will Wight",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/30558257-unsouled"
      },
    
      {
        id: 19,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562747584i/24180564.jpg",
        name: "Of Sea and Shadow",
        author: "Will Wight",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/24180564-of-sea-and-shadow"
      },
  ];

  return (
    <BookList title="Fiction" books={fictionBooks} />
  );
};

export default FictionPage