import React from 'react';
import  './footer.css';
import gpt3Logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div className='gpt3__footer section_padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient_text'>Do you want to step into the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo"/>
          <p>Crescentwood K12 182 close,opposite lang Rik avenue</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
          
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crescentwood K12 182 close,opposite lang</p>
          <p>+234889901457</p>
          <p>info@jude.net</p>
         
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2021 GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
