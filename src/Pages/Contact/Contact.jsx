import React from 'react'
import './contact.scss'
import { LuMailbox } from 'react-icons/lu';
import { LuPhone } from 'react-icons/lu';
import { ImWhatsapp } from 'react-icons/im';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';


const Contact = () => {
    return (
        <div className='Contact'>
            <div className="left">
                <h1>Contact Us</h1>
                <div className="items">
                    <div className="item">
                        <div className="icon"><LuMailbox/></div>
                        info@trio.com
                    </div>
                    <div className="item">
                        <div className="icon"><LuPhone/></div>
                        01019326050
                    </div>
                    <div className="item">
                        <div className="icon"><ImWhatsapp/></div>
                        01004993015
                    </div>
                </div>
                <h1>Follow Us</h1>
                <div className="social"><FiFacebook/><BsInstagram/></div>
            </div>
            <div className="right">
                <div className="image">
                    <img src='/troi/Online world-pana.png' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
