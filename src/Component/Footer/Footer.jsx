import React from 'react'
import './footer.scss'
import { LuMailbox } from 'react-icons/lu';
import { LuPhone } from 'react-icons/lu';
import { ImWhatsapp } from 'react-icons/im';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="icon">
                <div className="insta-icon-link">
                    <a href="https://www.instagram.com/trio.com.bd/">
                        <BsInstagram />
                    </a>
                </div>
            </div>
            <div className="icon">
                <div className="facebook-icon-link">
                    <a href="https://www.facebook.com/trio.com.bd/">
                        <FiFacebook />
                    </a>
                </div>
            </div>
            <div className="item">
                <div className="icon-1"><LuMailbox /></div>
                info@trio.com
            </div>
            <div className="item">
                <div className="icon-1"><LuPhone /></div>
                <div className="phone-link">
                    <a href="tel:01019326050">01019326050</a>
                </div>
            </div>
            <div className="item">
                <div className="icon-1"><ImWhatsapp /></div>
                <div className="phone-link">
                    <a href="tel:+201004993015">01004993015</a>
                </div>
            </div>
        </div>
    )
}

export default Footer