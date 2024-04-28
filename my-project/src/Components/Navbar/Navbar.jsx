import React from 'react';
import './navbar.css'; 
import Logo from './Logo.png';
import Services from '../Services/Services';
import Testimonial from '../Testominal/Testominal';
import Home from '../home/Home';

// Menu data
const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },
  {
    id: 2,
    name: "Top-Books",
    link: "/services"
  },
  {
    id: 3,
    name: "Reviews",
    link: "/testominal"
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
            <a href='/' className='font-bold text-2xl flex font-cursive'>
              <img src={Logo} alt="Logo" className=' mt-3 w-10  mb-10'/>
              <div className="literary">Literaryleague</div> 
            </a>
          </div>
          {/* Link Section */}
          <div className="classlink"></div>
          <div className='flex justify-between items-center gap-4 '>
            <ul className='hidden sm:flex items-right gap-4 navul'>
              {Menus.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'> {data.name}
                  </a>
                </li>
              ))}
            </ul>
           <a href='/login'>
            <button className='text-blue-300 bg-gradient-to-r from-blue-600 to-cyan-600 border-2 border-blue-800 rounded-full px-3 py-1 text-grey-200 text-center  hover:text-white hover:scale-105 duration-200'>Login</button>
            </a>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Navbar;
