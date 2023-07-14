import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Comments.scss"
import Vditor from "vditor";
import "vditor/dist/index.css";

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';


import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';


const CommentInput = ({postname, commentType, username, setVd, handleClick}) => {

  useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: '50vh',
      width: '80vw',
      after: () => {
        vditor.setValue("");
        setVd(vditor);
      }
    });
  }, []);

  return(
    <div>
      <br/>
      <h3>{commentType}</h3>
      <div id="vditor" className="vditor" />
      <div className="toolbar">
        <SvgIcon component={SendIcon} onClick={handleClick}/>
      </div>
    </div>
  )
}

const Markdown = ({ content }) => {
  return (
      <ReactMarkdown
          components={{
              code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                      <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                  ) : (
                      <code className={className} {...props}>
                          {children}
                      </code>
                  )
              }
          }}
          remarkPlugins={[remarkGfm]}
      >
          {content}
      </ReactMarkdown>
  )
}

const Comment = ({username, time, comment}) => {
  const date = new Date(time);
  const localDateString = date.toLocaleString();
  return (
    <div className="comment">
      <h4>Posted by {username}, {localDateString}: </h4>
      <Markdown content={comment}/>
    </div>
  )
}

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((commentObj, index) => 
        <Comment 
          key={index} 
          username={commentObj.username} 
          time={commentObj.time} 
          comment={commentObj.comment}
        />
      )}
    </div>
  );
};

const Comments = ({postname, commentType}) => {
  let url = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_IP+":"+process.env.REACT_APP_BACKEND_PORT;
  const markdownString = `
  # Header
  
  Some text.
  
  \`\`\`js
  const hello = 'Hello, world!';
  console.log(hello);
  \`\`\`
      `;
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('Visitor');
  const [vd, setVd] = useState(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url+`/api/comment/${encodeURIComponent(postname)}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = async () => {
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
        postname: postname,
        comment: comment,
      }
      console.log("try: ", post);
      console.log("frontend connected to url: ", url+"/api/comment");
      await axios.post(url+"/api/comment", post);
      vd.setValue('');

      const updateRes = await axios.get(url+`/api/comment/${encodeURIComponent(postname)}`);
      console.log('res: ', updateRes.data);
      console.log('res: ', updateRes.data[0].comment);
      setPosts(updateRes.data);
      
    } catch (err) {
      console.log(err);
      alert('Error: '+err);
    }
  };

  return(
    <div className="comment-container">
      {posts.length > 0 && <CommentList comments={posts}/>}
      <CommentInput 
        postname={postname} 
        commentType={commentType} 
        username = {username} 
        setVd={setVd} 
        handleClick={handleClick}
      />
    </div>
    
  )
}


export default Comments