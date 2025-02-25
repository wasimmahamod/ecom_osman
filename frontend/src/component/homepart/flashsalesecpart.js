// 'use client'
import React from 'react'
import Images from 'next/image'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { flashsale } from './categoryData';
import Slider from "react-slick";
import Image from 'next/image';

{/* <div className='flash-sec-part'>
{flashsale.map((item, i)=>(
    <div className='sec-items'>
        <Images src={item.img} width={500} height={350} alt='flashSale' />
        <div className='flash-tag'>
            <p>{item.discount}</p>
        </div>
        <div className='flash-sec-text'>
            <h3>{item.device}</h3>
            <span className='ban-num'>{item.banname}</span>
            <span className='current-num'>{item.curname}</span>
            <div className='available-sold'>
                <p>{item.available}</p>
                <p>{item.sold}</p>
            </div>
            <ProgressBar variant="danger" now={80} />
        </div>
    </div>
))}
</div> */}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "red", width: "30px", height: '30px', borderRadius: "8px" }}
            onClick={onClick}
        />
    );
}

function Flashsalesecpart() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    };
    return (
        <>

            <div className='mt-5'><Slider {...settings}>
                <div className='flash-sec-part'>
                    <div className='sec-items'>
                        <a href='/pages/product'>
                            <Image src='/arraivals 1.png' width={500} height={350} alt='flashSale' />
                        </a>
                        <div className='flash-tag'>
                            <p>45% OFF</p>
                        </div>
                        <div className='flash-sec-text'>
                            <h3>Wireless Headphone</h3>
                            <span className='ban-num'>$29.99</span>
                            <span className='current-num'> - $19.99</span>
                            <div className='available-sold'>
                                <p>Available: 10</p>
                                <p>Sold: 5</p>
                            </div>
                            <ProgressBar variant="danger" now={80} />
                        </div>
                    </div>
                </div>
                <div className='flash-sec-part'>
                    <div className='sec-items'>
                        <a href='/pages/product'>
                            <Image src='/arraivals 7.png' width={500} height={350} alt='flashSale' />
                        </a>
                        <div className='flash-tag'>
                            <p>45% OFF</p>
                        </div>
                        <div className='flash-sec-text'>
                            <h3>Wireless Headphone</h3>
                            <span className='ban-num'>$29.99</span>
                            <span className='current-num'> - $19.99</span>
                            <div className='available-sold'>
                                <p>Available: 10</p>
                                <p>Sold: 5</p>
                            </div>
                            <ProgressBar variant="danger" now={80} />
                        </div>
                    </div>
                </div>
                <div className='flash-sec-part'>
                    <div className='sec-items'>
                        <a href='/pages/product'>
                            <Image src='/arraivals 6.png' width={500} height={350} alt='flashSale' />
                        </a>
                        <div className='flash-tag'>
                            <p>45% OFF</p>
                        </div>
                        <div className='flash-sec-text'>
                            <h3>Wireless Headphone</h3>
                            <span className='ban-num'>$29.99</span>
                            <span className='current-num'> - $19.99</span>
                            <div className='available-sold'>
                                <p>Available: 10</p>
                                <p>Sold: 5</p>
                            </div>
                            <ProgressBar variant="danger" now={80} />
                        </div>
                    </div>
                </div>
                <div className='flash-sec-part'>
                    <div className='sec-items'>
                        <a href='/pages/product'>
                            <Image src='/Offers_2.png' width={500} height={350} alt='flashSale' />
                        </a>
                        <div className='flash-tag'>
                            <p>45% OFF</p>
                        </div>
                        <div className='flash-sec-text'>
                            <h3>Wireless Headphone</h3>
                            <span className='ban-num'>$29.99</span>
                            <span className='current-num'> - $19.99</span>
                            <div className='available-sold'>
                                <p>Available: 10</p>
                                <p>Sold: 5</p>
                            </div>
                            <ProgressBar variant="danger" now={80} />
                        </div>
                    </div>
                </div>
                <div className='flash-sec-part'>
                    <div className='sec-items'>
                        <a href='/pages/product'>
                            <Image src='/arraivals 5.png' width={500} height={350} alt='flashSale' />
                        </a>
                        <div className='flash-tag'>
                            <p>45% OFF</p>
                        </div>
                        <div className='flash-sec-text'>
                            <h3>Wireless Headphone</h3>
                            <span className='ban-num'>$29.99</span>
                            <span className='current-num'> - $19.99</span>
                            <div className='available-sold'>
                                <p>Available: 10</p>
                                <p>Sold: 5</p>
                            </div>
                            <ProgressBar variant="danger" now={80} />
                        </div>
                    </div>
                </div>
                <div className='flash-sec-part'>
                    <div className='sec-items'>
                        <a href='/pages/product'>
                            <Image src='/arraivals 4.png' width={500} height={350} alt='flashSale' />
                        </a>
                        <div className='flash-tag'>
                            <p>45% OFF</p>
                        </div>
                        <div className='flash-sec-text'>
                            <h3>Wireless Headphone</h3>
                            <span className='ban-num'>$29.99</span>
                            <span className='current-num'> - $19.99</span>
                            <div className='available-sold'>
                                <p>Available: 10</p>
                                <p>Sold: 5</p>
                            </div>
                            <ProgressBar variant="danger" now={80} />
                        </div>
                    </div>
                </div>
            </Slider>
            </div>
        </>
    )
}

export default Flashsalesecpart
