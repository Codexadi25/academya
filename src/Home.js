import React from 'react';
import './Home.css';
import banner from './banner.jpeg'
import { ReactTyped } from "react-typed";


function Home() {
  return (
    <div className='home'>
      <img src={banner} className='banner' alt='Academya-banner'/>
      <div className='Tagline'>
        <h1>Academya | </h1>
        <ReactTyped
          strings={[
            "E-Learning",  
            "Tution",
            "Coaching",
            "Consultancy",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop></ReactTyped>
      </div>
    </div>
  )
}

export default Home;