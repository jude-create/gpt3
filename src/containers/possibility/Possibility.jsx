import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = ()  => {
  return (
    <div className='gpt3__possibility section_padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit molestiae cum libero atque ut voluptate qui consectetur
          aliquid incidunt voluptatem quos,</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
