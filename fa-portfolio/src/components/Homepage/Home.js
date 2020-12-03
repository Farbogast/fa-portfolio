import React from 'react';
import videoSource from '../../video/video.mp4'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container' id='about'>
        <video autoPlay="autoplay" loop="loop" muted className='video-bg'>
             <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
            <h1 className='hi'>Hi there ! I'm François.</h1>
            <p className='journey'>I'm a Software Engineer, and this is my journey.</p>
            <Link to='/about'><button to='/about' >Discover me.</button></Link>
        </div>
    </div>
  );
}

export default Home;