import React from 'react'
import './Top-Nav-bar.css'
import moto from '../Images/logo.png';
import {Link} from 'react-router-dom';

function HeaderNavbar () {
  return (
    <div className='Top-Nav-Bar-Header'>
      
        <div className='left-top-nav'>
          <img id='logo' src={moto}/>
            <p id='logo'>E</p>
            <p>-Water For All</p>
        </div>
        <div className='right-top-nav'>
        <Link id='link' to='/'> Home</Link>
        <Link id='link' to='/about'>About Us </Link>
        <Link id='link' to='/login'> Login</Link>
        <Link id='link1' to='/register'> Register</Link>
        </div>
    </div>
  )
}

export default HeaderNavbar