import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import Logo from './Logo.png';
import Services from '../Services/Services';
import Testimonial from '../Testominal/Testominal';
import Home from '../home/Home';
import ChatApp from '../chat/chat';

// Menu data
const Menus = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "Popular Books",
    url: "/pop"
  },
  {
    label: "Recommendation",
    url: "/rec"
  },

  {
    label: "Chat",
    url: "/chat"
  },

];


// Genres data
const genres = [
  { 
    label: "Adventure", 
    url: "/adventure"
  },
  { 
    label: "Horror", 
    url: "/horror"
  },
  { 
    label: "Mystery", 
    url: "/mystery"
  },
  { 
    label: "Fiction", 
    url: "/fiction"
  },
  
];



// Navbar component
const Navbar = () => {
  return (
    <div className='main bg-gradient-to-r from-secondary to-secondary/90'>
      <div className="container py-2">
        <div className="flex">
          {/* Logo Section */}
          <div className="flex justify-between logo"> 
            <Link to='/' className='font-bold text-2xl flex font-cursive'>
              <img src={Logo} alt="Logo" className=' mt-3 w-10  mb-10'/>
              <div className="literary">Literaryleague</div> 
            </Link>
          </div>
          {/* Link Section */}
          <div className="classlink"></div>
          <div className='flex justify-between items-center gap-4 '>
            <ul className='hidden sm:flex items-right gap-4 navul'>
              {Menus.map((data, index) => (
                <li key={index}>
                  <Link to={data.url} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>{data.label}</Link>
                </li>
              ))}
              {/* Dropdown for genres */}
              <li className="relative">
                <span className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200 cursor-pointer">Genres</span>
                <ul className="absolute hidden bg-white text-gray-800 pt-1 shadow rounded-md dropdown-menu">
                  {genres.map((genre, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-200">
                      <Link to={genre.url}>{genre.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
           <Link to='/login'>
            <button className='text-blue-300 bg-gradient-to-r from-blue-600 to-cyan-600 border-2 border-blue-800 rounded-full px-3 py-1 text-grey-200 text-center  hover:text-white hover:scale-105 duration-200'>Login</button>
            </Link>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Navbar;
