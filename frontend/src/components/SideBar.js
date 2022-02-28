import React from 'react'
import './SideBar.css'

const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="sidebar__top">
        
        <h5>FOLLOWED CHANNELS</h5>
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder='Search to Add Favourites' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar