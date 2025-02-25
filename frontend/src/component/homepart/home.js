import React from 'react'
import HomeTopBar from './hometopbar'
import Hero from './heropart'
import Category from './category'
import NewArraivals from './newArraivals'
import FlashSale from './flashsale'
import Companyname from './companyname'
import Quality from './quality'
import Collection from './collection'
import TopRateProduct from './toprateproduct'
import FooterElements from './footerelements'
import Container from '../container/Container'

// async function getData() {
//   let data = await fetch('http://localhost:8000/api/v1/product/allflash')
//   .then((res)=>
//   res.json()
//   )

//   return data;
// }

async function Homepart() {

  // let data = await getData();

  return (
    <div>
      <Container>
        <HomeTopBar />

        <FlashSale />
        <Companyname />
        <Quality />
        <Collection />
        <TopRateProduct />
      </Container>
      <FooterElements />
    </div>
  )
}

export default Homepart
