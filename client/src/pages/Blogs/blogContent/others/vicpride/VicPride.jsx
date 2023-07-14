import React from "react";
import "./VicPride.scss"
import FailedAttempt from "../../../../../static/music/failedAttempt.mp3"
import Fig1 from "../../../../../static/figure/vic_pride/fig1.jpg"
import Fig2 from "../../../../../static/figure/vic_pride/fig2.jpg"
import Fig3 from "../../../../../static/figure/vic_pride/fig3.jpg"
import Fig4 from "../../../../../static/figure/vic_pride/fig4.jpg"
import Fig5 from "../../../../../static/figure/vic_pride/fig5.jpg"
import Fig6 from "../../../../../static/figure/vic_pride/fig6.jpg"
import Vid1 from "../../../../../static/figure/vic_pride/vid1.mp4"
import Vid2 from "../../../../../static/figure/vic_pride/vid2.mp4"
import Comments from "../../../../../components/Comments/Comments";
import NavBar from "../../../../../components/NavBar/NavBar";
import Footer from "../../../../../components/Footer/Footer";
import "../../BlogContent.scss"

const VicPride = () => {
  return (
    <div>
      <NavBar/>
      <div className="blog-content-container">
        <div className="vicpride">
          <div className="greeting">
            <h1>VicPride</h1>
          </div>

          <div className="audio">
            <caption style={{display:"inline"}}><i>My BGM for you:</i>&nbsp;&nbsp;&nbsp;</caption>
            <audio style={{width:"50%"}} src={FailedAttempt} controls preload="auto" class="inline"></audio>
          </div>
          
          <div className="figures">
            <div className="figuresWord">
              <p>This website aims to show some figures/videos taken by me when I visit Vic Proud.</p>
              <h2>Figures: </h2>
            </div>
            
            <div className="figuresGrid">
              <div className="figure"><img src={Fig1}/></div>
              <div className="figure"><img src={Fig2}/></div>
              <div className="figure"><img src={Fig3}/></div>
              <div className="figure"><img src={Fig4}/></div>
              <div className="figure"><img src={Fig5}/></div>
              <div className="figure"><img src={Fig6}/></div>
            </div>
          </div>

          <div className="videos">
            <div className="videoWord">
              <h2>Videos: </h2>
            </div>

            <div className="videoContent">
              <video src={Vid1} controls/>
              <video src={Vid2} controls/>
            </div>
            
            
          </div>
        </div>
        <Comments
          postname={"Victoria Pride Parade"} 
          commentType={"Comments: "}
        />
      </div>
      <Footer/>
    </div>
    
  )
}

export default VicPride