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
function App() {
  const LayOut = () => {
    return (
      <div className="app">
        <>
          <ScrollToTop/>
          <ProgressBar
            color="#D39312"
            height={3}
            direction="right"
            position="top"
            gradient={true}
            gradientColor="black"
          />
          <AnimatedCursor
            innerSize={10}
            outerSize={30}
            color='0, 0, 0'
            outerAlpha={0.2}
            innerScale={1.5}
            outerScale={3}
            clickables={[
              'a',
              'button',
              '.button',
              '.lang',
              '.social',
            ]}
          />
          <Nav />
          <Outlet />
        </>
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
