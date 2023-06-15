import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./CommentInput.scss"
import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


const CommentInput = ({blogName, commentType}) => {
  let url = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_IP+":"+process.env.REACT_APP_BACKEND_PORT;
  const [post, setPost] = useState({
    username: "Anonymous",
    postname: blogName,
    comment: "",
  });
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    var comment = document.getElementById("comment").value;
    if (comment.length==0){
      alert("Your comment is EMPTY.");
      return null;
    }

    try {
      console.log("try: ", post);
      // await axios.post("http://localhost:8800/api/comment", post); ///////////////////////////////
      // await axios.post("https://changwenli.com:8801/api/comment", post);
      console.log("frontend connected to url: ", url+"/api/comment");
      await axios.post(url+"/api/comment", post);
      // navigate("/");
      // document.getElementById("myTextarea").value = "";

    } catch (err) {
      console.log(err);
    }
  };


  return(
    <div>
      <br/>
      <h3>{commentType}</h3>
      <textarea id="comment" className="comment" rows={5} 
      onChange={handleChange} name="comment">
      </textarea>

      <div className="toolbar">
        <SvgIcon component={EmojiEmotionsIcon}/>
        <SvgIcon component={SendIcon} onClick={handleClick}/>
      </div>
    </div>
  )
}



export default CommentInput