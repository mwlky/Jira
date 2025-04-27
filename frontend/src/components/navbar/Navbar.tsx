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
          <button className='sidebar-right-button'>
            <img src="/images/notifications-icon.svg" alt="notifications" className='side-right-icon' />
          </button>
          <button className='sidebar-right-button'>
            <img src="/images/question-mark-icon.svg" alt="questions" className='side-right-icon' ></img>
          </button>
          <button className='sidebar-right-button'>
            <img src="/images/settings-icon.svg" alt="settings" className='side-right-icon' />
          </button>

          <ProfileIcon />
        </div>

    </div>
  )
}

export default Navbar