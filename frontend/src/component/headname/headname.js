import React from 'react'
import './style.css'

function HeadName({children}) {
  return (
    <div className='head'>
      {children}
    </div>
  )
}

export default HeadName
