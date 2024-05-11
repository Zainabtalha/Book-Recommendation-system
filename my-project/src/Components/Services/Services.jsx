import React, { useState } from 'react';
import './services.css';

const ServicesData = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg",
    name: "The Fault in Our Stars",
    author: "John Green",
    aosDelay: "100",
    link: "https://www.goodreads.com/book/show/11870085-the-fault-in-our-stars?ref=nav_sb_noss_l_17"
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681316893i/75668288.jpg",
    name: "The Hurricane Wars",
    author: "Thea Guanzon",
    aosDelay: "100",
    link: "https://www.goodreads.com/book/show/75668288-the-hurricane-wars?from_choice=true"
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632079606i/57645345.jpg",
    name: "Twenty Years Later",
    author: "Charlie Donlea",
    aosDelay: "100",
    link: "https://www.goodreads.com/book/show/57645345-twenty-years-later?from_search=true&from_srp=true&qid=ZGD9G8eWIc&rank=1"
  }
];

const Services = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const openDescriptionModal = (book) => {
    if (book.link) {
      window.open(book.link, '_blank');
    } else {
      setSelectedBook(book);
    }
  };

  const closeDescriptionModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <span id="services"></span>
      <div className='section py-10 bg-gray-200'>
        <div className='container'>
          {/* header title */}
          <div className='text-center mb-20'>
            <h1 className='text-6xl font-bold font-serif text-blue-800'>TOP BOOKS</h1>
          </div>
          {/* Services Card */}
          <div className='grid grid-cols-1 sm:grid-cols-3 mg:grid-cols-3 gap-10 md:gap-3 place-items-center'>
            {ServicesData.map((data, index) => (
              <div
                key={index}
                onClick={() => openDescriptionModal(data)}
                className={`backg rounded-2xl shadow-xl duration-200 max-w-[300px] group relative`}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                {/* img section */}
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-5 duration-300'
                  />
                </div>
                {/* Text Content */}
                <div className='text-center'>
                  <h1 className='text-xl font-bold group-hover:text-blue-600 duration-300'>{data.name}</h1>
                  <p className='text-gray-500 group-hover:text-blue-600 duration-300 text-sm line-clamp-2'>{data.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedBook && (
        <BookDescription
          book={selectedBook}
          onClose={closeDescriptionModal}
        />
      )}
    </>
  );
};

export default Services;




