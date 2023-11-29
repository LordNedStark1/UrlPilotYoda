import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReusableButton from './ReuseableButton'
import logo from '../assets/Images/Logo.svg'
import './NavBar.css'
import navPlane from'../assets/Images/yellow-blue-plane-with-white-flag-removebg-preview.png'

export default function NavBar() {
  const navigate = useNavigate()
  const joinOurWaitingListButton =()=>{
      navigate('/join-form')
  }
  return (
      
       <div className='header-main-div'>
          <div className="logo">
              <img src={logo} className="url-pilot-logo" alt="logo" />
          </div>
          <h1>Url Pilot Yoda</h1>
          {/* <div className='header-buttons'>
          <div className='nav-links'>
              
                  <li><Link to="/about-us" className='menu-link'>About us</Link></li>
                  <li><Link to="/contact-us" className='menu-link'>Contact</Link></li>
            
          </div>
          <div className='join-btn'>
                
                  <ReusableButton 
                  text={"JOIN OUR WAITNG LIST"} 
                  onClick={joinOurWaitingListButton}  maxWidth="34vw" width="15vw" height="45px" backgroundColor={'#5F259F'} />
              </div>
          </div> */}
              <img src={navPlane} alt='' 
              height={85} 
              width={85}
              />
           
          </div>
  )
}
