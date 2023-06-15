import React from 'react'
import './Portfolio.scss'
import products from './../../Component/Products'
import { Link } from 'react-router-dom'
const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div className="head">
                <h1>Our Previous Work</h1>
            </div>
            <div className="container">
                {products.map((item) => {
                    return (
                        <Link to={`/portfolio/${item.id}`}>
                            <div className='project' key={item.id}>
                                <div className="image">
                                    <img src={item.img} alt="" />
                                </div>
                                <h2>{item.name}</h2>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Portfolio
