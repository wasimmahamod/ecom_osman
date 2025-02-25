import React from 'react'
import './style.css'
import { company } from './categoryData'

function Companyname() {
  return (
    <div className='company-part'>
      {/* {
        company.map((item, i)=> (
            <div className='company-item' key={i}>
                <div><h3>{item.name}</h3></div>
            </div>
        ))
      } */}
      <div className='company-item'>
            {
                company.map((item, i)=>(
                    <div key={i}><h3>{item.name}</h3></div>
                ))
            }
      </div>
    </div>
  )
}

export default Companyname
