import React from 'react'
import Aboutheadname from './aboutheadname'
import Images from 'next/image'
import { teamdata } from './aboutdata'

function Teampart() {
  return (
    <div className='team-part'>
      <Aboutheadname>Our Team</Aboutheadname>
      <div className='team-text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
      </div>

      <div className='team-all-item'>
        {
            teamdata.map((item, i)=>(
                <div className='team-item' key={i}>
                    <div className='imgs'>
                        <Images src={item.img} width={280} height={280} alt='team-img' className='team-img'/>
                    </div>
                    <h3>{item.head}</h3>
                    <p>{item.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Teampart
