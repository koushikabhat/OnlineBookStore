import React from 'react'
import myimage from './bg.jpg'
import './bgstyle.css'

const Background = () => {
  return (
    <div className='b-g'>
      <img className='bgimage' src={myimage} alt="bgimage" />
    </div>
  )
}

export default Background
