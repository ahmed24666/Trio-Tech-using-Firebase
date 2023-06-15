import React from 'react'
import { useMyContext } from '../../context/MyContext'
import './homeSec.scss'
const HomeSec = ({margin,p,h1,img,dir}) => {
    const { lang } = useMyContext()
    return (
        <div className='HomeSec' style={{marginTop:margin,direction:dir}}>
            <div className="left" style={lang==='ar'?{direction:'ltr'}:{direction:'rtl'}}>
                <h1>{h1}</h1>
                <p>{p}</p>
                {/* <div className="button">
                    Start Now
                </div> */}
            </div>
            <div className="right">
                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeSec
