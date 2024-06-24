import React from 'react';
import {Article} from '../../components';
import './blog.css';
import {blog01, blog02, blog03, blog04, blog05} from './imports';



const Blog = () => {
  return (
    <div className='gpt3__blog section_padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient_text'>A lot is happening, We are blogging about it
      </h1>
    </div>
    <div className='gpt3__blog-container'>
     <div className='gpt3__blog-container_groupA'>
         <Article imgUrl={blog01} date='jun 13 2022' title='GPT-3 and Open Ai is the future. Let us explore how it is?'/>
     </div>
     <div className='gpt3__blog-container_groupB'>
     <Article imgUrl={blog02} date='jun 13 2022' title='GPT-3 and Open Ai is the future. Let us explore how it is?'/>
     <Article imgUrl={blog03} date='jun 13 2022' title='GPT-3 and Open Ai is the future. Let us explore how it is?'/>
     <Article imgUrl={blog04} date='jun 13 2022' title='GPT-3 and Open Ai is the future. Let us explore how it is?'/>
     <Article imgUrl={blog05} date='jun 13 2022' title='GPT-3 and Open Ai is the future. Let us explore how it is?'/>
     </div>
    </div>
    </div>
  )
}

export default Blog
