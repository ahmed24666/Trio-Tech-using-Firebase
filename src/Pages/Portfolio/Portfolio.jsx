import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import products from './../../Component/Products'
import { Link } from 'react-router-dom'
import useGetData from '../../custom-hook/useGetData'
import { useMyContext } from '../../context/MyContext'
const Portfolio = () => {
    const { data: products } = useGetData('projects')
    const { dataLoading } = useGetData('projects')
    const [loading, setloading] = useState(true)
    const { t, lang } = useMyContext()

    useEffect(() => {
        if (!dataLoading) {
            setTimeout(() => {
                setloading(false)
            }, 1000);
        }
    }, [products])

    return (
        <div className='Portfolio' style={lang === 'ar' ? { direction: 'ltr' } : { direction: 'rtl' }}>
            <div className="head">
                <h1>{t("previous.1")}</h1>
            </div>
            <div className={loading?"":"container"}>
                {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 400px)' }}>

                    <div class="loader2"></div>
                </div> 
                :
                 products.map((item) => {
                    return (
                        <div>
                            <Link to={`/portfolio/${item.id}`}>
                                <div className='project' key={item.id}>
                                    <div className="image">
                                        <img src={item.imgMain} alt="" />
                                    </div>
                                    <h2 style={{textAlign:'center'}}>{lang==='ar'?item.Name:item.arName}</h2>
                                </div>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Portfolio
