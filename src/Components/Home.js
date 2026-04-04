import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';

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
          <h1 className='AboutTextHeading'><b>Who Am I?</b></h1>
          <p>
            I'm just an ordinary guy who's obsessed with numbers and the insights we can uncover from them.<br /><br />
            My skills are fluency in <b>Python</b>, <b>SQL</b>, <b>C++</b>. I am also proficient in data analysis tools, like <b>Excel</b>, <b>R</b>, and <b>Power BI</b>. In the future, I plan to learn <b>ETL pipelines</b> and expand my knowledge towards <b> Data Engineering</b>. <br /><br />
            I also have a deep love for coffee!!!
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