import React, { useState } from 'react'
import './Search.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Search = () => {
  const [search, setSearch]=useState("");
  const searchBook=(evt)=>{
    if(evt.key)
  
  return (
    <div className='row1'>
        <h2>Find your books</h2>
        <div className='search'>
          <input type = "text" placeholder= "Enter your book name"/>
          value={search} onChange={e=>setSearch(e.target.value)} 
        </div>
        
        </div>
  )
}
}
export default Search