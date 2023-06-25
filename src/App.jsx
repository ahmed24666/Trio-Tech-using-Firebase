import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProgressBar from 'react-progressbar-on-scroll'
import Home from './Pages/Home/Home'
import Nav from './Component/Nav/Nav';
import AnimatedCursor from "react-animated-cursor"
import './app.scss'
import About from "./Pages/About/About";
import ScrollToTop from './Component/ScrollToTop'
import Contact from "./Pages/Contact/Contact";
import Plans from "./Pages/Plans/Plans";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Product from "./Pages/Product/Product";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import Loader from "./Component/Loader/Loader";
import Footer from "./Component/Footer/Footer";
import { ImWhatsapp } from 'react-icons/im';
import { useMyContext } from "./context/MyContext";

function App() {

  const LayOut = () => {
    const { lang} = useMyContext()

    const { pathname }=useLocation()
    const [load, setload] = useState(true)
    useEffect(() => {
      setload(true)
      setTimeout(() => {
        setload(false)
      }, 1200);
    }, [pathname])
    return (
      <div className="app">
        {load?(<Loader/>):(
          <>
          <ScrollToTop/>
          <ProgressBar
            color="#D39312"
            height={5}
            direction="right"
            position="top"
            gradient={true}
            gradientColor="black"
          />
          {/* <AnimatedCursor
            innerSize={10}
            outerSize={30}
            color='0, 0, 0'
            // outerAlpha={0.2}
            innerScale={1.5}
            outerScale={3}
            clickables={[
              'a',
              'button',
              '.button',
              '.lang',
              '.social',
            ]}
          /> */}
          <Nav />
          <div className="whatapp" style={lang==='en'?{bottom:'30px',right:'30px'}:{bottom:'30px',left:'30px'}}>
            <a href="https://wa.me/+201004993015" target="_blank" rel="noreferrer">
              <ImWhatsapp/>
            </a>
          </div>
          <Outlet />
          <Footer/>
        </>
        )}
        
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/loader",
          element: <Loader/>,
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/plans",
          element: <Plans/>
        },
        {
          path: "/portfolio",
          element: <Portfolio/>
        },
        {
          path: "/portfolio/:Id",
          element: <Product/>
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
