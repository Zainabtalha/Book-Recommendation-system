// RecommendationPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import './RecommendationPage.css'; // Import the CSS file for styling
import Navbar from "../Navbar/Navbar";

function RecommendationPage() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/popularity");
        // Ensure the response is an array before setting state
        if (Array.isArray(response.data)) {
          setRecommendations(response.data);
        } else {
          setError("Invalid response format for recommendations");
        }
      } catch (error) {
        setError("Error fetching recommendations");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <div>
      <div>
        <Navbar/>
      </div>
      <div className="body bg-gray-200">
      <div className="text-center mb-20">
      <h1 className='heading text-6xl align-middle font-bold font-serif text-blue-800 content-center py-3 ' >Popular Books</h1>
      </div>
      
      <div className="book-item grid grid-cols-1 sm:grid-cols-3 mg:grid-cols-3 gap-10 md:gap-3 place-items-center">
        {recommendations.map((book, index) => (
          <div
            key={index}
            
            className={`background rounded-2xl shadow-xl duration-200 max-w-[300px] group relative w-full`}
          >
           <div className=""> <img 
           src={book["Image-URL-M"]} 
           alt={book["Book-Title"]} 
           className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-5 duration-300 w-full'
           />
           </div>
            <h2>{book["Book-Title"]}</h2>
            <p>{book["Book-Author"]}</p>
          </div>
        ))}
        </div>
      </div>
      </div>

  );
}

export default RecommendationPage;

