// 'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";

// async function getData() {
//     let data = await fetch('http://localhost:8000/api/v1/product/allcart')
//     .then((res)=>
//     res.json()
//     )

//     return data;
//   }
function Cartleft() {

    const [count, setCount] = useState(0)
    const [cartData, setCartData] = useState([])

    const handleMinus = () => {
        setCount(count - 1)
        if (count == 0) {
            setCount(0)
        }
    }

    const handlePlas = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        function allcart() {

            const data = fetch('http://localhost:8000/api/v1/product/allcart')
                .then((res) => {
                    res.json().then((data) => {
                        setCartData(data)
                    })
                }

                )
        }
        allcart()
    }, [])

    return (
        <div className='cart-left-part'>
            <div className='chec-box'>
                <input type='checkbox' id='select' />
                <label htmlFor='select'>Select All</label>
            </div>
            {
                cartData.map((item, i) => (
                    <div className='cart-items' key={i}>

                        <div className='select'>
                            <input type='checkbox' id='select' />
                        </div>

                        <div className='details'>
                            <div className='cart-imgs'>
                                <Image src={`http://localhost:8000${item.productId.image[0]}`} width={130} height={130} alt='cart-img' />
                            </div>
                            <div className='item-name-price'>
                                <h3>{item.productId.name}</h3>
                                <p>{item.discount}</p>
                                <div className='count'>
                                    <div className='minus' onClick={handleMinus}>-</div>
                                    <div className='numbers'>{count}</div>
                                    <div className='plass' onClick={handlePlas}>+</div>
                                </div>
                            </div>
                        </div>
                        <div className='cross'>
                            <RxCross2 className='cros-mark' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cartleft
