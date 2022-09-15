import React from 'react'
import './About.css'
import Twiter from '../../Images/twiter.png';
import Whatsapp from '../../Images/whatsapp.png';
import Instagram from '../../Images/instagram.png';
import Linkedin from '../../Images/linkedin.png';
import HeaderNavbar from '../../Top-Nav-Bar/Top-Nav-bar'

function About() {
  return (
    <div>
    
        <HeaderNavbar/>
        <div className='body'>
                <h1 id='about'>About Us</h1>

                <p id='paragraph'>Ullamcorper velit euismod proin imperdiet a tempus, leo massa. Adipiscing vel dui 
                    quam consectetur vitae, sed <br/>adipiscing nullam. Molestie vitae quis eu donec laoreet orci. Molestie 
                    sodales est quis fermentum. Diam consectetur <br/>dolor habitant auctor orci.
                    Sed at velit, mi est enim ornare. Integer ac tum, platea sed ultrices enim.
                    Aliquam amet,<br/> imperdiet eget nibh. Quis consequat blandit sagittis amet.</p>
                
                <div className='center'>
                    <div className='center-child'>
                        <h1>our mission</h1>
                        <p id='paragraph-in-box'>Pretium ornare ut turpis quis aliquet nunc. Tempor<br/> purus diam netus vitae fusce tincidunt. Eget ipsum <br/>
                            faucibus donec placerat risus. Fames vel metus, <br/>viverra tincidunt vitae. Egestas.</p>

                    </div>
                    <div className='center-child1'>
                        <h1>our mission</h1>
                        <p id='paragraph-in-box'>Pretium ornare ut turpis quis aliquet nunc. Tempor<br/> purus diam netus vitae fusce tincidunt. Eget ipsum <br/>
                            faucibus donec placerat risus. Fames vel metus, <br/>viverra tincidunt vitae. Egestas.</p>

                    </div>
                    </div>
                    <div className='contact-info'>
                        <h1 id='info-header'>Contact Info</h1>
                        <div className='info-box'>
                        <div className='info1'>
                        <p>Phone number</p>
                        <p>Email</p>
                        <p>Address</p>
                        
                        </div>
                        <div className='info'>
                        <p>(+254)  864 586 798</p>
                        <p>ewaterforall@gmail.com</p>
                        <p>Kigali ,kicukiro,rugando, kk234</p>
                        
                        </div>

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
                       
    </div>
  )
}

export default About