import React from 'react'
import './contact.scss'
import { LuMailbox } from 'react-icons/lu';
import { LuPhone } from 'react-icons/lu';
import { ImWhatsapp } from 'react-icons/im';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { useMyContext } from '../../context/MyContext';


const Contact = () => {
    const { t, lang } = useMyContext()

    return (
        <div className='Contact' style={lang === 'ar' ? { direction: 'ltr' } : { direction: 'rtl' }}>
            <div className="left">
                <h1>{t("contact")}</h1>
                <div className="items">
                    <div className="item">
                        <div className="icon"><LuMailbox /></div>
                        info@trio.com
                    </div>
                    <div className="item">
                        <div className="icon"><LuPhone /></div>
                        01019326050
                    </div>
                    <div className="item">
                        <div className="icon"><ImWhatsapp /></div>
                        01004993015
                    </div>
                </div>
                <h1>{t("follow")}</h1>
                <div className="social">
                    <a href="https://www.instagram.com/trio.com.bd/">
                        <BsInstagram />
                    </a>
                    <a href="https://www.facebook.com/trio.com.bd/">
                        <FiFacebook />
                    </a>
                </div>
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
