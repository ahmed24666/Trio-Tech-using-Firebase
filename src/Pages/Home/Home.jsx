import './home.scss'
import React from 'react'
import HomeSec from '../../Component/HomeSec/HomeSec'

const Home = () => {
    return (
        <div className='Home' >
            <HomeSec margin='130px' dir='ltr' h1='Native Mobile App Development' p='Elevate your business with our expertly crafted native mobile applications for Android and IOS platforms. Our team of skilled developers ensures top-notch performance, seamless functionality, and a user-friendly experience.' img='/troi/Mobile development-cuate.png'/>
            <HomeSec margin='-50px' dir='rtl' h1='Responsive Web Design' p='Capture the attention of your audience with a responsive website that adapts flawlessly to any screen size. Our team specializes in creating visually stunning and user-friendly websites that provide an optimal browsing experience across all devices.' img='/troi/Responsive-bro.png'/>
            <HomeSec margin='-50px' dir='ltr' h1='Powerful Dashboard Solutions' p='Gain valuable insights and streamline your operations with our advanced dashboard solutions. Our customized dashboards offer real-time analytics, intuitive data visualization, and efficient tools to empower your decision-making processes.' img='/troi/Dashboard-cuate.png'/>
            <HomeSec margin='-50px' dir='rtl' h1='UI/UX Design and Optimization' p='Enhance user satisfaction and engagement with our exceptional UI/UX design services. We create visually appealing interfaces with intuitive navigation, ensuring a seamless and enjoyable experience for your customers. Let us optimize your systems usability and aesthetics.' img='/troi/Mobile wireframe-cuate.png'/>
        </div>
    )
}

export default Home
