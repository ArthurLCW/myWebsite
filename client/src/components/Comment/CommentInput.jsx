import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CommentInput.scss"
import Vditor from "vditor";
import "vditor/dist/index.css";


import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';


const CommentInput = ({blogName, commentType}) => {
  let url = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_IP+":"+process.env.REACT_APP_BACKEND_PORT;
  const [username, setUsername] = useState('Visitor');
  const [vd, setVd] = useState();

  useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: '30vh',
      after: () => {
        vditor.setValue("");
        setVd(vditor);
      }
    });
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    let comment = vd.getValue();
    console.log('Value:', JSON.stringify(comment)); // Use JSON.stringify to reveal whitespace characters
    console.log('Length:', comment.length);
    if (comment.length==1){
      alert("Your comment is EMPTY.");
      return null;
    }

    try {
      let post = {
        username: username,
        postname: blogName,
        comment: comment,
      }
      console.log("try: ", post);
      console.log("frontend connected to url: ", url+"/api/comment");
      await axios.post(url+"/api/comment", post);
      vd.setValue('')

    } catch (err) {
      console.log(err);
      alert('Error: '+err);
    }
  };


  return(
    <div className="comment-container">
      <br/>
      <h3>{commentType}</h3>
      <div id="vditor" className="vditor" />
      <div className="toolbar">
        <SvgIcon component={SendIcon} onClick={handleClick}/>
      </div>
    </div>
  )
}



export default CommentInput