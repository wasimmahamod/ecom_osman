import React from 'react'
import Container from '../container/Container'
import HomeTopBar from '../homepart/hometopbar'
import Tronixabout from './tronixabout'
import FooterElements from '../homepart/footerelements'
import "./style.css"
import Adsimg from './adsimg'
import Choosepart from './choosepart'
import Teampart from './teampart'


function AboutPart() {
  return (
    <div>
      <Container>
        <HomeTopBar/>
        <Tronixabout/>
        <Adsimg/>
        <Choosepart/>
        <Teampart/>
      </Container>
      <FooterElements/>
    </div>
  )
}

export default AboutPart