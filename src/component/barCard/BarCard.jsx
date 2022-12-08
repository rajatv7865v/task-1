import React from 'react'
import './BarCard.css'

const BarCard = (props) => {
  const {name,number,time}=props.items
  return (
    <div className='barContainer'>
      <div className='barChildContainer'>
        <span>{name}</span>
        <span className='NUmericBar'>{number}</span>
      </div>
      <div className='LeftBar'>
         <span>{time}</span>
      </div>
    </div>
  )
}

export default BarCard
