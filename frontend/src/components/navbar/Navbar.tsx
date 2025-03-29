import React from 'react'
import "../../styles/navbar.css"
import NavbarButton from './NavbarButton'
import LogoButton from './LogoButton'
import AppLauncher from './AppLauncher'
import CreateButton from './CreateButton'
import SearchBar from './SearchBar'
import ProfileIcon from './ProfileIcon'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
          <AppLauncher />
          <LogoButton />
          <NavbarButton title='Your work'/>
          <NavbarButton title='Projects'/>
          <NavbarButton title='Filters'/>
          <NavbarButton title='Dashboards'/>
          <NavbarButton title='Teams'/>
          <NavbarButton title='Apps'/>
          <CreateButton />
        </div>

        <div className='navbar-right'>
          <SearchBar />
          <button className='notifications-icon'>
            <i className="fas fa-bell"></i>
          </button>
          <button className='question-button'>
            <i className="fas fa-question-circle"></i>
          </button>
          <button className='settings-button'>
            <i className="fas fa-cog"></i>
          </button>

          <ProfileIcon />
        </div>

    </div>
  )
}

export default Navbar