import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import WechatIcon from "../../static/figure/wechat.png";
import { SvgIcon } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
const handleClickWeChat = async () => {
  try {
    // Use the Clipboard API to write text
    await navigator.clipboard.writeText("lcw18319987828");
    // Show a pop-up message
    alert('My WeChat ID "lcw18319987828" has been copied to clipboard!');
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
const handleClickEmail = async () => {
  try {
    // Use the Clipboard API to write text
    await navigator.clipboard.writeText("arthurlicwofficial@gmail.com");
    // Show a pop-up message
    alert(
      'My email address "arthurlicwofficial@gmail.com" has been copied to clipboard!'
    );
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div>
        <div>
          &copy;<b>Changwen Li</b>:{" "}
        </div>
        <div>arthurlicwofficial@gmail.com</div>
      </div>

      <div className="icons-container">
        <Link to="https://github.com/ArthurLCW">
          <SvgIcon
            component={GitHubIcon}
            style={{ color: "white", fontSize: 30 }}
          />
        </Link>

        <Link to="https://www.linkedin.com/in/changwen-li/">
          <SvgIcon
            component={LinkedInIcon}
            style={{ color: "white", fontSize: 30 }}
          />
        </Link>

        <Link to="https://www.instagram.com/cogito_ergo_sum_lcw/">
          <SvgIcon
            component={InstagramIcon}
            style={{ color: "white", fontSize: 30 }}
          />
        </Link>

        <img src={WechatIcon} onClick={handleClickWeChat} alt="" />
      </div> */}
      <a
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        粤ICP备2025371442号-1
      </a>
    </footer>
  );
};

export default Footer;
