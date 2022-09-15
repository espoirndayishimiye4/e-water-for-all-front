import React from 'react'
import './Stock.css'
import sticker from '../Images/Stock.png'
import imageery from '../Images/Medical.png'
import imagee1 from '../Images/imagea.png'
import imagee2 from '../Images/imagea1.png'
import imagee3 from '../Images/imagea2.png'
import imagee4 from '../Images/imagea3.png'
import imagee0 from '../Images/imagea4.png'
import imagee01 from '../Images/imagea5.png'
import imagee02 from '../Images/imagea6.png'
import imagee03 from '../Images/imagea7.png'
import Twiter from '../Images/twiter.png';
import Whatsapp from '../Images/whatsapp.png';
import Instagram from '../Images/instagram.png'
import Linkedin from '../Images/linkedin.png';

import HeaderNavbar from '../Top-Nav-Bar/Top-Nav-bar'

function Stock() {
  return (
    <div className='main-stock'>
       <HeaderNavbar/>
       <div className='image-content'>
        <div className='content-image'>
            <img id='stick' src={sticker} alt="" />
            <div className="clip-background"></div>
            <p>MedStore</p>

        </div>
        <div className='center-side'>
        <p id='paragraph-text'>Condimentum non, ultrices leo ultrices.<br/> 
            Molestie mattis augue eget neque feugiat<br/> elementum,
             vitae. Sodales consectetur  </p>
             <img id='medical' src={imageery} alt="" />
             </div>
                <div className='dot-footer'>
             <div className='dot'>
                <p>.</p>
                <p>.</p>
                <p>.</p>
             </div>
             <div className='content-image1'>
            <img id='stic' src={sticker} alt="" />
            <p>MedStore</p>

        </div>

             </div>

       </div>
       <div className='headers'>
        <p>Explore Categories</p>
        <p>See All</p>
       </div>
       <div className='boxes-conteners'>
            <div className='box-1'>
            <img id='imagea' src={imagee1} alt="" />
            <p id='paragraph-text1'>Coagulation </p>  
            </div>
            <div className='box-1'>
            <img id='imagea' src={imagee2} alt="" />
            <p id='paragraph-text1'> Flocculation </p>  
            </div>
            <div className='box-1'>
            <img id='imagea' src={imagee3} alt="" />
            <p id='paragraph-text1'> Sedimentation </p>  
            </div>
            <div className='box-1'>
            <img id='imagea' src={imagee4} alt="" />
            <p id='paragraph-text1'>Filtration </p>  
            </div>
            
       </div>

       <div className='headers2'>
        <p>Explore Categories</p>
        <p>See All</p>
       </div>
       <div className='boxes-conteners'>
            <div className='box-1'>
            <img id='imagea' src={imagee0} alt="" />
            <p id='paragraph-text1'>Coagulation </p>  
            </div>
            <div className='box-1'>
            <img id='imagea' src={imagee01} alt="" />
            <p id='paragraph-text1'> Flocculation </p>  
            </div>
            <div className='box-1'>
            <img id='imagea' src={imagee02} alt="" />
            <p id='paragraph-text1'> Sedimentation </p>  
            </div>
            <div className='box-1'>
            <img id='imagea' src={imagee03} alt="" />
            <p id='paragraph-text1'>Filtration </p>  
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

export default Stock