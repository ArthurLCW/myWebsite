import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <div className="block">
        <h1 className="greeting_r">G'</h1>
        <h1 className="greeting_g"> day, </h1>
        <h1 className="greeting_b">mate!</h1>
        <h2>Welcome to Changwen Li's Website!</h2>
      </div>

      <div className="block">
        <article>
        <h3>
          Introduction to my website: 
        </h3>
        <br/>
          <p>
            The main purpose of this website is to enhance my webpage programming 
            skills and boost my resume. I would also make use of this website to 
            present some of my hobbies, thoughts, study records, etc. 
          </p>
          <br/>
          <p>
            You can find my self-introduction, blogs in this website. 
            You can create an account and log in if you are willing to do so.
            
            You are welcome to comment on my post and give me some feedback about this website. 
            If you have an account, then you may comment/feedback with your username. 
            Otherwise, the username of your comment/feedback will be marked as "anonymous". 
          </p>
        </article>
      </div>

      <div className="block">
        <h3>Technical details of my websites:</h3>
        <p style={{display:"inline"}}> Please refer to my </p> <a href="https://github.com/ArthurLCW/myWebsite">GitHub repo</a>
      </div>

    </div>
  )
}

export default Home