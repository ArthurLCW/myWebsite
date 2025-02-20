import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import BlogCat from "../../components/BlogCat/BlogCat";
import "./Blogs.scss";

const Blogs = () => {
  useEffect(() => {
    document.title = "记录个人编程练习经验的网站";
  }, []);

  return (
    <div>
      <NavBar />
      <div className="blog-category-list">
        <BlogCat
          catName="前端"
          catContent={[
            {
              name: "JavaScript",
              url: "/blogs/technology/frontend/javascript",
            },
            // {
            //   name: "TypeScript",
            //   url: "/blogs/technology/frontend/typescript",
            // },
            { name: "React", url: "/blogs/technology/frontend/react" },
            { name: "CSS", url: "/blogs/technology/frontend/css" },
            {
              name: "Frond End Programming",
              url: "/blogs/technology/frontend/front-end-programming",
            },
          ]}
        />
        <BlogCat
          catName="计算机基础"
          catContent={[
            { name: "Network", url: "/blogs/technology/basics/network" },
            {
              name: "Data Structure and Algorithm",
              url: "/blogs/technology/basics/algorithm",
            },
            {
              name: "Programming",
              url: "/blogs/technology/basics/programming",
            },
            { name: "OS", url: "/blogs/technology/basics/OS" },
            { name: "Database", url: "/blogs/technology/basics/database" },
          ]}
        />
        <BlogCat
          catName="测试开发"
          catContent={[
            { name: "Testing", url: "/blogs/technology/testing/testing" },
          ]}
        />
        {/* <BlogCat
          catName="Music"
          catContent={[
            { name: "Sibelius Violin Concerto", url: "/blogs/music/sibelius" },
          ]}
        />
        <BlogCat
          catName="Others"
          catContent={[
            { name: "Victoria Pride", url: "/blogs/others/vicpride" },
          ]}
        /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
