import React from 'react'
import "../styles/navbar.css"
import NavbarButton from './NavbarButton'
import LogoButton from './LogoButton'
import AppLauncher from './AppLauncher'
import CreateButton from './CreateButton'

const Navbar = () => {
  return (
    <div className='navbar'>
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
  )
}

export default Navbar