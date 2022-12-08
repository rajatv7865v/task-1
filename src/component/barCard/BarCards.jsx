import React from 'react'
import BarCard from './BarCard'

const BarCards = () => {
  const applications=[
    {
      name:'APPLICATIONS',
      number:52,
      time:'6M'
    },
    {
      name:'STARTED FILLING',
      number:52,
      time:'1M'
    },
    {
      name:'SUBMITTED',
      number:52,
      time:'6M'
    },
    {
      name:'RECEIVED',
      number:52,
      time:'1W'
    },
    {
      name:'i20 RECIEVED',
      number:52,
      time:'1M'
    },
    {
      name:'PENDING',
      number:52,
      time:'1M'
    },
    {
      name:'PENDING AT AGENT',
      number:52,
      time:'1M'
    },
    {
      name:'PENDING AT ARKSOFT',
      number:52,
      time:'1M'
    }

  ]
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
      {
        applications.map((items,id)=>{
          return <BarCard items={items} key={id}/>
        })
      }
     

    </div>
  )
}

export default BarCards
