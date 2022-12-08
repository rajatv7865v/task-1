import React from 'react'
import BarCards from './barCard/BarCards'
import Branches from './branches/Branches'
import Cards from './cards/Cards'
import EmpCard from './empCard/EmpCard'
import Navbar from './navbar/Navbar'

const Home = () => {
  return (
    <div>
       <Navbar/> 
       <Branches/>
       <Cards/>
       <div>
        <h1 style={{padding:'2rem'}}>Applications</h1>
       </div>
       <BarCards/>
       <div>
        <h1 style={{padding:'2rem'}}>Inactive Employees</h1>
       </div>
       <EmpCard/>
    </div>
  )
}

export default Home
