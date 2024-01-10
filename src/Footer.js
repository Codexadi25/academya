import React from 'react';
import './Footer.css';
import logo from './academya-logo.png';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LaunchIcon from '@mui/icons-material/Launch';
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';




function Footer() {

  return (
    <div className='footer'>
      <div className='footer__body'>
        <div className='footer__box'>
          <img src={logo} className='logo' alt='academya-logo'/>
          <p className='tagline'>Academya | An Ed-tech Dynamic E-Learning & Staffing Solutions Platform</p>
        </div>
        <div className='footer__links'>
          <div className='sections'>
            <div className='heading'>
              Helpful Links
            </div>
            <a href='' target='__blank' className='links'>About Us</a>
            <a href='' target='__blank' className='links'>FAQs</a>
            <a href='' target='__blank' className='links'>Help & Support</a>
            <a href='' target='__blank' className='links'>Terms & Conditions</a>
          </div>
          <div className='sections'>
            <div className='heading'>
              Reach Us
            </div>
            <a href='mailto:/codexcademya@gmail.com' className='links mail'><MailIcon/>E-mail</a>
            <a href='https://wa.me/+918081034446?text=HI!%20I%20want%20to%20know%20more%20about%20Academya.' target='__blank' className='links wa'><WhatsAppIcon/>WhatsApp</a>
            <a href='tel:/+918081034446' target='__blank' className='links tel'><PhoneInTalk/>+91 808 103 444 6</a>
          </div>
          <div className='sections'>
            <div className='heading'>
              Connect Us
            </div>
            <a href='' target='__blank' className='links yt'><YouTubeIcon/>YouTube</a>
            <a href='https://www.instagram.com/codexcademya' target='__blank' className='links ig'><InstagramIcon/>Instagram</a>
            <a href='' target='__blank' className='links fb'><FacebookIcon/>Facebook</a>
            <a href='https://wa.me/+918081034446?text=HI!%20I%20want%20to%20know%20more%20about%20Academya.' target='__blank' className='links wa'><WhatsAppIcon/>WhatsApp</a>
          </div>
        </div>
      </div>
      <hr/>
      <div className='footer__bottom'>
        <span>
          <a href='' className='links'>Aditya Tech & Devops&nbsp;<LaunchIcon fontSize='14'/></a>
        </span>
        <span>Copyright-2024 &copy; All rights reserved.</span>
        <span>
          <div id="google_translate_element"></div>
        </span>
        </div>
    </div>
  )
}

export default Footer