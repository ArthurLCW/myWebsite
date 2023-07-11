import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import "./NavBar.scss"
import Logo from "../../static/figure/logo.png";
import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';

const NavBar = () => {
  const [curUser, setCurUser] = useState("Anonymous");
  const [loginState, setLoginState] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const node = useRef();

  const handleClickOutside = e => {
    // if (node.current.contains(e.target)) {
    //   return;
    // }
    setMenuVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // console.log('menu visible: ', menuVisible);
  };

  const isMobile = useMediaQuery({
    query: '(max-device-width: 500px)'
  });
  // console.log('isMobile: ', isMobile)

	return (
		<div className="navbar" ref={node}>
      {isMobile && (
        <SvgIcon component={ListIcon} style={{color:'white',fontSize: 60}} onClick={toggleMenu}/>
      )}
      {menuVisible && (
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <Link className="navbar__menu-link" to="/">
              Home
            </Link>
          </li>

          <li className="navbar__menu-item">
            <Link className="navbar__menu-link" to="/aboutme">
              About Me
            </Link>
          </li>

          <li className="navbar__menu-item">
            <Link className="navbar__menu-link" to="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
      )}
      
      <div className="logo">
          <Link to="/">
            <img src={Logo}/>
          </Link>
          {!isMobile && (
            <span>
              Changwen Li's Website
            </span>
          )}
          
			</div>

      {!isMobile && (
        <div className="links">
          <Link className="link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="link" to="/aboutme">
            <h3>About me</h3>
          </Link>
          <Link className="link" to="/blogs">
            <h3>Blogs</h3>
          </Link>
          <Link className="link" to="#">
            <h3>Feedback</h3>
          </Link>
          
          <span>{curUser}</span>
          {loginState ? 
            <span>logout</span> : <span>login</span>
          }

          {!loginState && <SvgIcon component={AccountCircleIcon}/>}
          
          {/* <span className="write">
            <Link classname="link" to="/write">Write</Link>
          </span> */}

        </div>
      )}
			
    </div>
	)
}

export default NavBar