"use client"
import React, { useEffect, useState } from 'react'
import Images from 'next/image'
import { commentdata } from './productdata'
import axios from 'axios'

// async function getData() {
//     let data = await fetch('http://localhost:8000/api/v1/product/review/67bd8c3d0a9e8708bffae815')
//         .then((res) =>
//             res.json()
//         )

//     return data;
// }


function Reviewpart({ data }) {



    console.log(data)
    let [review, setReview] = useState([])

    // async function getData() {

    //     let data = await fetch('http://localhost:8000/api/v1/product/allpro')
    //         .then((res) =>
    //             res.json()
    //         )

    //     return data;

    // }

    useEffect(() => {
        function getReview() {
            axios.get(`http://localhost:8000/api/v1/product/review/${data[0]._id}`).then((response) => {
                setReview(response.data.data)

            })
        }
        getReview()
    }, [])

    console.log(review)
    return (
        <div className='review-part'>
            <div className='review-tag'>
                {/* <p>({datas.data.length})Review</p> */}
                <p>Description</p>
                <p>Discusion</p>
                <p>Gift Cards</p>
            </div>
            <div className='comment-list' >
                {
                    review &&
                    review.map((item, i) => (
                        <div className='tag-comment' key={i}>
                            <div className='cmnt-element'>
                                <div className='cmnt-img-rate'>
                                    <div className='img'>
                                        <Images src={item.img} width={56} height={56} alt='comment-img' />
                                    </div>
                                    <div className='review-text'>
                                        <h4>{item.name}</h4>
                                        <div className='rating'>
                                            <p>{item.rating}</p>
                                            <Images src={item.cmntrateimg} width={100} height={20} alt='review' />
                                            <p className='rate-timing'>{item.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='cmnt'>
                                {item.message}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Reviewpart
