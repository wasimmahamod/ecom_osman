"use client"

import React from 'react'
import ReviewStar from 'review-star';

const review = ({rating}) => {
  return (
    <ReviewStar reviewClick={rating} />
  )
}

export default review
