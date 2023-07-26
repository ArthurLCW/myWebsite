import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./NotFound.scss"

const NotFound = () => {
  return (
    <div>
      <NavBar/>
      <div className="not-found-content">
        <h1>404 Not Found: The page you are looking for does NOT exist.</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound