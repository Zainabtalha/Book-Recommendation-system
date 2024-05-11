//  import React from "react";
import { BrowserRouter, Route, Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Components/home/Home';
import Register from './Components/Register/Register';
import Login from './Components/login/Login';
 import React,{useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testominal/Testominal';
import BookList from './Components/Booklist/BookList';
import AdventurePage from './Components/Booklist/Adventure';
import FictionPage from './Components/Booklist/FictionPage';
import HorrorPage from './Components/Booklist/HorrorPage';
  import Search from './Components/Booklist/Search';
  // import PopularBooks from './Components/BookPopularity/PopularBooks';
 import RecommendationPage from './Components/BookPopularity/RecommendationPage';
 import Recommendation from './Components/BookPopularity/Rcoomendation';
import RomancePage from './Components/Booklist/RomancePage';
import MysteryPage from './Components/Booklist/MysteryPage';



const Dashboard = () =>{
  return <div>
    <Navbar />
    <hr/>
    <Outlet/>
    
  </div>
}
const router = createBrowserRouter([
  {
    path:"",
    element:<Dashboard/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"/services",
        element:<Services/>
        },

        {
          path:"/testominal",
          element:<Testimonial/>
          },

          
          
        ],
      },
      
  
      {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  // {
  //   path:"/booklist",
  //   element:<BookList/>
  //   },

    {
      path:"/adventure",
      element:<AdventurePage/>
      },
      {
        path:"/fiction",
        element:<FictionPage/>
        },

        {
          path:"/horror",
          element:<HorrorPage/>
          },
          {
            path:"/romance",
            element:<RomancePage/>
            },
            {
              path:"/mystery",
              element:<MysteryPage/>
              },

          // {
          //   path:"/search",
          //   element:<Search/>
          //   },

          {
            path:"/rec",
            element:<Recommendation/>
            },
  
              {
                path:"/pop",
                element:<RecommendationPage/>
                },
    



]);

function App()
{
  useEffect(()=>{
    AOS.init({
     offset:100,
     duration:700,
     easing: "ease-in",
     delay: 100,

     });
     });

  return(
    <div className="App">
      <RouterProvider router= {router}/>
    </div>
  );
}
export default App;


