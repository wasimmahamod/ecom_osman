import React from 'react'
import './style.css'
import HeadName from '../headname/headname'
import Images from 'next/image'

async function getData() {
  let data = await fetch('http://localhost:8000/api/v1/product/allcat')
  .then((res)=>
  res.json()
  )

  return data;
}

export default async function Category() {

  let data = await getData();

  return (
    <div className='category-part'>

      <HeadName>Category</HeadName>
      
      <div className='category-item'>
        {
            data.map((item, i)=>(

              item.status == "approve" && 

                <div className='items' key={i}>
                    <Images src={`http://localhost:8000${item.image}`} width={80} height={80} alt='icon_img'/>
                    <p>{item.name}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
