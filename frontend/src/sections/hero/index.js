import React from 'react'
import Container from "@/components/container";
import "./style.css"
import Slider from '@/components/slider';
import { slides } from '@/data/homeData';

const Hero =()=>{
 
  return (
    <Container>
      <div className="hero_part">
        <div className='hero_slider'>
        <Slider slides={slides} autoPlayInterval={5000} />
        </div>
        <div className="collection_part">
          <img src="/assets/images/heroimg2.png" alt="Example" />
          <img src="/assets/images/heroimg1.png" alt="Example" />
        </div>
      </div>
    </Container>
  );
};

export default Hero