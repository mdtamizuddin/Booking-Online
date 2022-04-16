import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Navbar.css'
import './Responsive.css'


import { Link, NavLink } from 'react-router-dom'
const navUrls = ["home", "about", "service", "teams", "projects", "blogs", "contact"]
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const navHandler = () => {
        if (navbar) {
            setNavbar(false)
        }
        else {
            setNavbar(true)
        }
    }
    return (
        <>

            <nav id="navbar_top" className="navbar">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <h1 className='logo-my'>Online Booking</h1>
                            <FontAwesomeIcon onClick={navHandler} icon={faBars} />
                        </div>
                        <ul className={navbar ? "show" : "dont-show"}>
                            {
                                navUrls.map(url => <li key={url}> <NavLink to={url} className='nav-link-p'>{url}</NavLink></li>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar