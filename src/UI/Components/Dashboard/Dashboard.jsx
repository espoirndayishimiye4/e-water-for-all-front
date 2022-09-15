import React from 'react'
import './Dashboard.css'
import k1 from '../Images/Child.png';
import progres from '../Images/Progress.PNG'
import pc from '../Images/pc.png'
import {Link} from 'react-router-dom';
import HeaderNavbar from '../Top-Nav-Bar/Top-Nav-bar'


function Dashboard() {
  return (
    <div className='main-page'>
        <HeaderNavbar/>
        <div className='progress'>
        <img id='progress-p' src={progres} alt="" />
        <div className='files'>
            <img id='computer' src={pc} alt="" />
            <p>Byusa</p>
        </div>
        </div>
        <div className="two-side" >
            <div className='dash-lef-side'>
                <div className='dashboard-1'>
                    <img id='imager' src={k1} alt="" />
                    <p>Dashboard</p>
                </div>
                <div className='dashboard-1'>
                    <img id='imager' src={k1} alt="" />
                    <p>Provider</p>
                </div>
                <div className='dashboard-1'>
                    <img id='imager' src={k1} alt="" />
                    <Link id='dash-link' to ='/request'>Requests</Link>
                </div>
                <div className='dashboard-1'>
                    <img id='imager' src={k1} alt="" />
                    <p>Agents</p>
                </div>
                <div className='dashboard-1'>
                    <img id='imager' src={k1} alt="" />
                    <Link id='dash-link' to='/stock'>Stock</Link>
                </div>
                <div className='dashboard-1'>
                    <img id='imager' src={k1} alt="" />
                    <p>Logout</p>
                </div>

            </div>
            <div className='dash-right-side'>
                <div className='content'>
                    <p>kizimana</p>
                    <p>Kanombe</p>
                    <p>Tap 1</p>
                    <p>Citizen</p>
                </div>
                <div className='content'>
                    <p>Nishimwe</p>
                    <p>Kanombe</p>
                    <p>Tap 4</p>
                    <p>Citizen</p>
                </div>
                <div className='content'>
                    <p>Ikirezi Aline</p>
                    <p>Masaka</p>
                    <p>Tap 2</p>
                    <p>Agent</p>
                </div>
                <div className='content'>
                    <p>Kaammali</p>
                    <p>Kanombe</p>
                    <p>Tap 3</p>
                    <p>Citizen</p>
                </div>
                <div className='content'>
                    <p>Kamikazi</p>
                    <p>Rugando</p>
                    <p>Tap 10</p>
                    <p>Agent</p>
                </div>
                <div className='content'>
                    <p>Uwayezu</p>
                    <p>Kaabuugaa</p>
                    <p>Tap 1</p>
                    <p>Agent</p>
                </div>
                

            </div>

        </div>
        <div className='footer-all'>
        <p> Copyright @ E_water For All</p>
        <p>Developer <span id='spanny'>: BE ltd</span></p>
        </div>
        
    </div>
    
  )
}

export default Dashboard