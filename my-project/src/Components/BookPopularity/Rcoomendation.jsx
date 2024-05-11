import React, { useState, useEffect } from "react";
import axios from "axios";
import './RecommendationPage.css'; // Import the CSS file for styling
import Navbar from "../Navbar/Navbar";

function Recommendation() {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch recommendations based on the search term
  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/recommendations?book_name=${searchTerm}`);
      const responseData = response.data;
      const recommendationsArray = Object.values(responseData);
      setRecommendations(recommendationsArray);
      setError(null);
    } catch (error) {
      setRecommendations([]);
      setError("Error fetching recommendations");
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch recommendations when the search term changes
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchRecommendations();
    }
  }, [searchTerm]);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    
    
      
    <div>
      <div>
       <Navbar/>
      </div>
      <div className="body bg-gray-20">
      <div className="text-center">
      <h1 className="heading text-6xl align-middle font-bold font-serif text-blue-800 content-center py-3 ">Book Recommendations</h1>
      
      <div className="search-bar search text-center mb-10">
        <input
          type="text"
          placeholder="Last Book You Read...."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className="book-item grid grid-cols-1 sm:grid-cols-3 mg:grid-cols-3 gap-10 md:gap-3 place-items-center">
        {recommendations.map((recommendation, index) => (
          <div key={index}
           className="background rounded-2xl shadow-xl duration-200 max-w-[300px] group relative w-full">
           <div>
            <img src={recommendation["Book Image"]} alt={recommendation["Book Title"]} 
            className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-5 duration-300 w-full"
            />
    
            <h2>{recommendation["Book Title"]}</h2>
            <p>By: {recommendation["Book Author"]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Recommendation;
