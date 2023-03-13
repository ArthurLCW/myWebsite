import React from "react";
import CommentInput from "../../../../../components/Comment/CommentInput";
import "./Deployment.scss"


const Deployment = () => {
  return (
    <div>
      <h1>Website deployment procedures</h1>
      <h3>
        This page recorded all the problems I have met when I 
        use Nginx to deploy a full-stack HTTPS website on AWS EC2.
      </h3>
      <p>
        I will rebuild this page when with code block implemented by slate.js in the future.
      </p>

      <CommentInput blogName={"Website deployment procedures"} commentType={"Comments: "}/>

    </div>
  )
}

export default Deployment