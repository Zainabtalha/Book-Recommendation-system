import React from 'react';
import './services.css';
import img2 from './img2.jpg';
import img3 from './White Black Abstract Dark Modern Photo The Flawless Beauty Book Cover (3).png';
import img1 from './White Black Abstract Dark Modern Photo The Flawless Beauty Book Cover (2).png';

const ServicesData = [
  {
    id: 1,
    img: img1,
    name: "The Young Wizard",
    author: "Aaron Loeb",
    aosDelay: "100",
  },
  {
    id: 2,
    img: img2,
    name: "Winter Stories",
    author: "Junlianna Silva",
    aosDelay: "100",
  },
  {
    id: 3,
    img: img3,
    name: "Twenty Years Later",
    author: "Charlie Donlea",
    aosDelay: "100",
  }
];

const Services = () => {
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
            {
              ServicesData.map((data, index) => (
                <div
                  key={index}
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
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;
