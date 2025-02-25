import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const EmailVerification = () => {

let param = useParams()

let navigate = useNavigate()

useEffect (()=>{
  
 async function verify() {
  let data = await axios.post('http://localhost:8000/api/v1/auth/linkvarification',
  {
      token:param.token,
  },
  )
  
  navigate("/login")

 }
 verify()
})

  return (
    <div>Loading....</div>
  )
}

export default EmailVerification