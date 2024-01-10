import React from 'react';
import './Home.css';
import banner from './banner.jpeg'
import Typing from 'react-typed';


function Home() {
  return (
    <div className='home'>
      <img src={banner} className='banner' alt='Academya-banner'/>
    </div>
  )
}

export default Home;