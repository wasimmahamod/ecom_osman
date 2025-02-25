"use client"

import React, { useState } from 'react'
import Image from 'next/image'

function Productdetailsright({data}) {
  const [count, setCount] = useState(0)

  const handleminusclick = ()=> {
    setCount(count - 1)
    if(count == 0){
      setCount(0)
    }
  }

  const handleplasclick = ()=> {
    setCount(count + 1)
  }

  return (
    <div className='prdct-dtls-right'>
      <div className='breadcrumb'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/pages/product'>Product</a></li>
          <li>Wireless Microphone</li>
        </ul>
      </div>

      <div className='ratings'>
        <div className='rate-star'>
          <p>5.0</p>
          <Image src='/rating.png' width={100} height={20} alt='rating-img' />
          <span>Review(12) | Sold 99</span>
        </div>
        <div className='star-wish'>
          <Image src='/Love (1).png' width={22} height={22} alt='rate-img'/>
          <span>Add to Wishlist</span>
        </div>
      </div>

      <div className='product-heading'>
        <h3>{data[0].name}</h3>

        <div className='rate-percent'>
        {
          data[0].discount

          ?
          <>
            <p>${Number(data[0].regularprice) - Number(data[0].discount)}</p>
            <span>${Number(data[0].regularprice)}</span>
            <button>Save {Math.floor((Number(data[0].discount)/Number(data[0].regularprice)*100))}%</button>
          </>
          
          :
          <p>{Number(data[0].regularprice)}</p>
        } 
        </div>

        <div className='delivery-voucher-stock'>
          <div className='delivery'>
              <Image src='/Fast Delivery.svg' width={30} height={30} alt='fast-delivery'/>
              <span>Free Delivery</span>
          </div>
          <div className='delivery'>
              <Image src='/voucher.svg' width={30} height={30} alt='fast-delivery'/>
              <span>Available Voucher</span>
          </div>
          <div className='delivery'>
              <Image src='/Package.svg' width={30} height={30} alt='fast-delivery'/>
              <span>In Stock</span>
          </div>
        </div>
      </div>

      <div className='product-description'>
        <h4>Description</h4>
        <p>{data[0].discription}</p>
      </div>

    <div className='qnty-chrt'>
      <div className='quantity'>
          <h3>Quantity</h3>
          <div className='count'>
            <div className='minus' onClick={handleminusclick}>-</div>
            <p>{count}</p>
            <div className='plas' onClick={handleplasclick}>+</div>
          </div>
        </div>

        <div className='chrt'>
          <a href='#'><button className='chart'>Chart</button></a>
          <a href='#'><button className='cart'>Add to Cart</button></a>
        </div>
    </div>
    </div>
  )
}

export default Productdetailsright
