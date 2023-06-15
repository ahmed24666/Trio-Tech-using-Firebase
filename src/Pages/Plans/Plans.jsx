import React from 'react'
import './plans.scss'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext'

const Plans = () => {
    const { t , lang} = useMyContext()
    return (
        <div className='Plans'>
            <div className="first">
                <div className="image">
                    <img src="/troi/Pricing plans-rafiki.png" alt="" />
                </div>
                <a className="button" href='#ppCon'>
                {t('start')}
                </a>
            </div>
            <div id="ppCon">
               <div className="itemCon">
                   <div className="item">
                       <h2 style={lang==='en'?{color:'#804a00',fontSize:'30px',fontWeight:'bolder',letterSpacing:'0'}:{color:'#804a00'}}>{t('bronze.1')}</h2>
                       {/* <h1> $250</h1> */}
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}}>{t('bronze.2')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}}>{t('bronze.3')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}}>{t('bronze.4')}</p>
                       <div className="view">
                           <Link to='/contact'>
                            <h5 style={lang==='en'?{fontSize:'18px',letterSpacing:'1px'}:{fontSize:'14px'}}>{t('contact')}</h5>
                           </Link>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
               <div className="itemCon2">
               <div className="item item2">
                       <h2 style={lang==='en'?{color:'#D39312',fontSize:'30px',fontWeight:'bolder',letterSpacing:'0'}:{color:'#D39312'}}>{t('gold.1')}</h2>
                       {/* <h1> $400</h1> */}
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}} >{t('gold.2')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}} >{t('gold.3')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}} >{t('gold.4')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}} >{t('gold.5')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}} >{t('gold.6')}</p>
                       <div className="view">
                           <Link to='/contact'>
                            <h5 style={lang==='en'?{fontSize:'18px',letterSpacing:'1px'}:{fontSize:'14px'}}>{t('contact')}</h5>
                           </Link>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
               <div className="itemCon itemCon3">
               <div className="item">
                       <h2 style={lang==='en'?{color:'#71706e',fontSize:'30px',fontWeight:'bolder',letterSpacing:'0'}:{color:'#71706e'}}>{t('silver.1')}</h2>
                       {/* <h1> $300</h1> */}
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}}>{t('silver.2')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}}>{t('silver.3')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}}>{t('silver.4')}</p>
                       <p style={lang==='en'?{fontSize:'20px'}:{fontSize:'16px'}}>{t('silver.5')}</p>
                       <div className="view">
                           <Link to='/contact'>
                            <h5 style={lang==='en'?{fontSize:'18px',letterSpacing:'1px'}:{fontSize:'14px'}}>{t('contact')}</h5>
                           </Link>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Plans
