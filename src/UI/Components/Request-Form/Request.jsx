import React from 'react'
import './Request.css';
import Twiter from '../Images/twiter.png';
import Whatsapp from '../Images/whatsapp.png';
import Instagram from '../Images/instagram.png'
import Linkedin from '../Images/linkedin.png';
import HeaderNavbar from '../Top-Nav-Bar/Top-Nav-bar'
import {Link} from 'react-router-dom';

function Request() {
  return (
    <div>
      <HeaderNavbar/>
      <div className='request-form'>
        <h1 id='information'>Client Information</h1>
        <form>
          <div className='form-control'>
          <label id='label'>Full Names</label>
          <input type="text"  name="Names" id='namee' placeholder="Full Names"/>
          </div>
          <div className='form-control'>
          <label id='label'>Phone Number</label>
          <input type="phone"  name="Names" id='namee' placeholder="Phone Number"/>
          </div>
          <div className='form-control'>
          <label id='label'>Adress</label>
          <input type="text"  name="Names" id='namee' placeholder="Adress"/>
          </div>
          <div className='form-control'>
          <label id='label'>Message</label>
          <input type="message"  name="Names" id='messages' placeholder="Message"/>
          </div>
        </form>

        <div className='button'>
          <button id='button1'>Cancel</button>
          <Link to="/home" id='button12'>Submit</Link>
        </div>
      </div>
      <div className='footer1'>
                    <div className='footer-text1'>
                        <h1 id='header-footer'>E_Water For All</h1>
                        <p id='water'>Pharetra, pharetra in massa<br/> nisl mi neque, aliquam, nam.<br/> Luctus urna.</p>

                    </div>
                        <div className='footer-text1'>
                            <h1 id='header-footer'>Use Links</h1>
                            <p  id='link'>Home</p>
                            <p id='link'>About Us</p>
                            <p id='link'>Contact Us</p>

                        </div>
                        <div className='footer-text1'>
                            <h1 id='header-footer'>Social Media</h1>
                                        <div className='platforms'>
                                            <img src={Twiter} alt=""/>
                                            <img src={Whatsapp}  alt=""/>
                                            <img src={Instagram}  alt=""/>
                                            <img src={Linkedin}  alt=""/>

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

export default Request