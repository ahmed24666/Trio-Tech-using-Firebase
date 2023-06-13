import React from 'react'
import './homeSec.scss'
const HomeSec = ({margin,p,h1,img,dir}) => {
    return (
        <div className='HomeSec' style={{marginTop:margin,direction:dir}}>
            <div className="left" style={{direction:'ltr'}}>
                <h1>{h1}</h1>
                <p>{p}</p>
                <div className="button">
                    Start Now
                </div>
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
