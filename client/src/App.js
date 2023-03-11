import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./style.scss"

const Layout = () => {
  return (
    <div className="root">
      <div className="main">
        <NavBar/>
        <div className="content">
          <Outlet/>
        </div>
      </div>
      
      <Footer/>
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
      
    ]
  },
  // {
  //   path: "/register",
  //   element: <Register/>,
  // },
  // {
  //   path: "/login",
  //   element: <Login/>,
  // },
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
