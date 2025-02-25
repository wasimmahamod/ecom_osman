'use client'
import { reviewform } from '@/validationform/Yup';
import { useFormik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react'
import ReviewStar from 'review-star';

function Reivewformpart({data}) {

  const [reVal, setReVal] = useState(0);   

  const formik = useFormik({

    initialValues: {
      email: '',
      name: '',
      comment: '',
    },

    validationSchema: reviewform,

    onSubmit : async values => {
 
      const rawResponse = await fetch('http://localhost:8000/api/v1/product/review', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...values,rating:reVal,productId:data[0]?._id})
      });
      const content = await rawResponse.json();
    
      console.log(content);
   
    },
    
  });

  const {errors, touched} = formik;

  return (
    <div className='review-form-part'> 
      <div className='form-text'>
        <h4>Add Your Review</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
      </div>
      <div className='form-part'>
        <form onSubmit={formik.handleSubmit}>

          <label>Name*</label>
          <input type='text' placeholder='Type Your Name..' onChange={formik.handleChange} name='name' value={formik.values.name}/>
          {errors.name && touched.name && <p className='cmnt-errors'>{errors.name}</p>}

          
          <label>Email*</label>
          <input type='email' placeholder='Type Your Email..' onChange={formik.handleChange} name='email' value={formik.values.email}/>
          {errors.email && touched.email && <p className='cmnt-errors'>{errors.email}</p>}

          
          <label>Comment*</label>
          <textarea type='text' placeholder='Type Your Comment..' onChange={formik.handleChange} name='comment' value={formik.values.comment}/>
          {errors.comment && touched.comment && <p className='cmnt-errors'>{errors.comment}</p>}

          <div className='form-rating'>
            <p>Rating</p>
            <ReviewStar reviewClick={reVal} reviewCount={setReVal} />
          </div>

          <div>
            <button type='submit' className='submit-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reivewformpart
