'use client'
import React from 'react'
import './style.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from 'next/image';

function Hero() {
    return (
        <div className='hero-part'>
            <div className='banner-item'>
                <div className='first-banner'>
                    <Carousel fade className='carousel'>
                        <Carousel.Item className='banner-carousel'>
                            {/* <Images src="/Frame 10.png" width={1073} height={644} alt="..."/> */}

                        </Carousel.Item>
                        <Carousel.Item className='banner-carousel'>
                            {/* <Images src="/Offers_2.png" width={1073} height={644} alt="..."/> */}

                        </Carousel.Item>
                        <Carousel.Item className='banner-carousel'>
                            {/* <Images src="/Offers_3.png" width={1073} height={644} alt="..."/> */}

                        </Carousel.Item>
                    </Carousel>
                    <div className='overlay'>
                        <div className='overlay-text'>
                            <h3>Better Devices for Better Life</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                        </div>
                    </div>
                </div>
                <div className='second-banner'>
                    <div className='pc-gaming'>
                        <div className='pc-text'>
                            <p>Pc gaming collection</p>
                        </div>
                    </div>
                    <div className='camera'>
                        <div className='camera-text'>
                            <p>Camera collection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
