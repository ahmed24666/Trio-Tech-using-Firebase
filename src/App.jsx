import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProgressBar from 'react-progressbar-on-scroll'
import Home from './Pages/Home/Home'
import Nav from './Component/Nav/Nav';
import AnimatedCursor from "react-animated-cursor"
import './app.scss'

function App() {
  const LayOut = () => {
    return (
      <div className="app">
        <>
          <ProgressBar
            color="#8f0000"
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
