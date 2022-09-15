import React from 'react'

import './Login.css';
import icon from '../../Images/Vector.png'
import log from '../../Images/Login-Tap.png'
import {Link} from 'react-router-dom';


function Login() {


  return (
    <div>
      
        <div className='main'>
        <img  id='image' src={log} alt=""/>
        <div className='left-side'>
            <p id='title'>Login</p>
            <form className='form'>
            <input type="username"  id='text' placeholder='Username' required/>
            <input type="password"  id='text' placeholder='Password' required/>
        </form>
        <div className='password-rest'>
            <div className='icon'>
                <img id='icon' src={icon} alt=""/>
                <p>rember me?</p>
            </div>
            <p>forget password?</p>

        </div>
        <div className='button'>
        <Link to="/register" id='buton'>Register</Link> 
        <Link  to='/dashboard' id='button11'>Login</Link>
        </div>
        
        </div>
        </div>
        <div className='footer-bottom'>
       <p id='foot'>Copyright @ E_water For All </p>
       <p id='foot'>Developer : <span>BE ltd</span></p>


     </div>

    </div>
  )
}

export default Login