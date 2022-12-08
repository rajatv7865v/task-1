import React from 'react'
import Card from './Card'

const Cards = () => {
  const brancesData=[
    {
      name:'Ameerpet',
      person:18,
      application:410,
      leads:34,
      student:2,
      color:'blue'

    },
    {
      name:'Ameerpet',
      person:18,
      application:410,
      leads:34,
      student:2,
      color:'orange'
    },
    {
      name:'Ameerpet',
      person:18,
      application:410,
      leads:34,
      student:2,
      color:'red'
    }
  ]
  console.log(brancesData)
  return (
    <div style={{display:'flex',gap:'1rem',padding:'1rem'}}>
      {
        brancesData.map((item,id)=>{
         return <Card key={id} item={item}/>
        })
      }

    </div>
  )
}

export default Cards
