import React, { useContext } from "react";
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
import { AuthContext } from "../../context/authContext";

import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CommentInput = ({commentType, setVd, handleClick}) => {

  useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: '50vh',
      width: '80vw',
      toolbar: [
        "emoji",
        "headings",
        "bold",
        "italic",
        "strike",
        "link",
        "|",,
        "list",
        "ordered-list",
        "check",
        "table",
        "outdent",
        "indent",
        "|",
        "quote",
        "line",
        "code",
        "inline-code",
        "insert-before",
        "insert-after", 
        "|",
        "undo",
        "redo",
        "|",
        "fullscreen",
        "edit-mode",
        "both",
        "preview",
        "export",
        "|",
        "help",
      ],
      preview:{
        hljs: {
          style: 'solarized-light'
        }
      },

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

const Comment = ({commentId, username, time, comment, curUser, setPosts, postname}) => {
  const date = new Date(time);
  const localDateString = date.toLocaleString();
  let url = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_IP+":"+process.env.REACT_APP_BACKEND_PORT;

  const handleDelete = async () => {
    try {
      console.log('Clicked')
      const post = {
        commentId: commentId,
        username: username,
      };

      await axios.delete(url+'/api/comment', { 
        params: post, 
        withCredentials: true 
      });

      // get updated comments
      const updateRes = await axios.get(url+`/api/comment/${encodeURIComponent(postname)}`);
      setPosts(updateRes.data);

      console.log('delete success, id: ', commentId);
    } catch (err) {
      console.log(err);
      alert('Error: '+err);
    }
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Comment"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this comment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <div className="comment">
        <h4>Posted by {username}, {localDateString}: </h4>
        <Markdown content={comment}/>
      </div>
      {(curUser?.username === username && curUser.username !== "Visitor") && (
        <span onClick={handleClickOpen} style={{display:"inline-flex"}}>
          <SvgIcon component={DeleteIcon}/> 
          <h4>Delete</h4>
          {/* <SvgIcon component={EditIcon}/> */}
        </span>
      )}
    </div>
  )
}

const CommentList = ({ comments, curUser, setPosts, postname}) => {
  return (
    <div>
      {comments.map((commentObj, index) => 
        <Comment 
          key={index} 
          commentId={commentObj.id} 
          username={commentObj.username} 
          time={commentObj.time} 
          comment={commentObj.comment} 
          curUser={curUser} 
          setPosts={setPosts} 
          postname={postname}
        />
      )}
    </div>
  );
};

const Comments = ({postname, commentType}) => {
  const {curUser, logout} = useContext(AuthContext);

  let url = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_IP+":"+process.env.REACT_APP_BACKEND_PORT;
  console.log('url: ', url);
  const [posts, setPosts] = useState([]);
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
        postname: postname,
        comment: comment,
      }
      console.log("try: ", post);
      console.log("frontend connected to url: ", url+"/api/comment");
      await axios.post(url+"/api/comment", post, { withCredentials: true });
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
      {posts.length > 0 
        && 
      <CommentList 
        comments={posts} 
        curUser={curUser}
        setPosts={setPosts}
        postname={postname}
      />}
      <CommentInput 
        commentType={commentType} 
        setVd={setVd} 
        handleClick={handleClick}
      />
    </div>
    
  )
}


export default Comments