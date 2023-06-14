import React, { useState } from 'react'
import './nav.scss'
import { NavLink } from 'react-router-dom';
import { MdLanguage } from 'react-icons/md';

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className='Nav' >
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                    <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                    <span
                        className={navOpen ? "lineBottom spin" : "lineBottom"}
                    ></span>
                </div>
                <div className="lang" style={navOpen?{display:'none'}:{display:'flex'}}>
                    <MdLanguage/> Ar
                </div>
            </div>
            <div className="links">
                <NavLink to='/' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>Home</div>
                </NavLink>
                <NavLink to='/' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>Portfolio</div>
                </NavLink>
                <NavLink to='/plans' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>Plans</div>
                </NavLink>
                <NavLink to='/about' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>About</div>
                </NavLink>
                <NavLink to='/contact' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>Contact</div>
                </NavLink>
            </div>
            <div className="right">
                <img src="/troi/logo.png" alt="" />
            </div>
            <div
                className="nav-overlay"
                style={{
                    transitionDelay: navOpen ? "0s" : "0s",
                    top: navOpen ? "0" : "-100%",
                    opacity: navOpen ? "1" : "0",

                }}
            >
                <ul className="nav-links">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.9s" : "0s",
                            }}
                            className='smallscreen'
                        >
                            Home
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                            className='smallscreen'
                        >
                            Portfolio
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/plans"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                            className='smallscreen'
                        >
                            Plans
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                            className='smallscreen'
                        >
                            About
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                            className='smallscreen'
                        >
                            Contact
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Nav
