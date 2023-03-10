import React from "react";
import "./Footer.scss"
import Logo from "../../static/figure/logo.png"

const Footer = () => {
  return (
    <footer>
      {/* <img src={Logo} alt=""/> */}
      <span>
        Welcome to my website&#10084;  
      </span>
      <span>
        &copy;<b>Changwen Li</b>: arthurlicw@gmail.com
      </span>
    </footer>
  );
};

export default Footer