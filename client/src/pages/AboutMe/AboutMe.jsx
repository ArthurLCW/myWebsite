import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import CuhkszLogo from "../../static/figure/cuhksz_logo.png"
import UnimelbLogo from "../../static/figure/unimelb_logo.png"
import Resume from "../../static/李昌文个人简历_2021_12.pdf"
import Violin from "../../static/figure/violin.png"
import JSM from "../../static/figure/jsm.png"

import "./AboutMe.scss"

const AboutMe = () => {
  return (
    <div>
      <NavBar/>
      <div className="profession">
        <div className="professionWord">
          <h3>About my profession: </h3>
          <p>
            I am now currently a Master of Computer Science at the University of Melbourne.
            I obtained a bachelor of engineering in Computer Science from the Chinese University of Hong Kong, Shenzhen.
            I have intered in Tencent as a test and development engineer. I have participated a research project regarding weather forecast based on video generation.
            I am familiar with multiple computer languages, including Java, C++, Python, JavaScript, HTML, CSS, MySql, PostgreSQL, etc. 
            I have experience in some popular technology, such as React, Node.js, Express.js, Nginx, Android, etc. 
          </p>
          <br/>
          <p>
            My estimated graduation time is in June, 2024. I hope to get a job as fullstack developer / Android developer / DevOps engineer in Australia/China.
          </p>
          <a href={Resume} download>My Resume</a>
          <br/>
        </div>

        <div className="professionPhoto">
          <img src={CuhkszLogo} style={{width:"50%", height:"50%"}}/>
          <img src={UnimelbLogo} style={{width:"50%", height:"50%"}} />
        </div>
      </div>

      <div className="life">
        <h3>My hobbies: </h3>
          <div className="row_life">
            <div className="word_life">
                <h4>Classic Music: </h4>
                <p>I like classic music. I passed ABRSM grade 8 &#40;the highest level for amateurs&#41; violin test with distinction &#40;highest honor degree&#41;. I was a violin player in CUHKSZ Orchestra.</p>
                <br/>
                <p>My favourite classic music is Tchaikovsky Violin Concerto in D major.</p>
            </div>

            <div className="photo_life">
              <img src={Violin} style={{width:"100%", height:"100%"}}/>
            </div>
            
            <div className="word_life">
              <h4>Football: </h4>
              <p>
                I am a fan of Jose Mourinho. Yes, I am a Mourinista! 
                I hope AS Roma can triumph in the Champions League. Forza Roma!!!
              </p>
            </div>

            <div className="photo_life">
              <img src={JSM} style={{width:"100%", height:"100%"}}/>
            </div>
          </div>

      </div>
    <Footer/>
    </div>
    
  )
}


export default AboutMe
