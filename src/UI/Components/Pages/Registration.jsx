import React from 'react'
import './Registration.css'
import picture from '../Images/Login-Tap.png'
import {Link} from 'react-router-dom';


function Registration() {
  return (
    <div>
    <div className='main'>
        <div className='left-side'>
        <img id='tap'src={picture}/>
        </div>
        <div className='right-side'>
            <h1 id='header'>Registration</h1>
            <form className='registration-form'>

            
                <div className='filled-form'>
                <label id='label'>Full Names</label>
                <input type='text' className='Name' placeholder='Full Names' required/>
                </div>
                
                <div className='filled-form'>
                <label id='label'>Adress</label>
                <input type='text' className='Name' placeholder='Adress' required/>
                </div>

                <div className='filled-form'>
                <label id='label'>Email</label>
                <input type='email' className='Name' placeholder='Email' required/>
                </div>

                <div className='filled-form'>
                <label id='label'>Password</label>
                <input type='password' className='Name' placeholder='Password' required/>
                </div>

            </form>
            <div className='button-register-login'> 
              <button id="buttons1" > Login</button>
              <Link to="/login" id='buttons'>Register</Link>

            </div>
            <div className='warm-up'>
              <p>Already Have An Account? <Link to="/login">Login</Link></p>
            </div>

        </div>
        

    </div>
    <div className='footer-bottom'>
              <p id='foot'>copyright @ E_water for all </p>
              <p id='foot'>developer : <span>BE ltd</span></p>


           </div>
    </div>
  )
}

export default Registration