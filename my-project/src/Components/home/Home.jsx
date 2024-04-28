import React from 'react'
import './home.css'
import Banner from './Banner'
import Services from '../Services/Services';
import Testimonial from '../Testominal/Testominal';
import Navbar from '../Navbar/Navbar';
import TypewriterText from './TypewriterText';
import Register from '../Register/Register';
import img1 from './img1.jpg'


const Home = () => {
  return (
  
<div>
  
    <div className='back flex justify-center items-center '>
    
        <div className='container  '>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
            <div>
           <div className='quoteleft'> 
           <div className='text-blue-300 text-5xl dancing-script'>
           <TypewriterText text = "WELCOME TO LITERARY CLUB"
           
            />
            </div>
            
         
           <p className='text-4xl mt-5' > your gateway to literary delight. Dive into a world of diverse stories and embark on unforgettable reading journeys. Start exploring today. </p>
           <a href="/register">
      <button className='text-whi bg-gradient-to-r from-blue-600 to-cyan-600 border-2 border-blue-800 rounded-full px-5 py-3 mt-5 ml-72  text-grey-200 text-center  hover:text-cyan-400 hover:scale-105 duration-200 '>
        <TypewriterText text="Start Now" />
      </button>
    </a>

           </div>
            </div>
            
            {/* Banner Section */}
            <div>
            <Banner/>
        </div>
       
        </div>
      
    </div>
    
    </div>
    
    <div>
          <Services/>
        </div>
        <div>
          <Testimonial/>
        </div>
    </div>
    
  )
}

export default Home