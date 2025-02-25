import React from 'react'
import { Container } from 'react-bootstrap'
import HomeTopBar from '../homepart/hometopbar'
import FooterElements from '../homepart/footerelements'
import Blogdtsprt from './blogdtsprt'
import './style.css'

function BlogDetails() {
  return (
    <div>
        <Container>
            <HomeTopBar/>
            <Blogdtsprt/>
        </Container>
        <FooterElements/>
    </div>
  )
}

export default BlogDetails
