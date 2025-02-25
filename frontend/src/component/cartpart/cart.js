import React from 'react'
import './style.css'
import Cartleft from './cartleft'
import Cartright from './cartright'

function Cart() {
  return (
    <div className='cart-part'>
        <div className='breadcrumb'>
            <ul>
                <li className='brdcmb-list'><a href='/'>Home</a></li>
                <li className='brdcmb-list'>My Cart</li>
            </ul>
        </div>

        <div className='cart-head'>
            <h3>My Cart</h3>
        </div>

        <div className='cart-checkout'>
          <div className='carts'>
            <div className='one'>1</div>
            <p>My Cart</p>
          </div>
          <div className='checkout'>
            <div className='two'>2</div>
            <p>checkout</p>
          </div>
        </div>

        <div className='cart-details'>

          <div className='cart-left'>
            <Cartleft/>
          </div>
          
          <div className='cart-right'>
            <Cartright/>
          </div>

        </div>
    </div>
  )
}

export default Cart
