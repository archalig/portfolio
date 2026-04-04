import React from 'react';
import ProjectBox from './ProjectBox';
import SeismoDataPHImage from '../images/SeismoDataPH.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SeismoDataPHImage} projectName="SeismoDataPH" />
      </div>

    </div>
  )
}

export default Projects