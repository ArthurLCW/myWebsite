import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./BlogCat.scss"
import { Avatar, Button, Icon, SvgIcon } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import NoteIcon from '@material-ui/icons/Note';

const BlogCat = ({catName, catContent}) => {
  const [expandState, setExpandState] = useState(false)


  const expandHandler = () => {
    setExpandState(!expandState);
    console.log("expand state: ", expandState)
  }

  const CatMain = (catContent) => {
    console.log("cat content0: ", catContent);
    console.log("cat content1: ", catContent.catContent);
    if (catContent.catContent.length==0){
      console.log("inside")
      return (
        <div className="catContent">
          <h4>There is no blog at present. </h4>
        </div>
      )
    };
    console.log("cat content2: ", catContent.catContent);
    return (
      catContent.catContent.map(content => (
        <div className="catContent">
          <SvgIcon component={NoteIcon}/>
          <Link className="link" to={content.url}>
            <h4>{content.name}</h4>
          </Link>
        </div>
      ))
    )
  }

	return (
    <div>
      <div className="catTitle">
        <SvgIcon component={expandState? 
          ArrowDropDownIcon:ArrowRightIcon} 
          onClick={expandHandler}/>     
        <h3>{catName}</h3> 
      </div>
      {expandState && <CatMain catContent={catContent}/>}
    </div>
	)
}



export default BlogCat