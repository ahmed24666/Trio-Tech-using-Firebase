import './home.scss'
import React from 'react'
import HomeSec from '../../Component/HomeSec/HomeSec'
import { useMyContext } from '../../context/MyContext'

const Home = () => {
    const { t } = useMyContext()

    return (
        <div className='Home'>
            <HomeSec margin='130px' dir='ltr' h1={t('Home.1')} p={t('Home.11')} img='/troi/Mobile development-cuate.png'/>
            <HomeSec margin='-50px' dir='rtl' h1={t('Home.2')} p={t('Home.22')} img='/troi/Responsive-bro.png'/>
            <HomeSec margin='-50px' dir='ltr' h1={t('Home.3')} p={t('Home.33')} img='/troi/Dashboard-cuate.png'/>
            <HomeSec margin='-50px' dir='rtl' h1={t('Home.4')} p={t('Home.44')} img='/troi/Mobile wireframe-cuate.png'/>
        </div>
    )
}

export default Home
