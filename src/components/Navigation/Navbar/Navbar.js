import React, {useState} from 'react'

import './Navbar.css'
import Dropdown from '../Navbar/Dropdown/Dropdown'
import {Link} from 'react-router-dom'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }
        else(setDropdown(true))
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }
        else(setDropdown(false))
    }

    return (
        <nav className='navbar'>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <Link to='/' className='navbar-logo'>
                PCPlanet<i className="fas fa-memory" />
            </Link>
            <Link to='/cart' className='cart-icon' onClick={closeMobileMenu} >
                <i className='fas fa-shopping-cart' />
            </Link>
            <Link to='' className='user-icon' onClick={closeMobileMenu} >
                <i class="far fa-user"></i>
            </Link>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item' 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                
                <li className='nav-item action-links' >
                    <Link to='' className='nav-links' onClick={closeMobileMenu} >
                    <i class="fas fa-search"></i>
                    </Link>
                </li>
                <li className='nav-item action-links' >
                    <Link to='' className='nav-links' onClick={closeMobileMenu} >
                        <i class="far fa-user"></i>
                    </Link>
                </li>
                <li className='nav-item action-links' >
                    <Link to='/cart' className='nav-links' onClick={closeMobileMenu} >
                        <i className='fas fa-shopping-cart' />
                    </Link>
                </li>
                
                
            </ul>
            
        </nav>
    )
}

/*                
<Button/>
*/


export default Navbar