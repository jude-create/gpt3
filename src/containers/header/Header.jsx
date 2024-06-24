import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt3__header section_padding ' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient_text'> Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any travelling assistance indulgence unpleasing Not thoughts all exercise  blessing indulgence with everything joy alteraction boisterous the attachment. We are yours to order that as asked of. </p>

         <div className='gpt-3__header-content__input'>
          <input type='email' placeholder='Your Email address'/>
          <button type='button'>Get Started</button>
         </div>

         <div className='gpt3_header-content__people'>
          <img src={people} alt='people' />
           <p>1600 people requested access a visit in last 24hrs</p>
         </div>
        </div>
          <div className='gpt3__header-image'>
            <img src={ai} alt='ai'/>
         
      </div>
    </div>
  )
}

export default Header
