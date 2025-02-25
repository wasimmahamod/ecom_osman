import React from 'react'
import Images from 'next/image'

function Adsimg() {
  return (
    <div className='adsimg-part'>
      <div className='img'>
        <a href='#'>  
          <Images src='/Ads_2.png' width={1318} height={350} alt='ads_img' style={{objectFit: 'cover'}}/>
        </a>
      </div>
    </div>
  )
}

export default Adsimg
