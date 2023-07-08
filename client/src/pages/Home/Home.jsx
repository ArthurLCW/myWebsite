import React, {useRef, useState} from "react";
import Swing from 'react-reveal/Swing';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Plx from "react-plx";
import { Link } from "react-router-dom";
import "./Home.scss"

import { SvgIcon } from "@material-ui/core";
import MoonIcon from '@material-ui/icons/NightsStay';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudEmptyIcon from '@material-ui/icons/FilterDrama';
import FlightIcon from '@material-ui/icons/Flight';
import SunIcon from '@material-ui/icons/WbSunny';

const Home = () => {
  const browserHeight = window.innerHeight;
  const browserWidth = window.innerWidth;
  const startPos = 0.1 * browserHeight;
  const endPos = browserHeight + 0.9 * browserHeight;
  const length = startPos - endPos;

  const dataMoon = [
    {
      start: 0,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: -(browserHeight * 0.25 + 100),
          property: 'translateY',
        },
      ],
    },
  ];

  const dataStar0 = [
    {
      start: 1/8 * browserHeight,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: -(browserHeight * 0.25 + 25),
          property: 'translateY',
        },
      ],
    },
  ];

  const dataStar1 = [
    {
      start: 1/8 * browserHeight,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: -(1/8 * browserHeight + 50),
          property: 'translateY',
        },
      ],
    },
  ];

  const dataStar2 = [
    {
      start: 1/8 * browserHeight,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: -(3/8 * browserHeight + 50),
          property: 'translateY',
        },
      ],
    },
  ];

  const dataStar3 = [
    {
      start: 1/8 * browserHeight,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: -(browserHeight * 0.25 + 25),
          property: 'translateY',
        },
      ],
    },
  ];

  const dataCloud0 = [
    {
      start: 0,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: -(1/4*browserWidth + 50),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataCloud1 = [
    {
      start: 0,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: -(3/8*browserWidth + 100),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataCloud2 = [
    {
      start: 0,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: +(3/8*browserWidth + 100),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataCloud3 = [
    {
      start: 0,
      end: browserHeight * 0.5,
      properties: [
        {
          startValue: 0,
          endValue: +(1/4*browserWidth + 50),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataPlane = [
    {
      start: 0,
      end: browserHeight,
      properties: [
        {
          startValue: 0,
          endValue: -(browserWidth ),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataSun = [
    {
      start: browserHeight * 0.5,
      end: browserHeight,
      properties: [
        {
          startValue: 0,
          endValue: -(3/4*browserHeight),
          property: 'translateY',
        },
      ],
    },
  ];

  const dataCloud4 = [
    {
      start: browserHeight * 0.5,
      end: browserHeight,
      properties: [
        {
          startValue: 0,
          endValue: (1/4*browserWidth - 50),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataCloud5 = [
    {
      start: browserHeight * 0.5,
      end: browserHeight,
      properties: [
        {
          startValue: 0,
          endValue: (3/8*browserWidth - 100),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataCloud6 = [
    {
      start: browserHeight * 0.5,
      end: browserHeight,
      properties: [
        {
          startValue: 0,
          endValue: -(3/8*browserWidth),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataCloud7 = [
    {
      start: browserHeight * 0.5,
      end: browserHeight,
      properties: [
        {
          startValue: 0,
          endValue: -(1/4*browserWidth),
          property: 'translateX',
        },
      ],
    },
  ];

  const dataBg = [
    {
      start: 0,
      end: browserHeight,
      properties: [
        {
          startValue: '#000000',
          endValue: '#4FC3F7',
          property: 'backgroundColor',
        },
      ],
    },
  ];

  const dataScrollDown = [
    {
      start: 0,
      end: 1/2*browserHeight,
      properties: [
        {
          startValue: 0,
          endValue: -(1/2*browserHeight+25),
          property: 'translateY',
        },
      ],
    },
  ];


  const ref = useRef();
  return (
    <div>
      <NavBar/>
      <div style={{height: '180vh', width: '100%'}}>

      </div>
      <Footer/>

      <Plx parallaxData={dataMoon} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 1/2 * browserWidth - 50,
          top: 1/4 * browserHeight,
        }}
      >
        <SvgIcon component={MoonIcon} style={{fontSize: '100px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataStar0} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 1/4 * browserWidth -12.5,
          top: 1/4 * browserHeight,
        }}
      >
        <SvgIcon component={StarIcon} style={{fontSize: '25px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataStar1} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 3/8 * browserWidth -25,
          top: 1/8 * browserHeight,
        }}
      >
        <SvgIcon component={StarBorderIcon} style={{fontSize: '50px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataStar2} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 5/8 * browserWidth - 25,
          top: 3/8 * browserHeight,
        }}
      >
        <SvgIcon component={StarIcon} style={{fontSize: '50px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataStar3} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 3/4 * browserWidth - 12.5,
          top: 1/4 * browserHeight,
        }}
      >
        <SvgIcon component={StarBorderIcon} style={{fontSize: '25px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataCloud0} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 1/4 * browserWidth - 12.5 - 12.5,
          top: 1/4 * browserHeight - 12.5,
        }}
      >
        <SvgIcon component={CloudIcon} style={{fontSize: '50px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataCloud1} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 3/8 * browserWidth - 25 - 25,
          top: 1/8 * browserHeight - 25,
        }}
      >
        <SvgIcon component={CloudIcon} style={{fontSize: '100px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataCloud2} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 5/8 * browserWidth - 25 - 25,
          top: 3/8 * browserHeight - 25,
        }}
      >
        <SvgIcon component={CloudIcon} style={{fontSize: '100px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataCloud3} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 3/4 * browserWidth - 12.5 - 12.5,
          top: 1/4 * browserHeight - 12.5,
        }}
      >
        <SvgIcon component={CloudIcon} style={{fontSize: '50px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataPlane} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: browserWidth,
          top: 5/8 * browserHeight,
        }}
      >
        <div className="info-container">
          <SvgIcon component={FlightIcon} style={{fontSize: '100px', transform: "rotate(270deg)", color: 'white'}}/>
          <div className="info">
            <i><b>Welcome to Changwen's Website</b></i>
          </div>
        </div>

        
      </Plx>

      <Plx parallaxData={dataSun} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 1/2 * browserWidth -50,
          top: (1) * browserHeight,
        }}
      >
        <SvgIcon component={SunIcon} style={{fontSize: '100px', color: 'gold'}}/>
      </Plx>

      <Plx parallaxData={dataCloud4} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: -50,
          top: 1/4 * browserHeight,
        }}
      >
        <SvgIcon component={CloudIcon} style={{fontSize: '50px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataCloud5} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: -100,
          top: 1/8 * browserHeight,
        }}
      >
        <SvgIcon component={CloudEmptyIcon} style={{fontSize: '100px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataCloud6} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 100+browserWidth,
          top: 3/8 * browserHeight,
        }}
      >
        <SvgIcon component={CloudEmptyIcon} style={{fontSize: '100px', color: 'white'}}/>
      </Plx>

      <Plx parallaxData={dataCloud7} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 50+browserWidth,
          top: 1/4 * browserHeight,
        }}
      >
        <SvgIcon component={CloudIcon} style={{fontSize: '50px', color: 'white'}}/>
      </Plx>

      <Plx
        parallaxData={dataBg}
        style={{
          zIndex: -1500,
          position:'fixed',
          left: 0,
          top: 0,
          width: browserWidth,
          height: browserHeight * 2,
        }}
      >
      </Plx>

      <Plx parallaxData={dataScrollDown} 
        style={{
          zIndex: -1000,
          position:'fixed',
          left: 0,
          top: 1/2 * browserHeight,
        }}
      >
        <div style={{width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <b style={{fontSize:'20px', color:"white"}}>Please Scroll Down</b>
        </div>
      </Plx>

      



    </div>
    
  );

}



export default Home