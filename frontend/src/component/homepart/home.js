 "use client"
 import axios from 'axios'
import { useEffect, useState } from 'react'
import Container from '../container/Container'
import FooterElements from './footerelements'
import HomeTopBar from './hometopbar'
import Toprateproduct from './toprateproduct'



 function Homepart() {
  const [time, setTime] = useState('');

useEffect(()=>{
  function getData (){
    axios.get("http://localhost:8000/api/v1/product/flashsale").then((data)=>{
      // setTime(data.data.time)
      console.log(data)
    })
  }
  getData()
},[])

console.log(time)
  
  return (
    <div>
      <Container>
        <HomeTopBar />

    
        {/* <FlashSale time={data[0]?.time}/>  */}
    <Toprateproduct/>
      </Container>
      <FooterElements />
    </div>
  )
}

export default Homepart
