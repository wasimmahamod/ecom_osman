import React from 'react'
import HomeTopBar from '../homepart/hometopbar'
import Container from '../container/Container'
import FooterElements from '../homepart/footerelements'
import Cart from './cart'

function Cartpart() {
  return (
    <div>
        <Container>
            <HomeTopBar/>
            <Cart/>
        </Container>
        <FooterElements/>
    </div>
  )
}

export default Cartpart
