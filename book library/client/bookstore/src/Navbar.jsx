import React from 'react'
import './Navbarstyle.css'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            
            <ul>
                <div className='logo-div'>
                    <img className='logo' src={logo} alt="logo" />
                </div>
                <li>Home</li>
                <li>Buy</li>
                <li>about us</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
