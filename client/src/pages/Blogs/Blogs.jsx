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
        <BlogCat catName="Technology" catContent={[{"name":"Website deployment procedures", "url":"/blogs/technology/deployment"}]}/>
        <BlogCat catName="Music" catContent={[{"name":"Sibelius Violin Concerto", "url":"/blogs/music/sibelius"}]}/>
        <BlogCat catName="Others" catContent={[{"name":"Victoria Pride", "url":"/blogs/others/vicpride"}]}/>
      </div>
      <Footer/>

    </div>
  )
}

export default Blogs