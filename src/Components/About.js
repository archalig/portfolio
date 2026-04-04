import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Archie Aligsao</b>, an analyst from Cebu, Philippines.
            I'm pursuing a degree in <b>Statistics</b> from the <b>Cebu Technological University – Main Campus</b>. <br/><br/>
            I have done an internship as a <b>business development intern</b> at King Properties, a Cebu-based real estate company.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Javascript' />
        <Skills skill='Node' />
        <Skills skill='MongoDB' />
        <Skills skill='Python' />
        <Skills skill='SQL' />
        <Skills skill='Excel' />
        <Skills skill='PowerBI' />
        <Skills skill='Tableau' />
        <Skills skill='Database' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        
      </div>
    </>
  )
}

export default About