import React from 'react'
import './plans.scss'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Plans = () => {
    return (
        <div className='Plans'>
            <div className="first">
                <div className="image">
                    <img src="/troi/Pricing plans-rafiki.png" alt="" />
                </div>
                <a className="button" href='#ppCon'>
                    Start Now
                </a>
            </div>
            <div id="ppCon">
               <div className="itemCon">
                   <div className="item">
                       <h2 style={{color:'#804a00'}}>Bronze plan</h2>
                       {/* <h1> $250</h1> */}
                       <p>• Basic design of the system</p>
                       <p>• 4-month technical support</p>
                       <p>• System's support for only one language </p>
                       <div className="view">
                           <Link to='/contact'>
                            <h5>Contact Us</h5>
                           </Link>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
               <div className="itemCon2">
               <div className="item item2">
                       <h2 style={{color:'#D39312'}}> Gold plan </h2>
                       {/* <h1> $400</h1> */}
                       <p>• Custom design of the system offers more flexibility and personalization options.</p>
                       <p>• 1 year technical support </p>
                       <p>• Provision of 2 free UI update after the deadline provides some flexibility for refining the user interface.</p>
                       <p>• System's support for both Arabic and English expands its potential user base.</p>
                       <p>• Support for light and dark mode adds an additional user preference option.</p>
                       <div className="view">
                           <Link to='/contact'>
                            <h5>Contact Us</h5>
                           </Link>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
               <div className="itemCon">
               <div className="item">
                       <h2 style={{color:'#71706e'}}>  Silver plan  </h2>
                       {/* <h1> $300</h1> */}
                       <p>• Custom design of the system offers more flexibility and personalization options.</p>
                       <p>• 8-month technical support </p>
                       <p>• Provision of 1 free UI update after the deadline provides some flexibility for refining the user interface.</p>
                       <p>• The system's support for both Arabic and English expands its potential user base.</p>
                       <div className="view">
                           <Link to='/contact'>
                            <h5>Contact Us</h5>
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
