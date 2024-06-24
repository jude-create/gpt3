import React from 'react';
import './features.css';
import {Feature} from '../../components';

const featuresData = [
  {
   title: 'Improving end distrusts instantly',
   text: 'I just told you!  Fry! Quit doing the right thing, you jerk! Michelle, I dont regret this, but I both rue and lament it.',
  },
  {
    title: 'Become the most active',
    text: 'Man braid celiac synth freegan readymade, pitchfork fam salvia ',
  },   
   
   {
    title: 'Message me or nothing',
    text: ' Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese.',
  },
  
   {
    title: 'Road to greatness deploy',
    text: 'Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese.', 
   }
]

const Features = ()  => {
  return (
    <div className='gpt3__features section_padding' id='features'>
      <div className='gpt3__features-header'>
       <h1 className='gradient_text'>The Future is Now and You Just Need To Realise It.
       Step into Future Today & Make it Happen</h1>
       <p>Request Early Access to Get Started</p>
    </div>
       <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
     
       </div>
 
    </div>
  )
}

export default Features
