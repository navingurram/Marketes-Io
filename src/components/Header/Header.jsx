import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Header.css'

const Header = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

  return (
    <header className='headercontainer'>
        <div className='logoimage'><h3><a href='/' style={{textDecoration: 'none', color: 'black'}}>Brisphere</a></h3></div>
       <div>
       <nav ref={navRef} className='navbar'>
            <a href='#discover'>Discover</a>
            <a href='#services'>Services</a>
            <a href='#footer'>About Us</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
       </div>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Header
