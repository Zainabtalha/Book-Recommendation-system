
// AdventurePage.js
import React from 'react';
import BookList from './BookList';
import img1 from 'E:/semester6/Projec_SE/my-project/src/assets/Twisted_lies.jpg'; // Import additional images as needed
import Navbar from '../Navbar/Navbar';


const RomancePage = () => {
  // Define adventure book data
  const RomanceBooks = [
    {
        id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685776981i/63879533.jpg",
        name: "A Letter to the Luminous Deep",
        author: "Sylvie Cathrall",
        aosDelay: "100",
        link:"https://www.goodreads.com/book/show/63879533-a-letter-to-the-luminous-deep"
      },
      {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1705169217i/198666978.jpg",
        name: "Falling for Gage",
        author: "Mia Sheridan",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/198666978-falling-for-gage"
      },
      {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680712133i/125233849.jpg",
        name: "Misfits",
        author: "Maren Vivien Haase",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/125233849-misfits?from_choice=false&from_home_module=false#CommunityReviews"
      },
     
      {
        id: 4,
        img: img1,
        name: "Twisted Lies",
        author: "Ana Huang",
        aosDelay: "200",
      },
     
      {
        id: 5,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1674743453i/86767939._SY180_.jpg",
        name: "Terms and Conditions",
        author: "Lauren Asher",
        aosDelay: "200",
      },
     
      {
        id: 6,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663874437i/61229235.jpg",
        name: "King of Wrath",
        author: "Ana Huang",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/61229235-king-of-wrath"
      },
      {
        id: 7,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687963977i/175617686.jpg",
        name: "Hearts Still Beating",
        author: "Brooke Archer",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/175617686-hearts-still-beating"
      },
      {
        id: 8,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627673942i/58341222.jpg",
        name: "Reminders of Him",
        author: "Colleen Hoover",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/58341222-reminders-of-him"
      },
      {
        id: 9,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413500793i/23355069.jpg",
        name: "Hero",
        author: "Samantha Young",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/23355069-hero"
      },
      {
        id: 10,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1690213528i/194803816.jpg",
        name: "Old Flames and New Fortunes",
        author: "Sarah Hogle",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/194803816-old-flames-and-new-fortunes"

      },
      {
        id: 11,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1331612872i/38619.jpg",
        name: "Magic Bites",
        author: "Ilona Andrews",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/38619.Magic_Bites"
      },
      {
        id: 12,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407110429i/6479550.jpg",
        name: "Magic Bleeds",
        author: "Ilona Andrews",
        aosDelay: "200",
      },
      {
        id: 13,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1468560853i/301082.jpg",
        name: "Dead Until Dark",
        author: "Charlaine Harris",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/301082.Dead_Until_Dark"
      },
      {
        id: 14,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348924088i/743599.jpg",
        name: "Beyond the Highland Mist",
        author: "Karen Marie Moning",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/743599.Beyond_the_Highland_Mist"
      },
      {
        id: 15,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388207930i/30281.jpg",
        name: "Guilty Pleasures",
        author: "Laurell K. Hamilton",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/30281.Guilty_Pleasures"
      },
      {
        id: 17,
        img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693592112i/172979755.jpg",
        name: "Song of the Six Realms",
        author: "Judy I. Lin",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/172979755-song-of-the-six-realms"
      },
    
      {
        id: 18,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553624975i/26032912.jpg",
        name: "The Queen of Nothing",
        author: "Holly Black",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/26032912-the-queen-of-nothing"
      },
    
      {
        id: 19,
        img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674501506i/62816044.jpg" ,
        name: "A Curse for True Love",
        author: "Stephanie Garber",
        aosDelay: "200",
        link:"https://www.goodreads.com/book/show/62816044-a-curse-for-true-love?ref=rae_0"
      },
  ];

  return (
    <BookList title="Romance" books={RomanceBooks} />
  );
};

export default RomancePage;
