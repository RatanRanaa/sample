import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='nav'>
            <div className='nav-abox'>
                <h2>Varal<span className='nav-span'>uae</span></h2>
            </div>
            <div className='nav-bbox'>
                <ul className='nav-ul'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">About Us</a></li>
                    <li className='nav-li'><a className='nav-a' href="/">Start a Company</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar