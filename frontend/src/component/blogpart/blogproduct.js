import Image from 'next/image'
import React from 'react'
import { blogData } from './blogdata'

function Blogproduct() {
  return (
    <div className='blog-product'>
        {
            blogData.map((item, i)=> (
                <div className='blog-product-item' key={i}>
                    <div className='blog-product-img'>
                        <Image src={item.img} width={320} height={320} alt='blog-product'/>
                    </div>
                    <div className='blog-product-text'>
                        <h3>{item.topline}</h3>
                        <p>{item.blogProDetails} </p>
                        <div className='admin'>
                            <p><span>{item.user}</span>{item.timing}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Blogproduct
