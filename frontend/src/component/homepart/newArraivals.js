import React from 'react'
import HeadName from '../headname/headname'
import Headviewall from '../headviewall/headviewall'
import './style.css'
import Images from 'next/image'
import { newArraivals } from './categoryData'
import Image from 'next/image'

async function getData() {
    let data = await fetch('http://localhost:8000/api/v1/product/allpro')
    .then((res)=>
    res.json()
    )
  
    return data;
  }

async function NewArraivals() {

    let data = await getData();

  return (
    <div className='arrivals-part'>
        <Headviewall>
            <HeadName>New Arraivals</HeadName>
            <p className='view-text'>View All</p>
        </Headviewall>
        <div className='arraivals-items'>
            {
                data.map((item, i)=>(

                    item.proType == "new" && 

                    <div className='items-list' key={i}>

                        <div className='items-img'>
                            <Image src={`http://localhost:8000${item.image[0]}`} width={230} height={290} alt='newArraivals'/>
                            <div className='item-tag'>
                                <p>{item.proType}</p>
                            </div>
                        </div>
                        
                        <div className='item-text'>
                            <h4>{item.name}</h4>
                            <h3>100$</h3>
                            <div className='rating'>
                                <Image src={item.star} width={20} height={20} alt='star'/>
                                <p>10</p>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewArraivals
