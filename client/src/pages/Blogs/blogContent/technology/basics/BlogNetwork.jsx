import React from "react";
import NavBar from "../../../../../components/NavBar/NavBar";
import Footer from "../../../../../components/Footer/Footer";
import Comments from "../../../../../components/Comments/Comments";
import "../../BlogContent.scss"
import MdDisplayer from "../../../../../components/MdDisplayer/MdDisplayer";
import BlogMdFile from "../../../../../static/blogFiles/basics/network.md";

const BlogContent = () => {
  return (
    <div>
      <NavBar/>
      <div className="blog-content-container">
        <MdDisplayer fileName={BlogMdFile}/>
        <Comments 
          postname={"Network"} 
          commentType={"Comments: "}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default BlogContent