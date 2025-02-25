// 'use client'
import React, { useState } from 'react'
import './style.css'
import { useFormik } from 'formik'
import { buyerInfo } from '@/validationform/Yup'
import { allprice, checkdata, totalprice } from './checkoutdata'

function Checkout() {
  const [isActive, setActive] = useState();

  const handleClick = (e) => {
    setActive(e.target.id)
  }

  const initialState =
  {
    fname: "",
    lname: "",
    address: "",
    contactno: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
    comment: ""
  }

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: buyerInfo,
    onSubmit: values => {
      console.log(values);

    },
  });

  const { errors, touched } = formik;
  return (
    <div className='check-part'>
      <div className='breadcrumb'>
        <ul>
          <li className='brdcmb-list'><a href='/'>Home</a></li>
          <li className='brdcmb-list'><a href='/pages/cart'>My Cart</a></li>
          <li className='brdcmb-list'>CheckOut</li>
        </ul>
      </div>
      <div className='check-head'>
        <h3>CheckOut</h3>
      </div>
      <div className='check-checkout'>
        <div className='carts'>
          <div className='one'>1</div>
          <p>My Cart</p>
        </div>
        <div className='checkout'>
          <div className='two'>2</div>
          <p>checkout</p>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className='checkout-all-part'>
          <div className='check-left'>
            <div className='checkleft-box'>
              <div className='info'>
                <p>Buyer Info</p>
              </div>
              <div className='form-row'>
                <div className='form-col'>
                  <label>First Name</label>
                  <input type='text' placeholder='Type Your Name' name='fname' value={formik.values.fname} onChange={formik.handleChange} />
                  {errors.fname && touched.fname && <p className='cmnt-errors'>{errors.fname}</p>}
                </div>
                <div className='form-col'>
                  <label>last Name</label>
                  <input type='text' placeholder='Type Your Name' name='lname' value={formik.values.lname} onChange={formik.handleChange} />
                  {errors.lname && touched.lname && <p className='cmnt-errors'>{errors.lname}</p>}
                </div>
              </div>
              <div className='form-row'>
                <div className='form-col'>
                  <label>Address</label>
                  <input type='text' placeholder='Type Your Address' name='address' value={formik.values.address} onChange={formik.handleChange} />
                  {errors.address && touched.address && <p className='cmnt-errors'>{errors.address}</p>}
                </div>
                <div className='form-col'>
                  <label>Contact No.</label>
                  <input type='text' placeholder='Type Your Contact No' name='contactno' value={formik.values.contactno} onChange={formik.handleChange} />
                  {errors.contactno && touched.contactno && <p className='cmnt-errors'>{errors.contactno}</p>}
                </div>
              </div>
              <div className='form-row'>
                <div className='form-col'>
                  <label>Country</label>
                  <input type='text' placeholder='Type Your Country' name='country' value={formik.values.country} onChange={formik.handleChange} />
                  {errors.country && touched.country && <p className='cmnt-errors'>{errors.country}</p>}
                </div>
                <div className='form-col'>
                  <label>City</label>
                  <input type='text' placeholder='Type Your City' name='city' value={formik.values.city} onChange={formik.handleChange} />
                  {errors.city && touched.city && <p className='cmnt-errors'>{errors.city}</p>}
                </div>
              </div>
              <div className='form-row'>
                <div className='form-col'>
                  <label>State</label>
                  <input type='text' placeholder='Type Your State' name='state' value={formik.values.state} onChange={formik.handleChange} />
                  {errors.state && touched.state && <p className='cmnt-errors'>{errors.state}</p>}
                </div>
                <div className='form-col'>
                  <label>Zip Code</label>
                  <input type='text' placeholder='Type Your Zip Code' name='zipcode' value={formik.values.zipcode} onChange={formik.handleChange} />
                  {errors.zipcode && touched.zipcode && <p className='cmnt-errors'>{errors.zipcode}</p>}
                </div>
              </div>
              <div className='note'>
                <label>Note</label>
                <textarea type="text" placeholder='Type Your Note' name='comment' value={formik.values.comment} onChange={formik.handleChange} />
                {errors.comment && touched.comment && <p className='cmnt-errors'>{errors.comment}</p>}
              </div>
              {/* <button type='submit'> done </button> */}
            </div>
          </div>
          <div className='check-right'>
            <div className='checkout-right-part'>
              <div className='right-box'>
                <div className='heading'>
                  <h3>Your Order Summary</h3>
                </div>
                {
                  checkdata.map((item, i) => (
                    <div className='pro-rates' key={i}>
                      <div className='pro-type'>
                        <p>{item.proquantity}</p>
                        <p>{item.proname}</p>
                      </div>
                      <p>{item.proprice}</p>
                    </div>
                  ))
                }

                <div className='all-amount'>
                  {
                    allprice.map((item, i) => (
                      <div className='pro-rates' key={i}>
                        <p>{item.subproname}</p>
                        <p>{item.subprice}</p>
                      </div>
                    ))
                  }
                </div>

                <div className='total-amount'>
                  {
                    totalprice.map((item, i) => (
                      <div className='pro-rates' key={i}>
                        <h3>Total</h3>
                        <p className='total-price'>{item.totalprice}</p>
                      </div>
                    ))
                  }
                </div>

                <div className='payment'>
                  <h3>Payment</h3>
                  <div className='payment-mathod'>
                    <div className={isActive === "1" ? "active" : "pay-card"} id={"1"} key={1} onClick={handleClick}>
                      Credit Card
                    </div>
                    <div className={isActive === "2" ? "active" : "pay-card"} id={"2"} key={2} onClick={handleClick}>
                      Bank Transfer
                    </div>
                    <div className={isActive === "3" ? "active" : "pay-card"} id={"3"} key={3} onClick={handleClick}>
                      Paypal
                    </div>
                  </div>
                </div>

                <div className='check-btns'>
                  <a href='#'>
                    <button type='submit'>CheckOut</button>
                  </a>
                </div>

                <div className='cart-btns'>
                  <a href='/pages/cart'>
                    <p>Back to Cart</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Checkout
