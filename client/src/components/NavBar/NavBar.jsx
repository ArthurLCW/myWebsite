import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.scss"
import Logo from "../../static/figure/logo.png"
import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const NavBar = () => {
  const [curUser, setCurUser] = useState("Anonymous")
  const [loginState, setLoginState] = useState(false)

	return (
		<div className="navbar">
      <div className="logo">
					<img src={Logo}/>
          <span>
            Changwen Li's Website
          </span>
          {/* <span>
            Website
          </span> */}
			</div>

      <div className="links">
        <Link className="link" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="link" to="/">
          <h3>About me</h3>
        </Link>
        <Link className="link" to="/">
          <h3>Blogs</h3>
        </Link>
        <Link className="link" to="/">
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
			
			

			
    </div>
	)
}

// const NavBar = () => {
// 	return (
// 		<div className="navbar">
// 			<div className="container">
// 				<div className="logo">
// 					<img src={Logo}/>
// 				</div>
// 				<div className="links">
// 					<Link className="link" to="/?cat=art">
// 						<h6>ART</h6>
// 					</Link>
// 					<Link className="link" to="/?cat=science">
// 						<h6>SCIENCE</h6>
// 					</Link>
// 					<Link className="link" to="/?cat=technology">
// 						<h6>TECHNOLOGY</h6>
// 					</Link>
// 					<Link className="link" to="/?cat=cinema">
// 						<h6>CINEMA</h6>
// 					</Link>
// 					<Link className="link" to="/?cat=design">
// 						<h6>DESIGN</h6>
// 					</Link>
// 					<Link className="link" to="/?cat=food">
// 						<h6>FOOD</h6>
// 					</Link>
// 					<span>John</span>
// 					<span>Logout</span>
// 					<span className="write">
// 						<Link classname="link" to="/write">Write</Link>
// 					</span>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export default NavBar