import React from 'react'
import Slider from 'react-slick' 
import img1 from './Portadas_para_tus_destacadas___Mi_ig___mario_czz-removebg-preview.png';
import img2 from './paint__3-removebg-preview.png';
import img3 from './download-removebg-preview.png';
import img4 from './download1-removebg-preview.png';
import img5 from './download__1_-removebg-preview.png';
import Aos from 'aos';

const TestimonialDAta = [
    {
      id: 1,
      name: "Aiman",
      text:"I stumbled upon this website while searching for resources, and I'm so glad I did! The content is incredibly helpful and well-organized. It's become my go-to resource for learning new things. Highly recommended!",
      img: img1,
    },
    {
      id: 2,
      name: "Zainab",
      text: "I recently discovered this website, and it's quickly become one of my favorites. The user interface is clean and intuitive, making it easy to navigate",
      img: img2,
    },
    {
      id: 3,
      name: "Talal",
      text: "As someone who's always on the lookout for reliable sources of information, this website has exceeded my expectations.",
      img: img3,
    },

    {
      id: 4,
      name: "Hamza",
      text: "I've been using this website for a while now, and it's been a game-changer for me. The variety of books is impressive, and the quality of the content is top-notch",
      img: img4,
    },

    {
      id: 5,
      name: "Talha",
      text: "This website is incredible! It's helped me expand my skills and knowledge in ways I never imagined. The interactive features make learning enjoyable and addictive. I keep coming back for more!",
      img: img5,
    }
];
const Testimonial = () => {
  const settings ={
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocue: true,
    responsive: [
      {
        breakpoint: 1000,
        settings:{
          slideToShow: 3,
          slidesToScroll:1,
          Infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings:{
          slideToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings:{
          slideToShow: 1,
          slidesToScroll: 1,
          InitialSlide: 2,
        },
      },
    ]
  };
  return (
    <div className='py-14 mb-10'>
   <div className="container">
    {/* Header section */}
    <div className='text-center mb-20'>
            <h1 className='text-6xl font-bold font-serif text-blue-800'>Testimonials</h1>
          </div>
          {/* Testimonial cards section */}
         <div>
          <Slider {...settings}>
            {
              TestimonialDAta.map((data,index) =>{
                return <div className='my-6 w-100' key={data.id}>
                  <div className='flex gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                    {/* image section */}
                    <div className='flex h-30'>
                    <div className='mb-4'>
                      <img src={data.img} alt="" className='rounded full h-150 w-20'/>
                    </div>
                    {/* content Section */}
    
                    <div className='mt-20 ml-10 '>
    
                        
                        <h1 className='text-xl font-bold text-black/70 font-cursive'>{data.name}</h1>
                        <p className='text-2xl text-gray-500 font-thin'>{data.text}</p>
                      </div>
                    </div>
                  </div>
                </div>




              })}
          </Slider>

            </div>   
    
    
    </div>     
    </div>
  )
}

export default Testimonial