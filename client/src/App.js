import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import "./style.scss";

// import Home from "./pages/Home/Home";
// import NotFound from "./pages/NotFound/NotFound";
// import AboutMe from "./pages/AboutMe/AboutMe";
// import Blogs from "./pages/Blogs/Blogs";
// import Sibelius from "./pages/Blogs/blogContent/music/Sibelius/Sibelius";
// import VicPride from "./pages/Blogs/blogContent/others/vicpride/VicPride";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import BlogReact from "./pages/Blogs/blogContent/technology/frontend/BlogReact";
// import BlogReactParallax from "./pages/Blogs/blogContent/technology/frontend/BlogReactParallax";
// import BlogJavaScript from "./pages/Blogs/blogContent/technology/frontend/BlogJavaScript";

const Home = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const AboutMe = lazy(() => import("./pages/AboutMe/AboutMe"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const Sibelius = lazy(() =>
  import("./pages/Blogs/blogContent/music/Sibelius/Sibelius")
);
const VicPride = lazy(() =>
  import("./pages/Blogs/blogContent/others/vicpride/VicPride")
);
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const BlogReact = lazy(() =>
  import("./pages/Blogs/blogContent/technology/frontend/BlogReact")
);
const BlogCSS = lazy(() =>
  import("./pages/Blogs/blogContent/technology/frontend/BlogCSS")
);
const BlogJavaScript = lazy(() =>
  import("./pages/Blogs/blogContent/technology/frontend/BlogJavaScript")
);
const BlogTypeScript = lazy(() =>
  import("./pages/Blogs/blogContent/technology/frontend/BlogTypeScript")
);
const BlogFrontEndProgramming = lazy(() =>
  import(
    "./pages/Blogs/blogContent/technology/frontend/BlogFrontEndProgramming"
  )
);
const BlogNetwork = lazy(() =>
  import("./pages/Blogs/blogContent/technology/basics/BlogNetwork")
);
const BlogAlgorithm = lazy(() =>
  import("./pages/Blogs/blogContent/technology/basics/BlogAlgorithm")
);
const BlogProgramming = lazy(() =>
  import("./pages/Blogs/blogContent/technology/basics/BlogProgramming")
);
const BlogOS = lazy(() =>
  import("./pages/Blogs/blogContent/technology/basics/BlogOS")
);
const BlogDatabase = lazy(() =>
  import("./pages/Blogs/blogContent/technology/basics/BlogDatabase")
);
const BlogTesting = lazy(() =>
  import("./pages/Blogs/blogContent/technology/testing/BlogTesting")
);

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

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
      {
        path: "/aboutme",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutMe />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/frontend",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/testing",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/music",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/others",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },

      {
        path: "/blogs/technology/frontend/react",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogReact />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/frontend/javascript",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogJavaScript />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/frontend/typescript",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogTypeScript />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/frontend/css",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogCSS />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/frontend/front-end-programming",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogFrontEndProgramming />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/basics/network",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogNetwork />
          </Suspense>
        ),
      },

      {
        path: "/blogs/technology/basics/algorithm",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogAlgorithm />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/basics/programming",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogProgramming />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/basics/OS",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogOS />
          </Suspense>
        ),
      },
      {
        path: "/blogs/technology/basics/database",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogDatabase />
          </Suspense>
        ),
      },

      {
        path: "/blogs/technology/testing/testing",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogTesting />
          </Suspense>
        ),
      },

      {
        path: "/blogs/music/sibelius",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Sibelius />
          </Suspense>
        ),
      },
      {
        path: "/blogs/others/vicpride",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <VicPride />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        ),
      },
    ],
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
