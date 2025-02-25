import React from 'react'
import HomeTopBar from '../homepart/hometopbar'
import Container from '../container/Container'
import FooterElements from '../homepart/footerelements'
import Checkout from './checkout'

function Checkoutpart() {
  return (
    <div>
        <Container>
            <HomeTopBar/>
            <Checkout/>
        </Container>
        <FooterElements/>
    </div>
  )
}

export default Checkoutpart