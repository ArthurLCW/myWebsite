import React, {useEffect} from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import BlogCat from "../../components/BlogCat/BlogCat";
import "./Blogs.scss"

const Blogs = () => {
  useEffect(() => {
    document.title = 'Blogs';
  }, []);

  return (
    <div>
      <NavBar/>
      <div className="blog-category-list">
        <BlogCat catName="Technology - Front End" 
          catContent={[
            {"name":"JavaScript", 
            "url":"/blogs/technology/frontend/javascript"},
            {"name":"React", 
            "url":"/blogs/technology/frontend/react"},
            {"name":"Spring Parallax", 
            "url":"/blogs/technology/frontend/react-parallax"}
          ]}
        />
        <BlogCat catName="Technology - Computer Basics" 
          catContent={[
            {"name":"Network", 
            "url":"/blogs/technology/basics/network"},
            {"name":"Data Structure and Algorithm", 
            "url":"/blogs/technology/basics/algorithm"},
            {"name":"Programming", 
            "url":"/blogs/technology/basics/programming"},
          ]}
        />
        <BlogCat catName="Music" catContent={[{"name":"Sibelius Violin Concerto", "url":"/blogs/music/sibelius"}]}/>
        <BlogCat catName="Others" catContent={[{"name":"Victoria Pride", "url":"/blogs/others/vicpride"}]}/>
      </div>
      <Footer/>

    </div>
  )
}

export default Blogs