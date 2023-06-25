import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import products from './../../Component/Products'
import { Link } from 'react-router-dom'
import useGetData from '../../custom-hook/useGetData'
const Portfolio = () => {
    const { data: products } = useGetData('projects')
    const { dataLoading } = useGetData('projects')
    const [loading, setloading] = useState(true)
    useEffect(() => {
        if (!dataLoading) {
            setTimeout(() => {
                setloading(false)
            }, 1000);
        }
    }, [products])

    return (
        <div className='Portfolio'>
            <div className="head">
                <h1>Our Previous Work</h1>
            </div>
            <div className="container">
                {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 400px)' }}>

                    <div class="loader2"></div>
                </div> : products.map((item) => {
                    return (
                        <Link to={`/portfolio/${item.id}`}>
                            <div className='project' key={item.id}>
                                <div className="image">
                                    <img src={item.imgMain} alt="" />
                                </div>
                                <h2>{item.Name}</h2>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Portfolio
