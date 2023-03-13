import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./CommentInput.scss"
import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const CommentInput = ({blogName, commentType}) => {
  const [post, setPost] = useState({
    username: "Anonymous",
    postname: blogName,
    comment: "",
    time: "2023-03-14 02:05:11",
  });
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("set post",post);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    var comment = document.getElementById("comment").value;
    if (comment.length==0){
      alert("Your comment is EMPTY.");
      return null;
    }

    try {
      var myDate = new Date();
      var mytime=myDate.toLocaleString(); 
      mytime = mytime.trim();
      mytime = mytime.replace(/,/g, "");
      console.log("cur time:",mytime);
      setPost((prev) => ({ ...prev, ["time"]: mytime }));
      console.log("try: ", post);
      await axios.post("http://localhost:8800/api/comment", post);
      // await axios.post("https://changwenli.com:8801/books", book);
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