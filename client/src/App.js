import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import AboutMe from "./pages/AboutMe/AboutMe";
import Blogs from "./pages/Blogs/Blogs";
import Sibelius from "./pages/Blogs/blogContent/music/Sibelius/Sibelius";
import VicPride from "./pages/Blogs/blogContent/others/vicpride/VicPride";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import BlogReact from "./pages/Blogs/blogContent/technology/frontend/BlogReact";
import BlogReactParallax from "./pages/Blogs/blogContent/technology/frontend/BlogReactParallax";
import BlogJavaScript from "./pages/Blogs/blogContent/technology/frontend/BlogJavaScript";
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
        path:"*",
        element:<NotFound/>
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
        path:"/blogs/technology/frontend",
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
        path:"/blogs/technology/frontend/react",
        element:<BlogReact/>
      },
      {
        path:"/blogs/technology/frontend/react-parallax",
        element:<BlogReactParallax/>
      },
      {
        path:"/blogs/technology/frontend/javascript",
        element:<BlogJavaScript/>
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
