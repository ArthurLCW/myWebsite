import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <NavBar/>
      <div className="main">
        <Outlet/>
      </div>
      <Footer/>
    </>
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
