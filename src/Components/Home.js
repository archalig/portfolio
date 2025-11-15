import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi there!</h1>
          <h1>I'm <b>Archie Aligsao</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            As an aspiring data engineer, I love the process of changing raw data 
            into ideas that can have a positive impact on people's lives. 
            As a lifelong learner, I feel proudest when working on things that 
            challenges me as a person.<br /><br />
            I am fluent in <b>Python</b>, <b>R</b>, <b>C</b> and know a bit of <b>SQL</b>. As of now,
            I am actively learning projects in the <b>MERN</b> stack.<br />
            In addition, I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home