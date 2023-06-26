import React, {useRef, useState} from "react";
import Swing from 'react-reveal/Swing';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "./Home.scss"
import floor from "../../static/figure/floor.png";
import grass from "../../static/figure/grass.png";
import wood1 from "../../static/figure/wood1.png";
import wood2 from "../../static/figure/wood2.png";
import wood3 from "../../static/figure/wood3.png";
import stars from "../../static/figure/stars.png";
import land from "../../static/figure/land_.png";

const Home = () => {
  // return (
  //   <Parallax pages={5}>
  //     <ParallaxLayer offset={0} >
  //       <div style={{backgroundColor: 'yellow', width: '100%', height:'100%'}}>
  //         <NavBar/>
  //         <h1>0</h1>
  //       </div>
        
  //     </ParallaxLayer>

  //     <ParallaxLayer offset={1} >
  //       <div style={{backgroundColor: 'red', width: '100%', height:'100%'}}>
  //         <h1>1</h1>
  //       </div>
  //     </ParallaxLayer>

  //     <ParallaxLayer offset={2} speed={-0.5}>
  //       <div style={{backgroundColor: 'green', width: '100%', height:'100%'}}>
  //         <h1>2</h1>
  //       </div>
  //     </ParallaxLayer>

  //     <ParallaxLayer offset={3} >
  //       <h1>3</h1>
  //       <Footer/>
  //     </ParallaxLayer>
  //   </Parallax>
  // )

  const ref = useRef();

  return (
    <div>
      <Parallax pages={1.45}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Swing down>
              <h1 style={{color:'wheat'}}>Welcome to Changwen's Website</h1>
            </Swing>
          </div>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9999}
          speed={1.5}
          factor={1.1}
          style={{
            backgroundImage: `url(${wood3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.9999}
          speed={3}
          factor={2.1}
          style={{
            backgroundImage: `url(${wood1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
          factor={4}
          style={{
            backgroundImage: `url(${wood2})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.87}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${grass})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >

        </ParallaxLayer>

        <ParallaxLayer
          offset={0.88}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${floor})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
        >
          <NavBar/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.45}
          speed={0}
          factor={1}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100vh' }}>
            <div style={{ marginTop: 'auto' }}>
              <Footer/>
            </div>
          </div>
          <Footer/>
        </ParallaxLayer>



      </Parallax>
    </div>
  );

}



export default Home