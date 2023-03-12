import React from "react";
import BlogCat from "../../components/BlogCat/BlogCat";
import "./Blogs.scss"

const Blogs = () => {
  return (
    <div>
      {/* <h1>Hello World. </h1> */}
      <BlogCat catName="Technology" catContent={[{"name":"Website deployment procedures", "url":"/blogs/technology/deployment"}]}/>
      <BlogCat catName="Music" catContent={[{"name":"Sibelius Violin Concerto", "url":"/blogs/music/sibelius"}]}/>
      <BlogCat catName="Others" catContent={[{"name":"Victoria Pride", "url":"/blogs/others/vicpride"}]}/>

    </div>
  )
}

export default Blogs