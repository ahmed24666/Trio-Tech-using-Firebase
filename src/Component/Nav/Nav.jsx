import React, { useState } from 'react'
import './nav.scss'
import { NavLink } from 'react-router-dom';
import { MdLanguage } from 'react-icons/md';
import { useMyContext } from '../../context/MyContext';
const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)
    // const { t, i18n } = useTranslation();
    const { lang, setlang , t, i18n } = useMyContext()

    return (
        <div className='Nav' style={lang==='ar'?{direction:'ltr'}:{direction:'rtl'}}>
            <div className="menu-toggle" >
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"} onClick={() => setNavOpen(!navOpen)}>
                    <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                    <span
                        className={navOpen ? "lineBottom spin" : "lineBottom"}
                    ></span>
                </div>
                <div className="lang" style={navOpen?{display:'none'}:{display:'flex'}} onClick={()=>{setlang(lang==='en'?'ar':'en');i18n.changeLanguage(lang);}}>
                    <MdLanguage/> {lang}
                </div>
            </div>
            <div className="links">
                <NavLink to='/' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>{t('Nav.1')}</div>
                </NavLink>
                <NavLink to='/portfolio' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>{t('Nav.2')}</div>
                </NavLink>
                <NavLink to='/plans' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>{t('Nav.3')}</div>
                </NavLink>
                <NavLink to='/about' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>{t('Nav.4')}</div>
                </NavLink>
                <NavLink to='/contact' className='big'>
                    <div class={navOpen ? "heading hdc" : 'heading'}>{t('Nav.5')}</div>
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
                            {t('Nav.1')}
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/portfolio"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                            className='smallscreen'
                        >
                            {t('Nav.2')}
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
                            {t('Nav.3')}
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
                            {t('Nav.4')}
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
                            {t('Nav.5')}
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Nav
