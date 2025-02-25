import React from 'react'
import Container from '../container/Container'
import HomeTopBar from '../homepart/hometopbar'
import FooterElements from '../homepart/footerelements'
import './style.css'
import Blog from './blog'

function Blogpart() {
  return (
    <div>
        <Container>
            <HomeTopBar/>
            <Blog/>
        </Container>
        <FooterElements/>
    </div>
  )
}

export default Blogpart
