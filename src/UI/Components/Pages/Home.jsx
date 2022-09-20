import React from 'react';
import './Homepage/Home.css'
import Tap1 from '../Images/water.png';
import Tap2 from '../Images/Child.png';
import icon from '../Images/Vect.png';
import partner1 from '../Images/image1.png';
import partner2 from '../Images/image3.png';
import partner3 from '../Images/image2.png';
import Twiter from '../Images/twiter.png';
import Whatsapp from '../Images/whatsapp.png';
import Instagram from '../Images/instagram.png'
import Linkedin from '../Images/linkedin.png';
import HeaderNavbar from '../Top-Nav-Bar/Top-Nav-bar';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div>
     <HeaderNavbar/>  
     <div className="middle-side">
        <h1 id='sentence'>Explore Our influence</h1>
        <Link to="/impact" id='button-explore'>Explore</Link>
     </div>
     <div className='midle-text'>
        <div className='midle-text1'>
            <h1 className='header'>Who we are</h1>
            <p className='paragraph'>E-water for All   provide decision-makers 
            with accurate information.<br/> We bring people and organizations together. We campaign for more <br/>and better-targeted investment. 
            And we empower communities so<br/> that the Government hears their voices</p>

        </div>
        <img className='tap2'src={Tap1}  alt=""/>

     </div>
     <div className='midle-text-2'>2
     <img className='tap2' src={Tap2}  alt=""/>
     <div className='midle-text-3'>
            <p className='paragraph2'>Cras tortor a tincidunt massa, ullamcorper. 
            Sed egestas<br/> tristique scelerisque ut ipsum. Congue nunc, ac 
            dictum<br/> etiam scelerisque. Non montes, ipsum, posuere lectus <br/>
            tincidunt ac amet urna ipsum. Nulla lectus lectus 
            lorem <br/>sagittis. Mattis amet, tincidunt magna mattis auctor vel. 
            <br/>Volutpat enim.</p>
            <div className='battons'>
            <Link to="/request" className='buton'>Request</Link>
            <img id='pica' src={icon} alt=""/>
            </div>

        </div>

        
       

     </div>
     <h1 className='company'>Partners</h1>
     <div className='partner-boxes'>
        <div className='partner-box'>
            <img className='photo' src={partner1}  alt=""/>
            <p>At aliquet hac donec </p>
            <p>nibh mi posuere.</p>

        </div>
        <div className='partner-box'>
            <img className='photo1' src={partner2}  alt=""/>
            <p>At aliquet hac donec </p>
            <p>nibh mi posuere.</p>

        </div>
        <div className='partner-box'>
            <img className='photo' src={partner3}  alt=""/>
            <p>At aliquet hac donec </p>
            <p>nibh mi posuere.</p>

        </div>

     </div>
     <div className='footer'>
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

export default Home