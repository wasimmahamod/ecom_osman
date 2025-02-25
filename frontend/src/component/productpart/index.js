import React from 'react'
import Container from '../container/Container'
import HomeTopBar from '../homepart/hometopbar'
import FooterElements from '../homepart/footerelements'
import Productdetails from './productdetails'
import Productbottompart from './productbottompart'

async function getData(slug) {
  let data = await fetch(`http://localhost:8000/api/v1/product/singlepro/${slug}`)
  .then((res)=>
  res.json()
  )

  return data;
}

async function ProductPart({slug}) {

  let data = await getData(slug);

  return (
    <div>      

        <Container>

            <HomeTopBar/>

            <Productdetails data={data}/>

            <Productbottompart data={data} />
            
        </Container>

        <FooterElements/>

    </div>
  )
}

export default ProductPart
