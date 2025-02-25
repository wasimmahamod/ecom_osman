import ProductPart from '@/component/productpart'
import React from 'react'

function Productpage({params}) {
  return (
    <div>
        <ProductPart slug={params.slug}/>
    </div>
  )
}

export default Productpage
