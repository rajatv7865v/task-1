import React from 'react'
import './NavTop.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {CiSettings} from 'react-icons/ci'
import {AiFillAppstore} from 'react-icons/ai'
import {AiOutlineBell} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineWatchLater} from 'react-icons/md'
import {RiArrowDropDownLine} from 'react-icons/ri'

const NavTop = () => {
  return (
    <div>
      <div className='container'>
        <div className='child-container'>
            
        </div>
        <div className='child-container middle'>
           <div className='inputSection'>
           <input type="search" placeholder='Search' />
            <AiOutlineSearch/>
           </div>
            <div className="iconSection">
            <CiSettings size={20}/>
           <AiFillAppstore size={20}/>
            </div>
        </div>
        <div className='child-container last'>
            
            <div className='bell'>
               <AiOutlineBell/>
               <span>324</span>
            </div> 
            <div className='profile'>
              <CgProfile/>
              <span>Role: Super Admin</span>
              <RiArrowDropDownLine size={30}/>
            </div>
            <div className='watch'>
               <MdOutlineWatchLater size={20}/>
               <span>Away</span>
               <RiArrowDropDownLine size={30}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavTop
