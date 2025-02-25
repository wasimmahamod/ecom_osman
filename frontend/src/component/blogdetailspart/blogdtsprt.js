import React from 'react'
import Blogleftpart from '../blogpart/blogleftpart'
import Blgdtlsrightpart from './blgdtlsrightpart'

export default function Blogdtsprt() {
  return (
    <div>
          <div className='blog-part-start'>
        <div className='breadcrumb'>
            <ul>
                <li className='brdcmb-list'><a href='/'>Home</a></li>
                <li className='brdcmb-list'>BlogDetails</li>
            </ul>
        </div>

        <div className='blog-heading'>
            <h3>Blog Post</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
        </div>

        <div className='blg-all-part'>
            <Blogleftpart/>
            <Blgdtlsrightpart/>
        </div>
    </div>
    </div>
  )
}
