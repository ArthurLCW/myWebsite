import React, {useEffect} from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import CuhkszLogo from "../../static/figure/cuhksz_logo.png"
import UnimelbLogo from "../../static/figure/unimelb_logo.png"
import Resume from "../../static/李昌文个人简历_2021_12.pdf"
import Violin from "../../static/figure/violin.png"
import JSM from "../../static/figure/jsm.png"
import Bg from "../../static/figure/aboutmeBg.png"
import Wobble from 'react-reveal/Wobble';
import Plx from "react-plx";
import { SvgIcon } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';



import "./AboutMe.scss"

const AboutMe = () => {
  useEffect(() => {
    document.title = 'About Me';
  }, []);

  const browserHeight = window.innerHeight;
  const webpageHeight = document.body.scrollHeight;
  console.log("height of browser: ", browserHeight);
  console.log("height of webpage: ", webpageHeight);
  const startPosition = 0.1*browserHeight;
  const endPosition = webpageHeight - 0.1*browserHeight;
  
  const parallaxData0 = [
    {
      start: 0,
      end: (browserHeight),
      properties: [
        {
          startValue: 0,
          endValue: -500,
          property: 'translateY',
        },
      ],
    },
  ];

  return (
    <div>
      <NavBar/>
      <div className="aboutme-container">
        <div className="block">
          <div className="blockWord">
            <h3>My profession: </h3>
            <ul>
              <li key={'education'}>
                <h4>My Education:</h4>
                <ul>
                  <li key={'bachelor'}>
                    <b>Bachelor in Computer Science and Engineering: </b>
                    <p>The Chinese University of Hong Kong, Shenzhen</p>
                  </li>

                  <li key={'master'}>
                    <b>Master of Computer Science: </b>
                    <p>The University of Melbourne</p>
                  </li>
                </ul>
              </li>

              <li key={'technologies'}>
                <h4>My Technologies:</h4>
                <ul>
                  <li key={'front-end'}>
                    <b>Frontend Development: </b>
                    <p>JavaScript, HTML, CSS, React, Android</p>
                  </li>

                  <li key={'back-end'}>
                    <b>Backend Development: </b>
                    <p>Node.js, Express.js, Flask, MySql, PostgreSql, CouchDB, Spark</p>
                  </li>

                  <li key={'ops'}>
                    <b>Operation: </b>
                    <p>Docker, Docker Swarm, Ansible</p>
                  </li>
                </ul>
              </li>

              <li key={'experience'}>
                <h4>My Experience: </h4>
                <ul>
                  <li key={'intern'}>
                    <h4>Internship: </h4>
                    <ul>
                      <li>Test and Development Engineer in <b>Tencent</b></li>
                      <li>Frontend Developer in <b>MelMoxue</b></li>
                    </ul>
                  </li>

                  <li key={'Research'}>
                    <h4>Research: </h4>
                      <ul>
                        <li>Weather Forecast Based on Deep Learning, supervised by Prof Xiaoguang Han</li>
                      </ul>
                  </li>

                    <li key={'projects'}>
                      <h4>Projects: </h4>
                      <ul>
                        <li>Personal Website</li>
                        <li>Tweeter and Mastodon Data Analysis</li>
                        <li>Melbourne H1 Hopper (Android Game)</li>
                        <li>Shared Whiteboard</li>
                      </ul>
                    </li>
                </ul>
                
              </li>
            </ul>
            <a href={Resume} download>My Resume</a>
            <br/>
          </div>

          <div className="blockPhoto">
            <Wobble>
              <img src={CuhkszLogo} style={{width:"50%", height:"50%"}}/>
              <img src={UnimelbLogo} style={{width:"50%", height:"50%"}} />
            </Wobble>
          </div>
        </div>

        <div className="block" style={{textAlign:"justify"}}>
          <div className="blockWord">
            <h3>My hobbies: </h3>
            <h4>Classic Music: </h4>
            <p>I like classic music. I passed ABRSM grade 8 &#40;the highest level for amateurs&#41; violin test with distinction &#40;highest honor degree&#41;. I was a violin player in CUHKSZ Orchestra.</p>
            <p>My favourite classic music is Tchaikovsky Violin Concerto in D major.</p>
            <br/>
              
            <h4>Football: </h4>
            <p>
              I am a fan of Jose Mourinho. Yes, I am a Mourinista! 
              I hope AS Roma can triumph in the Champions League. Forza Roma!!!
            </p>
          </div>

          <div className="blockPhoto">
            <Wobble>
              <img src={Violin} style={{width:"50%", height:"50%"}}/>
              <img src={JSM} style={{width:"50%", height:"50%"}}/>
            </Wobble>
          </div>
        </div>
      </div>
      <Footer/>

      <Plx parallaxData={parallaxData0} 
        style={{
          zIndex: -1000,
          color:'wheat', 
          position:'fixed',
          left: 0,
          top: 0
        }}
      >
        <img src={Bg} alt="bg"/>
      </Plx>
    </div>
  )
}


export default AboutMe
