import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe"
import Blogs from "./pages/Blogs/Blogs"
import Deployment from "./pages/Blogs/blogContent/technology/deployment/Deployment"
import Sibelius from "./pages/Blogs/blogContent/music/Sibelius/Sibelius"
import VicPride from "./pages/Blogs/blogContent/others/vicpride/VicPride"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./style.scss"

const Layout = () => {
  return (
    <div className="root">
      {/* <div className="main">
        <NavBar/>
        <div className="content">
          <Outlet/>
        </div>
      </div>
      
      <Footer/> */}
        
      <Outlet/>    
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/aboutme",
        element:<AboutMe/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/blogs/technology",
        element:<Blogs/>
      },
      {
        path:"/blogs/music",
        element:<Blogs/>
      },
      {
        path:"/blogs/others",
        element:<Blogs/>
      },

      {
        path:"/blogs/technology/deployment",
        element:<Deployment/>
      },
      {
        path:"/blogs/music/sibelius",
        element:<Sibelius/>
      },
      {
        path:"/blogs/others/vicpride",
        element:<VicPride/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },


    ]
  },
]);

function App() {
  return (
    // <div className="app">
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
