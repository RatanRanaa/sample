import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
        <nav className='nav'>
            <div className='nav-abox'>
                <h2 style={{cursor:"pointer"}}>Varal<span className='nav-span'>uae</span></h2>
            </div>
            <div className='nav-bbox'>
                <ul className='nav-ul'>
                    <li><a style={{fontWeight:"bold"}} href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">About Us</a></li>
                    <li className='nav-li'><a className='nav-a' href="/">Start a Company</a></li>
                </ul>
            </div>
            <div className='nav-cbox'>
                <img onClick={()=>setToggle(!toggle)} style={{cursor:"pointer"}} src="/Assets/dungeon.png" alt="logo" />
                <div className={toggle ? 'list' : "items"}>
                    <h1 onClick={()=>setToggle(!toggle)}>Home</h1>
                    <h1 onClick={()=>setToggle(!toggle)}>Services</h1>
                    <h1 onClick={()=>setToggle(!toggle)}>Pricing</h1>
                    <h1 onClick={()=>setToggle(!toggle)}>About Us</h1>
                    <h1 onClick={()=>setToggle(!toggle)} style={{ color:"blue" }} className='btn'>Start a Company</h1>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar