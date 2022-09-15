import React from 'react'
import './Impact.css'
import Ruhango from '../Images/rugando.png'
import can from '../Images/can.png'
import vector from '../Images/Vecto.png'
import lake from '../Images/Lake.png'
import Twiter from '../Images/twiter.png';
import Whatsapp from '../Images/whatsapp.png';
import Instagram from '../Images/instagram.png'
import Linkedin from '../Images/linkedin.png';
import form from '../Images/Vect.png'
import HeaderNavbar from '../Top-Nav-Bar/Top-Nav-bar'
import {Link} from 'react-router-dom';

function Impact() {
  return (
    <div className='all-content'>
        <HeaderNavbar/>
        <div className='image-green'>
            <p id='green-para'>SEE OUR IMPACT IN RWANDA</p>
        </div>
        <div className='text-photos'>
            <div className='text-p-text'>
            <h2>RUHANGO DISTRICT</h2>
            <p>Ruhango, they used to fetch dirty water<br/> but they now have clean water. Life is<br/> now good. </p>
            </div>
            <img id='picture-impact' src={Ruhango} alt="" />
        </div>
        <div className='text-photos'>
        <img id='picture-impact' src={can} alt="" />
            <div className='text-p-text'>
            <h2>NYARUGURU DISTRICT</h2>
            <p>In nyaruguru they used to have a long queue<br/> waiting for water but now we provided onother<br/> tap water 
now there is no more long queue. </p>
            </div>
            
        </div>
        <div className='text-photos'>
            <div className='text-p-text'>
            <h2>RUGANDO SECTOR</h2>
            <p>Rugando people they used to fetch far from<br/> their home now we provided clean water and <br/>near them </p>
            </div>
            <img id='picture-impact' src={lake} alt="" />
        </div>
        <div className='see-all'>
          <p>See More</p>
          <img id='vector' src={vector} alt="" />
        </div>

        <div className='box-impact'>
          <div className='box-impact-one'>
            <p>Any problem in your village? Please give<br/> your sugestion or
              problem</p>
              <div >
              <Link id="keep-on" to="/request"> Request</Link>
              <img id='request-icon' src={form} alt="" />
              </div>
          </div>
          <div className='box-impact-one'>
            <p>You may need some medicines
            plz visit<br/> our stock</p>
            <div className='all-together'>
            <Link id="keep-on1" to="/stock"> Store</Link>
            <img id='icony' src={form} alt="" />
            </div>
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

export default Impact