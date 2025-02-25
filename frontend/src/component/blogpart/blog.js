import React from 'react'
import Blogleftpart from './blogleftpart'
import Blogrightpart from './blogrightpart'

function Blog() {
  return (
    <div className='blog-part-start'>
        <div className='breadcrumb'>
            <ul>
                <li className='brdcmb-list'><a href='/'>Home</a></li>
                <li className='brdcmb-list'>Blog</li>
            </ul>
        </div>

        <div className='blog-heading'>
            <h3>Latest Blog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
        </div>

        <div className='blg-all-part'>
            <Blogleftpart/>
            <Blogrightpart/>
        </div>
    </div>
  )
}

export default Blog
