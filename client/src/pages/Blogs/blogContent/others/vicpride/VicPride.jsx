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

const VicPride = () => {
  return (
    <div>
      <h1>VicPride</h1>
      <div className="audio">
        <caption style={{display:"inline"}}><i>My BGM for you:</i>&nbsp;&nbsp;&nbsp;</caption>
        <audio src={FailedAttempt} controls preload="auto" class="inline"></audio>
      </div>

      <p></p>
      
      <div className="figures">
        <p>This website aims to show some figures/videos taken by me when I visit Vic Proud.</p>
        <h2>Figures: </h2>
        <div className="figuresGrid">
          <img src={Fig1}/>
          <img src={Fig2}/>
          <img src={Fig3}/>
          <img src={Fig4}/>
          <img src={Fig5}/>
          <img src={Fig6}/>
        </div>
      </div>

      <div className="videos">
        <h2>Videos: </h2>
        <video src={Vid1} controls/>
        <video src={Vid2} controls/>
      </div>

    </div>
  )
}

export default VicPride