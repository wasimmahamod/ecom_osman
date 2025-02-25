import React from 'react'
import Reviewpart from './reviewpart'
import Reivewformpart from './reivewformpart'

function Productbottompart({data}) {

  return (
    <div className='prdct-btm-part'>
      <Reviewpart data={data}/>
      <Reivewformpart data={data}/>
    </div>
  )
}

export default Productbottompart
