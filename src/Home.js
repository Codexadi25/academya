import React from 'react';
import './Home.css';
import banner from './banner.jpeg';


function Home() {
  return (
    <div className='home'>
      <img src={banner} className='banner' alt='Academya-banner'/>
      <div className='Tagline'>
        <h1>Academya | </h1>
        
      </div>
    </div>
  )
}

export default Home;