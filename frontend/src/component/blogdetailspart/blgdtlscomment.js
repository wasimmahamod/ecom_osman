import React from 'react'
import Images from 'next/image'
import { blogcomment } from './blogdatas'

function Blgdtlscomment() {
  return (
    <div className='blg-dtls-cmnt'>
      <h3>Comment</h3>
      <div className='blg-dtls-list' >
            {
                blogcomment.map((item, i)=>(
                    <div className='blg-dtls-comment' key={i}>
                        <div className='blg-dtls-cmnt-element'>
                            <div className='blg-dtls-cmnt-img-rate'>
                                <div className='img'>
                                    <Images src={item.img} width={56} height={56} alt='comment-img'/>
                                </div>
                                <div className='comment-text'>
                                    <h4>{item.cmntname}</h4>
                                    <div className='comment-rating'>
                                        <p className='comment-rate-timing'>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <p className='cmnt'>
                                {item.cmnt} 
                            </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blgdtlscomment
