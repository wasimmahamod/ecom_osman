"use client";
import React from "react";
import Star from "review-star";

const ReviewStar = ({ count }) => {
  return (
    <>
      <Star reviewClick={count} />
    </>
  );
};

export default ReviewStar;
