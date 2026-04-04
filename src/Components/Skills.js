import React from 'react';

import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { DiJavascript1, DiNodejs, DiPython } from "react-icons/di";
import { SiMongodb, SiVercel, SiPowerbi, SiPostgresql, SiTableau } from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsFileEarmarkExcel } from "react-icons/bs";

const Skills = ({ skill }) => {

  const icon = {
    // CORE STACK
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    MongoDB: <SiMongodb />,

    // DATA STACK
    Python: <DiPython />,
    SQL: <SiPostgresql />,
    Excel: <BsFileEarmarkExcel />,
    PowerBI: <SiPowerbi />,
    Tableau: <SiTableau />,
    Database: <AiOutlineDatabase />,

    // TOOLS
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Vercel: <SiVercel />,
    Npm: <FaNpm />
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  );
};

export default Skills;