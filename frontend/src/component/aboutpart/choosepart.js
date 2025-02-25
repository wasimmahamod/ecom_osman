import React from 'react'
import Aboutheadname from './aboutheadname'
import Images from 'next/image'
import { choosedata } from './aboutdata'

function Choosepart() {
  return (
    <div className='choose-part'>
        <Aboutheadname>Why Choosing Us</Aboutheadname>
        <div className='choose-all-item'>
            {
                choosedata.map((item, i)=>(
                    <div className='choose-item' key={i}>
                        <Images src={item.img} width={64} height={64} alt='choosepart-img' />
                        <h3>{item.head}</h3>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Choosepart
