// 'use client'
import Image from 'next/image';
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Cartright() {
  return (
    <div className='cart-right-part'>

      <div className='coupon'>
        <div className='coupon-icon'>
          <Image src='/icon2.png' width={50} height={50} alt='coupon-img' />
        </div>
        <div className='coupon-code'>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h3>Have a coupon code?</h3></Accordion.Header>
              <Accordion.Body>458146521642</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className='summary'>
        <h3>summary</h3>

        <div className='total-price'>
          <p>Total:</p>
          <h3>$202.00</h3>
        </div>
        <div className='checkout-btn'>
          <a href='/pages/checkout'>
            <button>Checkout</button>
          </a>
        </div>
        <div className='shopping'>
          <a href='/'>Continue Shopping</a>
        </div>
      </div>

    </div>
  )
}

export default Cartright
