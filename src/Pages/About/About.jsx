import React from 'react'
import { useMyContext } from '../../context/MyContext'
import HomeSec from './../../Component/HomeSec/HomeSec'
const About = () => {
    const { t } = useMyContext()

    return (
        <div className='About'>
            <HomeSec margin='130px' dir='ltr' h1={t("about.1")} p={t("about.2")} img='/troi/Team work-amico.png' />
        </div>
    )
}

export default About
